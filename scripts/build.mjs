// Static site generator for Guide Market.
// Reads articles from /content/*.md and pages from /pages/*.md, writes the site to /dist.
// Usage: node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, cpSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "dist");
const SITE = {
  name: "Guide Market",
  url: "https://www.guide-market.com",
  tagline: "Plain-English guides to AI, money, the economy and the tech you use every day.",
  adsenseClient: "ca-pub-2032734380573257",
};

export const CATEGORIES = {
  ai: { name: "AI", blurb: "What the tools can and can't do, without the hype." },
  economy: { name: "Economy", blurb: "Inflation, rates and markets, explained from the kitchen table." },
  money: { name: "Personal Finance", blurb: "Budgets, saving and debt — what works when real life gets in the way." },
  tech: { name: "Tech", blurb: "Security, gadgets and software, minus the jargon." },
};

// ---------- tiny markdown ----------
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function inline(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, t, h) => `<a href="${h}"${h.startsWith("http") ? ' rel="noopener"' : ""}>${t}</a>`);
}
// Only free-licence photo hosts are allowed, so a build can never ship an image we have no right to use.
const IMAGE_HOSTS = ["images.pexels.com", "images.unsplash.com"];
// Ask the CDN for a compressed, right-sized version (fast pages, good Core Web Vitals).
function sizedImage(url, w) {
  const u = new URL(url);
  if (u.hostname === "images.pexels.com") { u.search = ""; u.searchParams.set("auto", "compress"); u.searchParams.set("cs", "tinysrgb"); u.searchParams.set("w", w); }
  if (u.hostname === "images.unsplash.com") { u.searchParams.set("w", w); u.searchParams.set("q", "75"); u.searchParams.set("auto", "format"); u.searchParams.set("fit", "crop"); }
  return u.toString();
}
// ---------- charts ----------
// A chart is one block (no blank lines inside):
//   ```chart
//   type: bar            (bar = horizontal bars, column = vertical bars)
//   title: UK CPI inflation, annual rate
//   unit: %              (optional, appended to values)
//   source: Office for National Statistics | https://www.ons.gov.uk/...
//   note: optional one-line note under the chart
//   2021: 2.6
//   2022: 9.1
//   ```
// Every chart must cite a source with a link; the build fails otherwise.
function chart(lines, where) {
  const body = lines.slice(1, lines[lines.length - 1].trim() === "```" ? -1 : undefined);
  const opts = {};
  const data = [];
  for (const l of body) {
    const m = l.match(/^\s*([^:]+?)\s*:\s*(.+?)\s*$/);
    if (!m) continue;
    const [, k, v] = m;
    if (["type", "title", "unit", "source", "note"].includes(k.toLowerCase())) opts[k.toLowerCase()] = v;
    else {
      const n = Number(v.replace(/[, ]/g, ""));
      if (Number.isNaN(n)) throw new Error(`${where}: chart value "${v}" is not a number`);
      data.push({ label: k, value: n });
    }
  }
  if (!opts.title) throw new Error(`${where}: chart needs a title`);
  if (!opts.source || !opts.source.includes("|")) throw new Error(`${where}: chart needs "source: Name | https://url"`);
  if (data.length < 2) throw new Error(`${where}: chart needs at least 2 data rows`);
  const [srcName, srcUrl] = opts.source.split("|").map((x) => x.trim());
  const unit = opts.unit || "";
  const max = Math.max(...data.map((d) => Math.abs(d.value))) || 1;
  const fmt = (n) => `${n.toLocaleString("en-GB", { maximumFractionDigits: 2 })}${unit}`;
  const type = opts.type === "column" ? "column" : "bar";
  const rows = data.map((d) => {
    const pct = Math.max(2, (Math.abs(d.value) / max) * 100).toFixed(1);
    return type === "bar"
      ? `<div class="chart-row"><span class="chart-label">${inline(d.label)}</span><span class="chart-track"><span class="chart-fill${d.value < 0 ? " neg" : ""}" style="width:${pct}%"></span></span><span class="chart-val">${fmt(d.value)}</span></div>`
      : `<div class="chart-col"><span class="chart-val">${fmt(d.value)}</span><span class="chart-track"><span class="chart-fill${d.value < 0 ? " neg" : ""}" style="height:${pct}%"></span></span><span class="chart-label">${inline(d.label)}</span></div>`;
  }).join("");
  const table = `<table class="sr-only"><caption>${esc(opts.title)}</caption><tbody>${data.map((d) => `<tr><th scope="row">${esc(d.label)}</th><td>${fmt(d.value)}</td></tr>`).join("")}</tbody></table>`;
  return `<figure class="chart chart-${type}">
<figcaption class="chart-title">${inline(opts.title)}</figcaption>
<div class="chart-body" aria-hidden="true">${rows}</div>${table}
<p class="chart-source">${opts.note ? `${inline(opts.note)} · ` : ""}Source: <a href="${esc(srcUrl)}" rel="noopener">${esc(srcName)}</a></p>
</figure>`;
}

