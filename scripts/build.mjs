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
function markdown(src) {
  const out = [];
  const blocks = src.trim().split(/\n\s*\n/);
  for (const b of blocks) {
    const lines = b.split("\n");
    if (/^<!--[\s\S]*-->$/.test(b.trim())) continue; // editor notes, never published
    if (/^## /.test(b)) out.push(`<h2 id="${slug(b.slice(3))}">${inline(b.slice(3))}</h2>`);
    else if (/^### /.test(b)) out.push(`<h3>${inline(b.slice(4))}</h3>`);
    else if (lines.every((l) => /^- /.test(l))) out.push(`<ul>${lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join("")}</ul>`);
    else if (lines.every((l) => /^\d+\. /.test(l))) out.push(`<ol>${lines.map((l) => `<li>${inline(l.replace(/^\d+\. /, ""))}</li>`).join("")}</ol>`);
    else if (lines.every((l) => /^> ?/.test(l))) out.push(`<blockquote><p>${inline(lines.map((l) => l.replace(/^> ?/, "")).join(" "))}</p></blockquote>`);
    else out.push(`<p>${inline(lines.join(" "))}</p>`);
  }
  return out.join("\n");
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
  return { ...meta, body, html: markdown(body), minutes: Math.max(3, Math.round(words / 230)) };
}

const fmtDate = (d) => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

// ---------- layout ----------
function layout({ title, description, path, body, head = "" }) {
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
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}" crossorigin="anonymous"></script>
${head}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="masthead">
  <div class="wrap masthead-inner">
    <a class="logo" href="/"><span class="logo-mark" aria-hidden="true">G</span>Guide Market</a>
    <nav class="nav" aria-label="Sections">${nav}</nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="footer">
  <div class="wrap footer-inner">
    <div>
      <p class="logo logo-small"><span class="logo-mark" aria-hidden="true">G</span>Guide Market</p>
      <p class="muted">${SITE.tagline}</p>
    </div>
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

const card = (a, big = false) => `
<article class="card${big ? " card-big" : ""}" data-cat="${a.category}">
  <a class="kicker" href="/category/${a.category}">${CATEGORIES[a.category].name}</a>
  <h${big ? 2 : 3}><a href="/articles/${a.slug}">${esc(a.title)}</a></h${big ? 2 : 3}>
  <p>${esc(a.description)}</p>
  <p class="meta">${fmtDate(a.date)} · ${a.minutes} min read</p>
</article>`;

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
const [lead, ...rest] = articles;
write("/", layout({
  path: "/",
  body: `
<section class="wrap intro">
  <p class="intro-text">${SITE.tagline}</p>
</section>
<section class="wrap home-grid">
  <div class="lead">${lead ? card(lead, true) : ""}</div>
  <div class="latest">
    <h2 class="section-label">Latest</h2>
    ${rest.slice(0, 4).map((a) => card(a)).join("")}
  </div>
</section>
${Object.entries(CATEGORIES).map(([k, c]) => {
  const list = articles.filter((a) => a.category === k).slice(0, 3);
  if (!list.length) return "";
  return `<section class="wrap shelf">
  <div class="shelf-head"><h2 class="section-label">${c.name}</h2><a href="/category/${k}">All ${c.name} →</a></div>
  <div class="shelf-row">${list.map((a) => card(a)).join("")}</div>
</section>`;
}).join("")}`,
}));

// Categories
for (const [k, c] of Object.entries(CATEGORIES)) {
  const list = articles.filter((a) => a.category === k);
  write(`/category/${k}`, layout({
    title: c.name,
    description: c.blurb,
    path: `/category/${k}`,
    body: `<section class="wrap page-head"><h1>${c.name}</h1><p class="lede">${c.blurb}</p></section>
<section class="wrap list">${list.length ? list.map((a) => card(a)).join("") : "<p>New articles are on the way.</p>"}</section>`,
  }));
}

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
    author: { "@type": "Person", name: a.author },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/articles/${a.slug}`,
  };
  write(`/articles/${a.slug}`, layout({
    title: a.title,
    description: a.description,
    path: `/articles/${a.slug}`,
    head: `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
    body: `
<article class="post" data-cat="${a.category}">
  <header class="wrap-narrow post-head">
    <a class="kicker" href="/category/${a.category}">${CATEGORIES[a.category].name}</a>
    <h1>${esc(a.title)}</h1>
    <p class="lede">${esc(a.description)}</p>
    <p class="meta">By ${esc(a.author)} · ${fmtDate(a.date)}${a.updated ? ` · Updated ${fmtDate(a.updated)}` : ""} · ${a.minutes} min read</p>
  </header>
  <div class="wrap-narrow prose">
${a.html}
  </div>
  <footer class="wrap-narrow post-foot">
    <p class="muted small">Spotted a mistake? <a href="/contact">Tell us</a> — we correct articles and note the change. Read our <a href="/editorial-policy">editorial policy</a>.</p>
  </footer>
</article>
<section class="wrap shelf">
  <h2 class="section-label">Keep reading</h2>
  <div class="shelf-row">${more.map((x) => card(x)).join("")}</div>
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
const urls = ["/", ...Object.keys(CATEGORIES).map((k) => `/category/${k}`), ...articles.map((a) => `/articles/${a.slug}`),
  ...readdirSync(join(ROOT, "pages")).filter((f) => f.endsWith(".md")).map((f) => `/${f.replace(/\.md$/, "")}`)];
writeFileSync(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.url}${u === "/" ? "" : u}</loc></url>`).join("\n")}
</urlset>
`);

console.log(`Built ${articles.length} articles, ${urls.length} pages → dist/`);
