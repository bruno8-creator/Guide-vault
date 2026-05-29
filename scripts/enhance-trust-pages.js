const fs = require("fs");
const site = "https://www.guide-market.com";

const pages = {
  "about.html": {
    title: "About Guide Market | Editorial Standards",
    description: "Learn who writes Guide Market, how guides are reviewed, why the site is useful, and how to send corrections or source updates.",
    eyebrow: "About",
    h1: "About Guide Market",
    body: `
      <p>Guide Market is an independent editorial website for readers who want practical guidance before choosing AI tools, productivity apps, investing research workflows, travel planners, student tools, and business software.</p>
      <p>The site is written and reviewed by the <strong>Guide Market Editorial Team</strong>. Our job is not to publish the longest possible list. Our job is to explain what a reader should actually compare, when a free option is enough, when a paid plan may be worth it, what the main limitations are, and what details should be checked on official websites before acting.</p>
      <h2>What makes the site useful</h2>
      <p>Every strong guide starts with a real reader problem. A student may need a better way to review notes. A creator may need a faster video workflow. A traveler may need help planning a realistic itinerary. An investor may need a watchlist framework without confusing research with financial advice. We use those scenarios to keep articles grounded.</p>
      <ul>
        <li>Guides are grouped by topic so readers can compare related articles instead of landing on isolated pages.</li>
        <li>Articles include pros, cons, mistakes, FAQs, practical workflows, related links, and official sources when relevant.</li>
        <li>We avoid guaranteed claims, easy-money language, hidden advertising, and one-size-fits-all recommendations.</li>
        <li>Older thin pages are marked noindex or redirected toward stronger English guides.</li>
      </ul>
      <h2>Who reviews the content?</h2>
      <p>Articles are reviewed by the Guide Market Editorial Team for clarity, usefulness, repetition, source quality, and whether the page offers enough original editorial value. When a tool, price, product feature, or market detail can change, we add reminders to verify the latest information through the official source.</p>
      <h2>Editorial independence</h2>
      <p>Guide Market may display ads, but advertising is kept separate from editorial recommendations. A tool appearing in an article does not mean it paid for placement. Recommendations are based on practical fit, limitations, usability, and whether the tool makes sense for the reader scenario described in the guide.</p>
      <h2>Contact</h2>
      <p>For corrections, suggestions, source updates, or questions about a published page, email <strong>guidemarket.com@gmail.com</strong>.</p>
    `,
  },
  "methodology.html": {
    title: "How Guide Market Tests and Reviews Content",
    description: "Our editorial methodology explains how Guide Market reviews AI tools, investing topics, source links, examples, and recommendations before publication.",
    eyebrow: "Methodology",
    h1: "How Guide Market tests and reviews guides",
    body: `
      <p>Guide Market exists to help readers make practical decisions. We do not publish articles only because a keyword is popular. Every guide starts with a reader problem: planning a trip, choosing a study tool, comparing AI video apps, researching ETFs, or deciding whether a workflow is worth paying for.</p>
      <h2>Our review process</h2>
      <ol>
        <li><strong>Define the real task.</strong> We describe the scenario the reader is likely facing, then judge tools or research ideas against that scenario.</li>
        <li><strong>Compare alternatives.</strong> We use tables, pros and cons, limits, and cases where a tool is not the right choice.</li>
        <li><strong>Check official sources.</strong> Product pages, pricing pages, investor relations pages, regulator information, and official documentation are preferred over summaries.</li>
        <li><strong>Add human judgment.</strong> A guide must include a clear editorial recommendation, not just a list of names.</li>
        <li><strong>Review for reader value.</strong> We check for thin sections, repeated wording, unsupported claims, and pages that feel built only for search.</li>
      </ol>
      <h2>How we evaluate AI tools</h2>
      <p>For AI tools, we look at the practical workflow: setup time, output quality, editing control, export options, collaboration features, privacy considerations, and how much manual review is still required. A tool that creates a flashy demo but leaves the reader confused does not receive the same treatment as a tool that reliably saves time in a realistic scenario.</p>
      <h2>How we handle investing content</h2>
      <p>Investing articles are educational research guides, not personal financial advice. We focus on risk, diversification, valuation questions, source checking, and why an asset or company may deserve further research. We avoid language that implies guaranteed returns or easy money.</p>
      <h2>Corrections and updates</h2>
      <p>If a guide contains outdated information, email <strong>guidemarket.com@gmail.com</strong> with the page URL, the correction, and an official source if available. We prioritize updates that improve accuracy, usefulness, and transparency.</p>
      <p>We also review navigation and internal links because a useful article should not feel like a dead end. When we add or update a guide, we look for related pages that should point to it so readers can continue researching without returning to search results.</p>
    `,
  },
  "contact.html": {
    title: "Contact Guide Market",
    description: "Contact Guide Market for corrections, outdated tool details, source suggestions, editorial feedback, or questions about published guides.",
    eyebrow: "Contact",
    h1: "Contact Guide Market",
    body: `
      <p>Email: <strong>guidemarket.com@gmail.com</strong></p>
      <p>Use this address for corrections, outdated tool details, source suggestions, editorial feedback, privacy questions, or issues with a published guide. We read messages manually and prioritize updates that improve accuracy and reader usefulness.</p>
      <h2>What to include</h2>
      <ul>
        <li>The URL of the article or page you are referring to.</li>
        <li>The outdated price, feature, claim, source, typo, or wording you noticed.</li>
        <li>A link to the official source if one is available.</li>
        <li>Your suggested correction or a clearer explanation.</li>
      </ul>
      <h2>Corrections policy</h2>
      <p>When a correction is valid, we update the relevant article as soon as practical. Some changes require checking official pricing pages, documentation, company pages, regulator pages, or product announcements before publication.</p>
      <h2>Advertising and partnerships</h2>
      <p>Guide Market keeps advertising separate from editorial content. If you contact us about a product, tool, or partnership, that does not guarantee coverage or a positive recommendation. Editorial inclusion depends on reader value, practical fit, and transparency.</p>
      <h2>Response time</h2>
      <p>Response times vary depending on volume and the type of request. Accuracy updates and broken-page issues are treated as higher priority than general suggestions.</p>
      <h2>Topics we can help with</h2>
      <p>Useful messages usually relate to broken links, outdated pricing, changed product names, missing official sources, unclear recommendations, accessibility issues, or article navigation problems. We also welcome suggestions for new guide categories when the suggestion is specific and useful for readers.</p>
      <p>Please do not send generic guest-post pitches, spammy link requests, or claims that cannot be checked. Guide Market is built around reader trust, so every editorial change needs to make the site clearer, more accurate, or easier to use.</p>
      <p>If your message is about a tool review, include what changed and why it matters to readers. A useful correction is specific: for example, a pricing page changed, a free plan limit moved, a feature was removed, or a better official source exists.</p>
    `,
  },
  "privacy.html": {
    title: "Privacy Policy | Guide Market",
    description: "Privacy policy for Guide Market covering analytics, cookies, advertising, AdSense, external links, data use, and contact information.",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    body: `
      <p>Guide Market publishes informational editorial content. This policy explains how the site may use analytics, cookies, advertising services, and external links.</p>
      <h2>Analytics</h2>
      <p>We may use analytics tools to understand which pages are visited, how the site performs, and whether navigation is working well. Analytics helps us improve page speed, article organization, internal linking, and reader experience.</p>
      <h2>Advertising and cookies</h2>
      <p>If Google AdSense or similar advertising services are used, Google and its partners may use cookies or similar technologies to show personalized or non-personalized ads depending on user settings, consent, location, and applicable law.</p>
      <h2>External links</h2>
      <p>Articles may link to official product pages, pricing pages, investor relations pages, regulator pages, documentation, and other external resources. We are not responsible for the privacy practices, accuracy, or policies of third-party websites.</p>
      <h2>Personal data</h2>
      <p>We do not sell personal data directly from this website. If you contact us by email, we use your message only to respond, review corrections, investigate issues, or improve the site.</p>
      <h2>Children</h2>
      <p>Guide Market is written for a general audience interested in tools, research, productivity, learning, and business topics. The site is not designed to collect information from children.</p>
      <h2>Contact</h2>
      <p>For privacy questions or data-related requests, email <strong>guidemarket.com@gmail.com</strong>.</p>
      <h2>Changes to this policy</h2>
      <p>This policy may be updated when the site changes analytics tools, advertising providers, consent requirements, or data handling practices. The goal is to keep the explanation understandable rather than hiding important details in vague legal language.</p>
      <p>If a future feature collects additional information, this page should be updated before that feature becomes part of the public site.</p>
      <p>Readers can reduce tracking by adjusting browser settings, cookie preferences, ad personalization settings, or privacy tools. Some choices may affect how ads or embedded third-party services behave.</p>
      <p>This page is meant to be understandable for normal readers. If a privacy practice becomes more complex, the policy should explain the practical impact rather than relying only on legal phrasing.</p>
    `,
  },
  "terms.html": {
    title: "Terms of Use | Guide Market",
    description: "Terms of use for Guide Market, including informational content, tool pricing changes, investing disclaimers, and advertising separation.",
    eyebrow: "Terms",
    h1: "Terms of Use",
    body: `
      <p>The content on Guide Market is informational and educational. AI tools, prices, features, availability, market data, and company details can change at any time.</p>
      <h2>No guaranteed results</h2>
      <p>We do not guarantee specific outcomes from any tool, app, workflow, investment idea, or research process. Before paying for a service or making an important decision, check the official website, terms, pricing, documentation, and policies.</p>
      <h2>Investing content</h2>
      <p>Investing and crypto articles are educational research guides only. They are not personal financial advice and do not consider your income, taxes, debts, risk tolerance, time horizon, or personal circumstances. Consider professional advice before making financial decisions.</p>
      <h2>Editorial and advertising separation</h2>
      <p>Advertising must be clearly separated from editorial content and should not be presented as navigation, downloads, or recommendations. A tool mentioned in an article is not automatically endorsed by Guide Market.</p>
      <h2>External sites</h2>
      <p>We link to official and third-party websites for reader convenience. Those sites control their own content, pricing, privacy policies, and terms. Guide Market is not responsible for changes made by external websites.</p>
      <h2>Corrections</h2>
      <p>If you notice outdated or unclear information, contact <strong>guidemarket.com@gmail.com</strong> with the page URL and an official source when possible.</p>
      <h2>Reader responsibility</h2>
      <p>Readers are responsible for deciding whether a tool, app, service, or research idea fits their own situation. A comparison table can simplify research, but it cannot replace personal judgment, professional advice, or the latest terms from the official provider.</p>
      <p>By using the site, you understand that Guide Market may update, remove, or reorganize pages to improve accuracy, navigation, and editorial quality.</p>
      <p>If any part of these terms is unclear, stop using the site for that decision and check the relevant official provider, regulator, or professional adviser before acting.</p>
      <p>These terms are intended to support a transparent editorial website. They do not limit any consumer rights that apply under relevant law, but they clarify that readers should not treat articles as personal professional advice.</p>
    `,
  },
  "editorial-policy.html": {
    title: "Editorial Policy | Guide Market",
    description: "Guide Market editorial policy covers authorship, source checks, corrections, advertising separation, financial disclaimers, and reader-first content standards.",
    eyebrow: "Editorial policy",
    h1: "Editorial policy",
    body: `
      <p>Guide Market is edited by the Guide Market Editorial Team. Our goal is to publish useful, transparent, reader-first guides about AI tools, productivity, learning, travel, business, money tools, and investing research.</p>
      <h2>Authorship and review</h2>
      <p>Each article lists the Guide Market Editorial Team as author and includes a last-updated date. Articles are reviewed for clarity, usefulness, internal links, source links, and whether the recommendation is supported by the article.</p>
      <h2>How we decide what to publish</h2>
      <p>We prioritize topics where readers need comparison, context, and practical judgment. A guide should help someone make a better decision, avoid a common mistake, or understand a workflow more clearly. We avoid pages that exist only to capture a keyword without adding useful editorial value.</p>
      <h2>Advertising and independence</h2>
      <p>Ads, when enabled, are kept separate from editorial recommendations. We do not present advertisements as editorial conclusions. A tool being mentioned does not mean it has paid for placement, and paid placement does not determine our editorial verdict.</p>
      <h2>Financial content</h2>
      <p>Investing and crypto articles are educational only. They are not personal financial advice. We avoid guarantees, easy-money claims, and pressure language. Readers should consider personal circumstances and official sources before making financial decisions.</p>
      <h2>Source standards</h2>
      <p>When possible, we link to official product pages, official pricing pages, documentation, investor relations pages, regulator pages, and primary sources. If a detail can change quickly, such as pricing or feature availability, the article should tell readers to verify the latest information.</p>
      <p>We also try to distinguish between a personal editorial opinion and a factual claim. Opinions explain why a tool may be a better fit for a specific scenario. Factual claims should be checkable or framed cautiously when the information changes quickly.</p>
      <h2>Corrections and updates</h2>
      <p>We welcome corrections. If a feature, price, official link, company detail, or risk note is outdated, contact <strong>guidemarket.com@gmail.com</strong> with the page URL and a source.</p>
      <p>Substantial updates may change an article's recommendation, category placement, internal links, examples, or FAQ answers. Small corrections may simply improve wording or replace outdated source links.</p>
    `,
  },
};