const cells = (row) => row.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

function markdown(src, where = "") {
  const out = [];
  const images = [];
  const toc = [];
  // A heading always ends its block, even if the writer forgot the blank line after it.
  const blocks = src.trim().replace(/^(#{2,3} .*)$/gm, "$1\n").split(/\n\s*\n/);
  for (const b of blocks) {
    const lines = b.split("\n");
    const img = lines[0].match(/^!\[(.*?)\]\((\S+?)\)$/);
    if (/^<!--[\s\S]*-->$/.test(b.trim())) continue; // editor notes, never published
    if (/^```chart\s*$/.test(lines[0])) {
      out.push(chart(lines, where));
      continue;
    }
    if (img) {
      // ![alt text](https://images.pexels.com/...)
      // Caption line(s) underneath, ending with the credit: *Photo: Name / Pexels*
      const [, alt, url] = img;
      const host = new URL(url).hostname;
      if (!IMAGE_HOSTS.includes(host)) throw new Error(`${where}: image host "${host}" not allowed (use Pexels or Unsplash)`);
      if (alt.trim().length < 15) throw new Error(`${where}: image needs a descriptive alt text (15+ chars)`);
      const caption = lines.slice(1).join(" ").trim();
      if (!/pexels|unsplash/i.test(caption)) throw new Error(`${where}: image caption must credit the photographer and Pexels/Unsplash`);
      const first = images.length === 0;
      images.push(sizedImage(url, 1200));
      out.push(`<figure>
<img src="${esc(sizedImage(url, 1200))}" srcset="${esc(sizedImage(url, 640))} 640w, ${esc(sizedImage(url, 1200))} 1200w" sizes="(max-width: 760px) 100vw, 720px" alt="${esc(alt)}" width="1200" height="800" ${first ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
<figcaption>${inline(caption)}</figcaption>
</figure>`);
    } else if (lines.length >= 2 && lines.every((l) => /^\s*\|/.test(l)) && /^\s*\|[\s:|-]+\|?\s*$/.test(lines[1])) {
      // | Header | Header |
      // |---|---|
      // | cell | cell |
      const head = cells(lines[0]);
      const rows = lines.slice(2).map(cells);
      out.push(`<div class="table-wrap"><table><thead><tr>${head.map((h) => `<th scope="col">${inline(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
    } else if (/^## /.test(b)) {
      const text = b.slice(3);
      toc.push({ id: slug(text), text });
      out.push(`<h2 id="${slug(text)}">${inline(text)}</h2>`);
    } else if (/^### /.test(b)) out.push(`<h3>${inline(b.slice(4))}</h3>`);
    else if (lines.every((l) => /^- /.test(l))) out.push(`<ul>${lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join("")}</ul>`);
    else if (lines.every((l) => /^\d+\. /.test(l))) out.push(`<ol>${lines.map((l) => `<li>${inline(l.replace(/^\d+\. /, ""))}</li>`).join("")}</ol>`);
    else if (lines.every((l) => /^>> ?/.test(l))) {
      // >> **In short:** a highlighted box (summary, tip, warning)
      const inner = lines.map((l) => l.replace(/^>> ?/, ""));
      const items = inner.filter((l) => /^- /.test(l));
      const text = inner.filter((l) => !/^- /.test(l)).join(" ");
      out.push(`<aside class="callout">${text ? `<p>${inline(text)}</p>` : ""}${items.length ? `<ul>${items.map((l) => `<li>${inline(l.slice(2))}</li>`).join("")}</ul>` : ""}</aside>`);
    } else if (lines.every((l) => /^> ?/.test(l))) out.push(`<blockquote><p>${inline(lines.map((l) => l.replace(/^> ?/, "")).join(" "))}</p></blockquote>`);
    else out.push(`<p>${inline(lines.join(" "))}</p>`);
  }
  return { html: out.join("\n"), images, toc };
}
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function parse(file) {
  const raw = readFileSync(file, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const body = m[2];
  const words = body.split(/\s+/).length;
  const { html, images, toc } = markdown(body, file);
  // Optional cover photo for cards and the article header:
  //   cover: https://images.pexels.com/...   coverAlt: ...   coverCredit: Name / Pexels   coverPage: https://www.pexels.com/photo/...
  if (meta.cover) {
    const host = new URL(meta.cover).hostname;
    if (!IMAGE_HOSTS.includes(host)) throw new Error(`${file}: cover host "${host}" not allowed (use Pexels or Unsplash)`);
    if (!meta.coverAlt || meta.coverAlt.length < 15) throw new Error(`${file}: cover needs coverAlt (15+ chars)`);
    if (!/pexels|unsplash/i.test(meta.coverCredit || "")) throw new Error(`${file}: cover needs coverCredit (Name / Pexels|Unsplash)`);
  }
  return { ...meta, body, html, images, toc, words, minutes: Math.max(3, Math.round(words / 230)) };
}

// Cover image for an article: frontmatter cover, else first photo in the body, else none (styled placeholder).
const coverOf = (a) => a.cover || a.images[0] || "";
function thumb(a, w, cls = "thumb", eager = false) {
  const src = coverOf(a);
  if (!src) return `<div class="${cls} ph" aria-hidden="true"><span>${CATEGORIES[a.category].name}</span></div>`;
  const alt = a.coverAlt || "";
  return `<div class="${cls}"><img src="${esc(sizedImage(src, w))}" srcset="${esc(sizedImage(src, Math.round(w / 2)))} ${Math.round(w / 2)}w, ${esc(sizedImage(src, w))} ${w}w" sizes="(max-width: 760px) 100vw, ${Math.round(w / 2)}px" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></div>`;
}

const fmtDate = (d) => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

// ---------- layout ----------
function layout({ title, description, path, body, head = "", image = "" }) {
  const full = title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const nav = Object.entries(CATEGORIES)
    .map(([k, c]) => `<a href="/category/${k}"${path === `/category/${k}` ? ' aria-current="page"' : ""}>${c.name}</a>`)
    .join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(description || SITE.tagline)}">
<link rel="canonical" href="${SITE.url}${path === "/" ? "" : path}">
<meta property="og:title" content="${esc(title || SITE.name)}">
<meta property="og:description" content="${esc(description || SITE.tagline)}">
<meta property="og:type" content="${head.includes("BlogPosting") ? "article" : "website"}">
<meta property="og:url" content="${SITE.url}${path}">
${image ? `<meta property="og:image" content="${esc(image)}">\n<meta name="twitter:card" content="summary_large_image">\n<link rel="preconnect" href="https://${new URL(image).hostname}">` : ""}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}" crossorigin="anonymous"></script>
${head}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="masthead">
  <div class="wrap masthead-inner">
    <a class="brand" href="/" aria-label="Guide Market home">
      <svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="17" width="6" height="11" rx="2"/><rect x="13" y="11" width="6" height="17" rx="2"/><rect x="23" y="4" width="6" height="24" rx="2"/></svg>
      <span class="brand-name">Guide Market</span>
    </a>
    <p class="brand-tag">AI, economy, money and tech —<br>explained in plain English</p>
    <nav class="nav" aria-label="Sections">${nav}</nav>
    <a class="search-btn" href="/search" aria-label="Search articles"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></a>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="footer">
  <div class="wrap footer-inner">
    <div>
      <p class="brand"><svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="17" width="6" height="11" rx="2"/><rect x="13" y="11" width="6" height="17" rx="2"/><rect x="23" y="4" width="6" height="24" rx="2"/></svg><span class="brand-name">Guide Market</span></p>
      <p class="muted">${SITE.tagline}</p>
    </div>
    <nav aria-label="Sections">${Object.entries(CATEGORIES).map(([k, c]) => `<a href="/category/${k}">${c.name}</a>`).join("")}</nav>
    <nav aria-label="Site">
      <a href="/about">About</a>
      <a href="/editorial-policy">Editorial policy</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
    </nav>
  </div>
  <div class="wrap"><p class="muted small">© ${new Date().getFullYear()} Guide Market. Nothing on this site is personal financial advice.</p></div>
</footer>
<script type="module">import { inject } from "https://esm.sh/@vercel/analytics@2.0.1"; inject({ mode: "production" });</script>
</body>
</html>`;
}

const shortDate = (d) => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
const clock = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`;
const metaLine = (a) => `<p class="meta"><time datetime="${a.date}">${shortDate(a.date)}</time></p>`;
const pill = (a) => `<a class="pill" href="/category/${a.category}">${CATEGORIES[a.category].name}</a>`;

// Big image card with the text over the photo (hero).
const heroCard = (a, size = "lg") => `
<article class="hcard hcard-${size}" data-cat="${a.category}">
  ${thumb(a, size === "lg" ? 1400 : 800, "hcard-img", size === "lg")}
  <div class="hcard-body">
    ${pill(a)}
    <h${size === "lg" ? 2 : 3}><a href="/articles/${a.slug}">${esc(a.title)}</a></h${size === "lg" ? 2 : 3}>
    ${size === "lg" ? `<p class="hcard-desc">${esc(a.description)}</p>` : ""}
    ${metaLine(a)}
  </div>
</article>`;

// Row card: thumbnail left, text right (latest lists).
const rowCard = (a) => `
<article class="rcard" data-cat="${a.category}">
  ${thumb(a, 640)}
  <div class="rcard-body">
    ${pill(a)}
    <h3><a href="/articles/${a.slug}">${esc(a.title)}</a></h3>
    <p class="rcard-desc">${esc(a.description)}</p>
    ${metaLine(a)}
  </div>
</article>`;

// Vertical card: image on top (shelves, "keep reading").
const card = (a) => `
<article class="vcard" data-cat="${a.category}">
  ${thumb(a, 800)}
  <div class="vcard-body">
    ${pill(a)}
    <h3><a href="/articles/${a.slug}">${esc(a.title)}</a></h3>
    ${metaLine(a)}
  </div>
</article>`;

// Sidebar: numbered list + about box.
const sidebar = (list, title = "Editor's picks") => `
<aside class="sidebar">
  <section class="side-box">
    <h2 class="side-title"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>${title}</h2>
    <ol class="ranked">${list.map((a, i) => `<li data-cat="${a.category}"><span class="rank">${i + 1}</span><div><a href="/articles/${a.slug}">${esc(a.title)}</a><p class="meta">${shortDate(a.date)}<span class="dot">·</span><span class="cat-text">${CATEGORIES[a.category].name}</span></p></div></li>`).join("")}</ol>
  </section>
  <section class="side-box side-about">
    <h2 class="side-title">About Guide Market</h2>
    <p>Independent, plain-English guides on the decisions technology and money throw at you. Researched from primary sources, written and checked by a person.</p>
    <a class="btn" href="/about">How we work <span aria-hidden="true">→</span></a>
  </section>
</aside>`;

const topics = () => `
<nav class="topics" aria-label="Topics">
  <span class="topics-label"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>Topics</span>
  ${Object.entries(CATEGORIES).map(([k, c]) => `<a class="chip" href="/category/${k}" data-cat="${k}">${c.name}</a>`).join("")}
  <a class="chip" href="/search">All articles</a>
</nav>`;

// ---------- build ----------
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(join(ROOT, "public"), OUT, { recursive: true });

const write = (p, html) => {
  const file = join(OUT, p === "/" ? "index.html" : `${p.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};

const articles = readdirSync(join(ROOT, "content"))
  .filter((f) => f.endsWith(".md") && f !== "PLAN.md")
  .map((f) => ({ slug: f.replace(/\.md$/, ""), ...parse(join(ROOT, "content", f)) }))
  .filter((a) => a.draft !== "true")
  .sort((a, b) => b.date.localeCompare(a.date));

for (const a of articles) {
  if (!CATEGORIES[a.category]) throw new Error(`Unknown category "${a.category}" in ${a.slug}`);
}

// Home
// Editor's picks: the newest article from each category, then the rest by date.
const picks = [...Object.keys(CATEGORIES).map((k) => articles.find((a) => a.category === k)).filter(Boolean), ...articles]
  .filter((a, i, all) => all.indexOf(a) === i).slice(0, 5);
const sectionHead = (title, href, label) => `<div class="section-head"><h2>${title}</h2>${href ? `<a href="${href}">${label} <span aria-hidden="true">›</span></a>` : ""}</div>`;

const [lead, side1, side2] = articles;
const featured = new Set([lead, side1, side2].filter(Boolean));
write("/", layout({
  path: "/",
  image: lead ? coverOf(lead) : "",
  body: `
<h1 class="sr-only">${SITE.name}: ${SITE.tagline}</h1>
<section class="wrap hero">
  ${lead ? heroCard(lead, "lg") : ""}
  <div class="hero-side">${[side1, side2].filter(Boolean).map((a) => heroCard(a, "sm")).join("")}</div>
</section>
<div class="wrap">${topics()}</div>
<div class="wrap with-sidebar">
  <div class="main-col">
    <section>
      ${sectionHead("Latest articles", "/search", "See all articles")}
      <div class="rows">${articles.filter((a) => !featured.has(a)).slice(0, 8).map(rowCard).join("") || articles.slice(0, 6).map(rowCard).join("")}</div>
    </section>
    ${Object.entries(CATEGORIES).map(([k, c]) => {
      const list = articles.filter((a) => a.category === k).slice(0, 3);
      if (!list.length) return "";
      return `<section class="shelf" data-cat="${k}">${sectionHead(c.name, `/category/${k}`, `All ${c.name}`)}<div class="shelf-row">${list.map(card).join("")}</div></section>`;
    }).join("")}
  </div>
  ${sidebar(picks)}
</div>`,
}));

// Categories
for (const [k, c] of Object.entries(CATEGORIES)) {
  const list = articles.filter((a) => a.category === k);
  write(`/category/${k}`, layout({
    title: c.name,
    description: c.blurb,
    path: `/category/${k}`,
    body: `<section class="wrap cat-head" data-cat="${k}"><span class="pill pill-static">${c.name}</span><h1>${c.name}</h1><p class="lede">${c.blurb}</p></section>
<div class="wrap">${topics()}</div>
<div class="wrap with-sidebar">
  <div class="main-col"><div class="rows">${list.length ? list.map(rowCard).join("") : "<p>New articles are on the way.</p>"}</div></div>
  ${sidebar(picks.filter((a) => a.category !== k).slice(0, 4).concat(picks.filter((a) => a.category === k)).slice(0, 5))}
</div>`,
  }));
}

// Search page + index (all client-side, no server needed)
writeFileSync(join(OUT, "search-index.json"), JSON.stringify(articles.map((a) => ({
  slug: a.slug, title: a.title, description: a.description, category: a.category, cat: CATEGORIES[a.category].name,
  date: shortDate(a.date), minutes: a.minutes, text: a.body.replace(/[#>*`|\[\]()!_-]/g, " ").replace(/\s+/g, " ").toLowerCase(),
}))));
write("/search", layout({
  title: "Search",
  description: "Search every Guide Market article.",
  path: "/search",
  body: `<section class="wrap-narrow search-head"><h1>Search articles</h1>
<form class="search-form" role="search" onsubmit="return false"><label class="sr-only" for="q">Search</label><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="q" type="search" placeholder="Inflation, passkeys, budgeting…" autocomplete="off" autofocus></form>
<p class="muted small" id="count"></p></section>
<div class="wrap-narrow"><div class="rows" id="results">${articles.map(rowCard).join("")}</div></div>
<script>
(async () => {
  const q = document.getElementById("q"), results = document.getElementById("results"), count = document.getElementById("count");
  const cards = [...results.children];
  const idx = await fetch("/search-index.json").then((r) => r.json());
  const run = () => {
    const terms = q.value.toLowerCase().trim().split(/\\s+/).filter(Boolean);
    let n = 0;
    idx.forEach((a, i) => {
      const hay = (a.title + " " + a.description + " " + a.cat + " " + a.text).toLowerCase();
      const hit = terms.every((t) => hay.includes(t));
      cards[i].hidden = !hit; if (hit) n++;
    });
    count.textContent = terms.length ? n + (n === 1 ? " article" : " articles") + " found" : idx.length + " articles";
  };
  const p = new URLSearchParams(location.search).get("q"); if (p) q.value = p;
  q.addEventListener("input", run); run();
})();
</script>`,
}));

// Articles
for (const a of articles) {
  const related = articles.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 2);
  const more = related.length ? related : articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.updated || a.date,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/articles/${a.slug}`,
    wordCount: a.words,
    ...(a.images.length ? { image: a.images } : {}),
  };
  // Table of contents for long reads (4+ sections).
  const toc = a.toc.length >= 4
    ? `<nav class="toc" aria-label="In this article"><p class="toc-title">In this article</p><ol>${a.toc.map((h) => `<li><a href="#${h.id}">${inline(h.text)}</a></li>`).join("")}</ol></nav>`
    : "";
  write(`/articles/${a.slug}`, layout({
    title: a.title,
    description: a.description,
    path: `/articles/${a.slug}`,
    image: coverOf(a),
    head: `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
    body: `
<article class="post" data-cat="${a.category}">
  <header class="wrap-narrow post-head">
    <a class="kicker" href="/category/${a.category}">${CATEGORIES[a.category].name}</a>
    <h1>${esc(a.title)}</h1>
    <p class="lede">${esc(a.description)}</p>
    <p class="meta byline"><time datetime="${a.date}">${fmtDate(a.date)}</time>${a.updated ? `<span class="dot">·</span>Updated ${fmtDate(a.updated)}` : ""}</p>
  </header>
  ${a.cover ? `<figure class="wrap post-cover">${thumb(a, 1600, "post-cover-img", true)}<figcaption>Photo: ${a.coverPage ? `<a href="${esc(a.coverPage)}" rel="noopener">${esc(a.coverCredit)}</a>` : esc(a.coverCredit)}</figcaption></figure>` : ""}
  <div class="wrap-narrow prose">
${toc}
${a.html}
  </div>
  <footer class="wrap-narrow post-foot">
    <p class="muted small">Spotted a mistake? <a href="/contact">Tell us</a> — we correct articles and note the change. Read our <a href="/editorial-policy">editorial policy</a>.</p>
  </footer>
</article>
<section class="wrap shelf">
  ${sectionHead("Keep reading", `/category/${a.category}`, `More ${CATEGORIES[a.category].name}`)}
  <div class="shelf-row">${articles.filter((x) => x.slug !== a.slug).sort((x, y) => (y.category === a.category) - (x.category === a.category)).slice(0, 3).map(card).join("")}</div>
</section>`,
  }));
}

// Static pages
for (const f of readdirSync(join(ROOT, "pages")).filter((f) => f.endsWith(".md"))) {
  const p = parse(join(ROOT, "pages", f));
  const path = `/${f.replace(/\.md$/, "")}`;
  write(path, layout({
    title: p.title,
    description: p.description,
    path,
    body: `<article class="post"><header class="wrap-narrow post-head"><h1>${esc(p.title)}</h1>${p.date ? `<p class="meta">Last updated ${fmtDate(p.date)}</p>` : ""}</header><div class="wrap-narrow prose">${p.html}</div></article>`,
  }));
}

// 404
write("/404", layout({ title: "Page not found", path: "/404", body: `<section class="wrap-narrow page-head"><h1>Page not found</h1><p class="lede">That page doesn't exist (any more). Try the <a href="/">home page</a>.</p></section>` }));

// Sitemap
const urls = ["/", "/search", ...Object.keys(CATEGORIES).map((k) => `/category/${k}`), ...articles.map((a) => `/articles/${a.slug}`),
  ...readdirSync(join(ROOT, "pages")).filter((f) => f.endsWith(".md")).map((f) => `/${f.replace(/\.md$/, "")}`)];
writeFileSync(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => {
  const a = articles.find((x) => `/articles/${x.slug}` === u);
  return `  <url><loc>${SITE.url}${u === "/" ? "" : u}</loc>${a ? `<lastmod>${a.updated || a.date}</lastmod>` : ""}</url>`;
}).join("\n")}
</urlset>
`);

console.log(`Built ${articles.length} articles, ${urls.length} pages → dist/`);
