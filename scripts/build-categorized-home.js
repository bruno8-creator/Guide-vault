const fs = require("fs");
const path = require("path");

const root = process.cwd();
const site = "https://www.guide-market.com";

const categories = [
  {
    id: "investing",
    label: "Investing",
    intro: "Research guides for stocks, ETFs, crypto, AI infrastructure, and building a sensible watchlist.",
    slugs: [
      "best-cryptocurrencies-to-research-2026.html",
      "bitcoin-vs-ethereum-2026.html",
      "best-stocks-to-watch-2026.html",
      "best-etfs-for-beginners-2026.html",
      "best-ai-stocks-to-watch-2026.html",
      "how-to-build-an-investment-watchlist-2026.html",
    ],
  },
  {
    id: "travel-lifestyle",
    label: "Travel, Fitness & Life",
    intro: "Useful AI workflows for travel planning, flights, workouts, meal planning, budgeting, and daily routines.",
    slugs: [
      "best-ai-tools-for-travel-planning.html",
      "best-ai-tools-for-finding-cheap-flights.html",
      "best-ai-tools-for-gym-workouts.html",
      "best-ai-apps-for-meal-planning.html",
      "best-ai-tools-for-budgeting-money.html",
      "best-ai-tools-for-daily-life.html",
      "best-ai-tools-for-personal-assistants.html",
    ],
  },
  {
    id: "education-careers",
    label: "Education & Careers",
    intro: "Guides for studying faster, writing better essays, learning languages, teaching, resumes, and interviews.",
    slugs: [
      "best-ai-tools-for-students.html",
      "best-ai-tools-for-studying-faster.html",
      "best-ai-tools-for-writing-essays.html",
      "best-ai-tools-for-learning-languages.html",
      "best-ai-tools-for-teachers.html",
      "best-ai-tools-for-online-courses.html",
      "best-ai-resume-builders.html",
      "best-ai-tools-for-job-interviews.html",
    ],
  },
  {
    id: "business-marketing",
    label: "Business & Marketing",
    intro: "Practical comparisons for small businesses, customer support, email marketing, real estate, and social content.",
    slugs: [
      "best-ai-tools-for-small-businesses.html",
      "best-ai-customer-support-tools.html",
      "best-ai-email-marketing-tools.html",
      "best-ai-tools-for-real-estate-agents.html",
      "best-ai-tools-for-social-media-content.html",
      "best-ai-tools-for-productivity.html",
    ],
  },
  {
    id: "creative-web",
    label: "Creative, Video & Web",
    intro: "Tools for presentations, TikTok, YouTube, image generation, logo design, podcasts, websites, and visual production.",
    slugs: [
      "best-ai-tools-for-creating-tiktok-videos.html",
      "best-ai-tools-for-youtube-creators.html",
      "best-ai-tools-for-making-presentations.html",
      "best-ai-image-generators.html",
      "best-ai-tools-for-logo-design.html",
      "best-ai-podcast-tools.html",
      "best-ai-tools-for-website-building.html",
    ],
  },
  {
    id: "development-research",
    label: "Development & Research",
    intro: "Sharper workflows for developers and researchers who need useful AI output they can verify.",
    slugs: [
      "best-ai-coding-tools-for-developers.html",
      "best-ai-research-tools.html",
    ],
  },
];

const articleDir = path.join(root, "articles");
const articles = new Map();

