const fs = require("fs");
const path = require("path");
const https = require("https");

const root = process.cwd();
const articleDir = path.join(root, "articles");
const imageDir = path.join(root, "assets", "real");
fs.mkdirSync(imageDir, { recursive: true });

const unsplashLicense = "https://unsplash.com/license";

const photoIds = {
  travel: "1507525428034-b723cf961d3e",
  flights: "1436491865332-7a61a109cc05",
  gym: "1517836357463-d25dfeac3438",
  food: "1498837167922-ddd27525d352",
  students: "1523240795612-9a054b0db644",
  teamwork: "1522202176988-66273c2fd55f",
  finance: "1450101499163-c8848c66ca85",
  money: "1553729459-efe14ef6055d",
  social: "1611162617474-5b21e879e113",
  presentation: "1557804506-669a67965ba0",
  writing: "1455390582262-044cdead277a",
  interview: "1521791136064-7986c2920216",
  documents: "1554224155-6726b3ff858f",
  business: "1556761175-b413da4baf72",
  design: "1497366811353-6870744d04b2",
  laptop: "1516321318423-f06f85e504b3",
  learning: "1516321497487-e288fb19713f",
  developers: "1519389950473-47ba0277781c",
  web: "1460925895917-afdab827c52f",
  data: "1551288049-bebda4e38f71",
  startup: "1559136555-9303baea8ebd",
  aiDesk: "1581091226825-a6a2a5aee158",
  stocks: "1611974789855-9c2a0a7236a3",
  crypto: "1621761191319-c6fb62004040",
  blockchain: "1639762681057-408e52192e55",
  charts: "1640340434855-6084b1f4901c",
  media: "1605810230434-7631ac76ec81",
  support: "1521737711867-e3b97375f902",
};