for (const [file, page] of Object.entries(pages)) {
  fs.writeFileSync(file, render(file, page));
}

function render(file, page) {
  const url = `${site}/${file}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="${url}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#f8fafc">
  <link rel="icon" href="assets/guide-market-logo.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Guide Market">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${site}/assets/guide-market-logo.svg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="${site}/assets/guide-market-logo.svg">
  <script type="application/ld+json">${JSON.stringify(schema(file, page))}</script>
  <link rel="stylesheet" href="styles.css">
  <script type="module" src="analytics.js"></script>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="index.html"><img src="assets/guide-market-logo.svg" alt="Guide Market logo"><span>Guide Market</span></a>
    <nav class="nav" aria-label="Main navigation">
      <a href="index.html#categories">Categories</a>
      <a href="index.html#all-guides">Articles</a>
      <a href="methodology.html">How we test</a>
      <a href="editorial-policy.html">Editorial policy</a>
      <a href="about.html">About</a>
    </nav>
  </header>
  <main class="legal-card editorial-page">
    <p class="eyebrow">${page.eyebrow}</p>
    <h1>${page.h1}</h1>
    ${page.body}
  </main>
  <footer class="site-footer">
    <p>Guide Market publishes independent, practical guides about AI tools, investing research, work, learning, travel, money, and business.</p>
    <nav aria-label="Footer"><a href="about.html">About</a><a href="methodology.html">How we test</a><a href="editorial-policy.html">Editorial policy</a><a href="contact.html">Contact</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="ads.txt">Ads.txt</a><a href="sitemap.xml">Sitemap</a></nav>
  </footer>
</body>
</html>
`;
}

function schema(file, page) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: `${site}/${file}`,
      isPartOf: { "@type": "WebSite", name: "Guide Market", url: site },
      publisher: {
        "@type": "Organization",
        name: "Guide Market",
        logo: { "@type": "ImageObject", url: `${site}/assets/guide-market-logo.svg` },
      },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: page.h1, item: `${site}/${file}` },
      ],
    },
  ];
}