for (const fileName of fs.readdirSync(articleDir).filter((file) => file.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(articleDir, fileName), "utf8");
  if ((html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]?.includes("noindex")) {
    continue;
  }

  const title = clean((html.match(/<h1>(.*?)<\/h1>/) || [])[1] || fileName.replace(".html", ""));
  const description = clean((html.match(/<meta name="description" content="([^"]+)"/) || [])[1] || "");
  const section = clean((html.match(/<meta property="article:section" content="([^"]+)"/) || [])[1] || "Guide");
  const image =
    (html.match(/<img[^>]+class="[^"]*article-image[^"]*"[^>]+src="([^"]+)"/) || [])[1]?.replace("../", "") ||
    "assets/guide-market-logo.svg";
  const readingTime = (html.match(/Estimated reading time: ([^.<]+)[.<]/) || [])[1] || "";

  articles.set(fileName, {
    fileName,
    title,
    description: shortDescription(description),
    section,
    image,
    readingTime,
  });
}

const listed = new Set(categories.flatMap((category) => category.slugs));
const unlisted = [...articles.keys()].filter((slug) => !listed.has(slug));
if (unlisted.length) {
  categories.push({
    id: "more-guides",
    label: "More Guides",
    intro: "Additional practical Guide Market articles.",
    slugs: unlisted,
  });
}

const articleCount = [...articles.keys()].length;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Guide Market | AI Tools, Investing and Practical Guides</title>
  <meta name="description" content="Guide Market organizes practical AI, investing, productivity, travel, education, business and creative guides by category with reviewed recommendations.">
  <link rel="canonical" href="${site}/">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#f8fafc">
  <link rel="icon" href="assets/guide-market-logo.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Guide Market">
  <meta property="og:title" content="Guide Market | AI Tools, Investing and Practical Guides">
  <meta property="og:description" content="Browse reviewed guides by category: AI tools, investing, travel, education, business, marketing, creative work and productivity.">
  <meta property="og:url" content="${site}/">
  <meta property="og:image" content="${site}/assets/guide-market-logo.svg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Guide Market | AI Tools, Investing and Practical Guides">
  <meta name="twitter:description" content="Reviewed practical guides organized by category for better research and faster decisions.">
  <meta name="twitter:image" content="${site}/assets/guide-market-logo.svg">
  <script type="application/ld+json">${JSON.stringify(schema(), null, 0)}</script>
  <link rel="stylesheet" href="styles.css">
  <script type="module" src="analytics.js"></script>
</head>
<body class="home-page">
  <header class="site-header">
    <a class="brand" href="index.html"><img src="assets/guide-market-logo.svg" alt="Guide Market logo"><span>Guide Market</span></a>
    <nav class="nav" aria-label="Main navigation">
      <a href="#categories">Categories</a>
      <a href="#all-guides">Articles</a>
      <a href="methodology.html">How we test</a>
      <a href="editorial-policy.html">Editorial policy</a>
      <a href="about.html">About</a>
    </nav>
  </header>
  <main>
    <section class="home-hero">
      <div>
        <p class="eyebrow">Reviewed practical guides</p>
        <h1>Find useful AI tools, investing research, and work systems by category.</h1>
        <p>Guide Market is organized like an editorial library, not a random article feed. Start with the problem you want to solve, compare the relevant guides, and use the linked methodology notes when accuracy, money, or public recommendations matter.</p>
        <div class="hero-actions"><a href="#categories">Browse categories</a><a href="#all-guides">See all articles</a></div>
      </div>
      <aside class="hero-proof" aria-label="Guide Market editorial standards">
        <strong>What each guide is checked for</strong>
        <ul>
          <li>Clear reader problem and practical recommendation</li>
          <li>Pros, cons, comparisons, mistakes and FAQs</li>
          <li>Official links and update notes where details can change</li>
          <li>Internal links to related guides in the same topic cluster</li>
        </ul>
      </aside>
    </section>
    <section class="trust-band" aria-label="Site summary">
      <div><strong>${articleCount}</strong><span>indexed guides</span></div>
      <div><strong>${categories.length}</strong><span>reader categories</span></div>
      <div><strong>2026</strong><span>updated comparisons</span></div>
      <div><strong>Editorial</strong><span>review process</span></div>
    </section>
    <section class="section" id="categories">
      <div class="section-heading">
        <p class="eyebrow">Categories</p>
        <h2>Choose a topic cluster</h2>
        <p>These category links improve navigation for readers and help search engines understand how the articles are connected.</p>
      </div>
      <div class="category-grid">
        ${categories.map(categoryCard).join("\n        ")}
      </div>
    </section>
    <section class="section methodology-preview">
      <div>
        <p class="eyebrow">Editorial process</p>
        <h2>Why the site is structured this way</h2>
        <p>Google and readers both reward useful organization. Grouping guides by category makes it easier to compare similar options, continue reading, and avoid isolated pages with no editorial context.</p>
      </div>
      <ol>
        <li>Pick a reader problem.</li>
        <li>Compare practical tools or research paths.</li>
        <li>Show limitations and verification steps.</li>
        <li>Connect the article to related guides.</li>
      </ol>
    </section>
    <section class="section" id="all-guides">
      <div class="section-heading">
        <p class="eyebrow">Articles</p>
        <h2>All guides by category</h2>
        <p>Each card links to a full guide with editorial notes, comparison tables, examples, FAQs, and related articles.</p>
      </div>
      ${categories.map(categorySection).join("\n      ")}
    </section>
  </main>
  <footer class="site-footer">
    <p>Guide Market publishes independent, practical guides about AI tools, investing research, work, learning, travel, money, and business.</p>
    <nav aria-label="Footer"><a href="about.html">About</a><a href="methodology.html">How we test</a><a href="editorial-policy.html">Editorial policy</a><a href="contact.html">Contact</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="ads.txt">Ads.txt</a><a href="sitemap.xml">Sitemap</a></nav>
  </footer>
</body>
</html>
`;

fs.writeFileSync(path.join(root, "index.html"), html);

function categoryCard(category) {
  const count = category.slugs.filter((slug) => articles.has(slug)).length;
  return `<a class="category-card" href="#${category.id}"><span>${category.label}</span><strong>${count} guides</strong><p>${category.intro}</p></a>`;
}

function categorySection(category) {
  const cards = category.slugs
    .map((slug) => articles.get(slug))
    .filter(Boolean)
    .map(articleCard)
    .join("\n        ");
  return `<section class="category-section" id="${category.id}">
        <div class="category-heading">
          <div><h3>${category.label}</h3><p>${category.intro}</p></div>
          <a href="#categories">Back to categories</a>
        </div>
        <div class="article-grid">${cards}</div>
      </section>`;
}

function articleCard(article) {
  return `<a class="article-card" href="articles/${article.fileName}">
          <img src="${article.image}" alt="${article.title}" decoding="async" loading="lazy">
          <span>${article.section}</span>
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          ${article.readingTime ? `<small>${article.readingTime}</small>` : ""}
        </a>`;
}

function schema() {
  const items = categories.flatMap((category) =>
    category.slugs
      .map((slug) => articles.get(slug))
      .filter(Boolean)
      .map((article) => ({
        "@type": "ListItem",
        position: 0,
        name: article.title,
        url: `${site}/articles/${article.fileName}`,
      }))
  );
  items.forEach((item, index) => {
    item.position = index + 1;
  });
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Guide Market",
      url: `${site}/`,
      description: "Practical reviewed guides about AI tools, investing research, productivity, travel, education, business and creative workflows.",
      publisher: {
        "@type": "Organization",
        name: "Guide Market",
        logo: `${site}/assets/guide-market-logo.svg`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Guide Market article categories",
      itemListElement: items,
    },
  ];
}

function clean(value) {
  return String(value || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function shortDescription(value) {
  const cleaned = clean(value);
  if (cleaned.length <= 145) return cleaned;
  return `${cleaned.slice(0, 142).replace(/\s+\S*$/, "")}...`;
}