const plan = {
  "best-ai-apps-for-meal-planning.html": ["food", "Real meal planning workspace"],
  "best-ai-coding-tools-for-developers.html": ["developers", "Developer workspace with laptops"],
  "best-ai-customer-support-tools.html": ["support", "Customer support and team collaboration workspace"],
  "best-ai-email-marketing-tools.html": ["laptop", "Email marketing and campaign planning workspace"],
  "best-ai-image-generators.html": ["design", "Creative design workspace"],
  "best-ai-podcast-tools.html": ["media", "Media production workspace"],
  "best-ai-research-tools.html": ["learning", "Research and online learning workspace"],
  "best-ai-resume-builders.html": ["documents", "Professional documents and career planning workspace"],
  "best-ai-stocks-to-watch-2026.html": ["stocks", "Stock market research screen"],
  "best-ai-tools-for-budgeting-money.html": ["money", "Personal finance and budgeting workspace"],
  "best-ai-tools-for-creating-tiktok-videos.html": ["social", "Social media content planning on a phone"],
  "best-ai-tools-for-daily-life.html": ["aiDesk", "Daily productivity desk with technology"],
  "best-ai-tools-for-finding-cheap-flights.html": ["flights", "Airplane travel and flight planning"],
  "best-ai-tools-for-gym-workouts.html": ["gym", "Gym workout training equipment"],
  "best-ai-tools-for-job-interviews.html": ["interview", "Professional interview and career meeting"],
  "best-ai-tools-for-learning-languages.html": ["students", "Study and language learning workspace"],
  "best-ai-tools-for-logo-design.html": ["design", "Brand and logo design workspace"],
  "best-ai-tools-for-making-presentations.html": ["presentation", "Business presentation meeting"],
  "best-ai-tools-for-online-courses.html": ["learning", "Online course learning setup"],
  "best-ai-tools-for-personal-assistants.html": ["aiDesk", "Smart assistant and daily technology workspace"],
  "best-ai-tools-for-productivity.html": ["laptop", "Productivity laptop workspace"],
  "best-ai-tools-for-real-estate-agents.html": ["business", "Business client meeting workspace"],
  "best-ai-tools-for-small-businesses.html": ["startup", "Small business and startup workspace"],
  "best-ai-tools-for-social-media-content.html": ["social", "Social media content creation workspace"],
  "best-ai-tools-for-students.html": ["students", "Students studying together"],
  "best-ai-tools-for-studying-faster.html": ["writing", "Focused study notes and writing desk"],
  "best-ai-tools-for-teachers.html": ["learning", "Digital teaching and learning workspace"],
  "best-ai-tools-for-travel-planning.html": ["travel", "Travel planning and destination research"],
  "best-ai-tools-for-website-building.html": ["web", "Website analytics and web building workspace"],
  "best-ai-tools-for-writing-essays.html": ["writing", "Essay writing notebook and laptop"],
  "best-ai-tools-for-youtube-creators.html": ["media", "Video creator and media production setup"],
  "best-cryptocurrencies-to-research-2026.html": ["crypto", "Cryptocurrency research image"],
  "best-etfs-for-beginners-2026.html": ["finance", "ETF and personal investing research desk"],
  "best-stocks-to-watch-2026.html": ["charts", "Stock charts and market research screen"],
  "bitcoin-vs-ethereum-2026.html": ["blockchain", "Blockchain and cryptocurrency technology image"],
  "how-to-build-an-investment-watchlist-2026.html": ["data", "Investment watchlist and data analysis screen"],
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function main() {
  const credits = {};
  for (const [fileName, [key, label]] of Object.entries(plan)) {
    const slug = fileName.replace(/\.html$/, "");
    const target = path.join(imageDir, `${slug}.jpg`);
    const photoId = photoIds[key];
    const sourceUrl = `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1600&q=82`;
    await download(sourceUrl, target);

    const credit = {
      local: `assets/real/${slug}.jpg`,
      title: label,
      page: unsplashLicense,
      artist: "Unsplash photographer",
      license: "Unsplash License",
      label,
    };
    credits[fileName] = credit;
    updateArticle(fileName, credit);
  }
  fs.writeFileSync(path.join(imageDir, "credits.json"), JSON.stringify(credits, null, 2));
}

function updateArticle(fileName, credit) {
  const full = path.join(articleDir, fileName);
  if (!fs.existsSync(full)) return;
  let html = fs.readFileSync(full, "utf8");
  const relative = `../${credit.local}`;
  const absolute = `https://www.guide-market.com/${credit.local}`;

  html = html.replace(/<meta property="og:image" content="[^"]+">/, `<meta property="og:image" content="${absolute}">`);
  html = html.replace(/<meta name="twitter:image" content="[^"]+">/, `<meta name="twitter:image" content="${absolute}">`);
  html = html.replace(/"image":\["[^"]+"\]/, `"image":["${absolute}"]`);

  const figure = `<figure class="hero-photo"><img class="article-image" src="${relative}" alt="${escapeHtml(credit.label)}" fetchpriority="high" decoding="async"><figcaption>${escapeHtml(credit.label)}. Photo source: <a href="${credit.page}" rel="nofollow">Unsplash License</a>.</figcaption></figure>`;
  if (html.includes('class="hero-photo"')) {
    html = html.replace(/<figure class="hero-photo">[\s\S]*?<\/figure>/, figure);
  } else {
    html = html.replace(/<img class="article-image" src="[^"]+" alt="[^"]*"[^>]*>/, figure);
  }

  if (!html.includes('class="professional-summary"')) {
    html = html.replace(
      /<aside class="editorial-note">/,
      `<aside class="professional-summary"><strong>Professional reading note</strong><p>This guide is designed to help readers compare options with a practical workflow, visible tradeoffs, and source checks. Use the recommendation as a starting point, then verify live pricing, availability, policies, and important facts on official websites.</p></aside><aside class="editorial-note">`
    );
  }

  fs.writeFileSync(full, html);
}

function download(url, target) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(target);
    https
      .get(url, { headers: { "User-Agent": "GuideMarketSEO/1.0 (guidemarket.com@gmail.com)" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          if (fs.existsSync(target)) fs.unlinkSync(target);
          download(res.headers.location, target).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200 || !/^image\//.test(res.headers["content-type"] || "")) {
          file.close();
          if (fs.existsSync(target)) fs.unlinkSync(target);
          reject(new Error(`Download failed ${res.statusCode}: ${url}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", (error) => {
        file.close();
        if (fs.existsSync(target)) fs.unlinkSync(target);
        reject(error);
      });
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
