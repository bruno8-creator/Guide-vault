const fs = require("fs");
const path = require("path");

const root = process.cwd();
const assetsDir = path.join(root, "assets");
const generatedDir = path.join(assetsDir, "generated");
fs.mkdirSync(generatedDir, { recursive: true });

const palette = [
  ["#0f766e", "#14b8a6", "#ecfeff"],
  ["#2563eb", "#60a5fa", "#eff6ff"],
  ["#7c3aed", "#a78bfa", "#f5f3ff"],
  ["#c2410c", "#fb923c", "#fff7ed"],
  ["#166534", "#4ade80", "#f0fdf4"],
  ["#be123c", "#fb7185", "#fff1f2"],
  ["#4338ca", "#818cf8", "#eef2ff"],
  ["#854d0e", "#facc15", "#fefce8"],
];

const coverMap = {
  "travel-planning-photo.jpg": ["travel-planning-photo.svg", "AI Travel Planning", "Itineraries, maps, budgets and local ideas"],
  "cheap-flights-photo.jpg": ["cheap-flights-photo.svg", "Cheap Flight Tools", "Price alerts, flexible dates and smarter booking"],
  "gym-workouts-photo.jpg": ["gym-workouts-photo.svg", "AI Gym Workouts", "Training plans, progress and recovery"],
  "meal-planning-photo.jpg": ["meal-planning-photo.svg", "AI Meal Planning", "Recipes, calories, meal prep and grocery lists"],
  "students-photo.jpg": ["students-photo.svg", "AI for Students", "Notes, essays, flashcards and faster studying"],
  "language-learning-photo.jpg": ["language-learning-photo.svg", "Language Learning AI", "Speaking practice, vocabulary and grammar"],
  "budgeting-money-photo.jpg": ["budgeting-money-photo.svg", "AI Money Tools", "Budgets, spending patterns and savings"],
  "social-media-photo.jpg": ["social-media-photo.svg", "AI Social Content", "Captions, short videos and content workflows"],
  "presentations-photo.jpg": ["presentations-photo.svg", "AI Presentations", "Decks, pitch stories and visual structure"],
  "essay-writing-photo.jpg": ["essay-writing-photo.svg", "AI Essay Writing", "Structure, feedback, grammar and research"],
  "job-interviews-photo.jpg": ["job-interviews-photo.svg", "AI Career Tools", "Mock interviews, resumes and job prep"],
  "small-businesses-photo.jpg": ["small-businesses-photo.svg", "AI for Business", "Automation, support, marketing and operations"],
  "logo-design-photo.jpg": ["logo-design-photo.svg", "AI Logo Design", "Brand identity, concepts and visual systems"],
  "website-building-photo.jpg": ["website-building-photo.svg", "AI Website Builders", "No-code sites, SEO and landing pages"],
  "productivity-photo.jpg": ["productivity-photo.svg", "AI Productivity", "Tasks, calendars, notes and focus"],
  "personal-assistant-photo.jpg": ["personal-assistant-photo.svg", "AI Assistants", "Daily tasks, voice helpers and routines"],
  "daily-life-photo.jpg": ["daily-life-photo.svg", "AI for Daily Life", "Planning, learning, food, travel and decisions"],
};

const generatedTitles = {
  "best-ai-coding-tools-for-developers.svg": ["AI Coding Tools", "Code completion, refactoring and developer workflows"],
  "best-ai-customer-support-tools.svg": ["AI Customer Support", "Chatbots, help desks and service workflows"],
  "best-ai-email-marketing-tools.svg": ["AI Email Marketing", "Campaigns, segmentation and better messaging"],
  "best-ai-image-generators.svg": ["AI Image Generators", "Brand visuals, creative assets and commercial use"],
  "best-ai-podcast-tools.svg": ["AI Podcast Tools", "Recording, cleanup, transcripts and clips"],
  "best-ai-research-tools.svg": ["AI Research Tools", "Sources, papers, summaries and evidence checks"],
  "best-ai-stocks-to-watch-2026.svg": ["AI Stocks 2026", "Infrastructure, software, chips and research risk"],
  "best-ai-tools-for-online-courses.svg": ["AI Course Tools", "Lessons, slides, outlines and student materials"],
  "best-ai-tools-for-real-estate-agents.svg": ["AI Real Estate Tools", "Listings, tours, leads and property marketing"],
  "best-ai-tools-for-teachers.svg": ["AI Tools for Teachers", "Lesson planning, rubrics and feedback"],
  "best-ai-tools-for-youtube-creators.svg": ["AI for YouTube", "Scripts, edits, thumbnails and channel growth"],
  "best-cryptocurrencies-to-research-2026.svg": ["Crypto Research 2026", "Bitcoin, Ethereum, Solana and risk notes"],
  "best-etfs-for-beginners-2026.svg": ["ETF Research 2026", "Simple funds, fees and portfolio roles"],
  "best-stocks-to-watch-2026.svg": ["Stocks to Watch 2026", "Quality companies, valuation and research process"],
  "bitcoin-vs-ethereum-2026.svg": ["Bitcoin vs Ethereum", "Use cases, risk, ETFs and investor profiles"],
  "how-to-build-an-investment-watchlist-2026.svg": ["Investment Watchlist", "Rules, risk, valuation and research sources"],
  "travel-logo-chatgpt.svg": ["ChatGPT", "Flexible trip planning assistant"],
  "travel-logo-gemini.svg": ["Gemini", "Live destination research and maps"],
  "travel-logo-hopper.svg": ["Hopper", "Flight price alerts and timing"],
  "travel-logo-tripplanner.svg": ["Trip Planner AI", "Visual automatic itineraries"],
  "travel-logo-guidegeek.svg": ["GuideGeek", "Local travel recommendations"],
  "travel-logo-roamaround.svg": ["Roam Around", "Fast itinerary inspiration"],
};

function slugColor(seed) {
  let score = 0;
  for (const char of seed) score += char.charCodeAt(0);
  return palette[score % palette.length];
}

function svgCover(fileName, title, subtitle) {
  const [dark, mid, pale] = slugColor(fileName);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">${escapeXml(subtitle)}</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${pale}"/>
      <stop offset="0.52" stop-color="#ffffff"/>
      <stop offset="1" stop-color="${pale}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${dark}"/>
      <stop offset="1" stop-color="${mid}"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="24" flood-color="#0f172a" flood-opacity="0.15"/>
    </filter>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <circle cx="1310" cy="160" r="210" fill="${mid}" opacity="0.16"/>
  <circle cx="170" cy="830" r="260" fill="${dark}" opacity="0.11"/>
  <g filter="url(#shadow)">
    <rect x="120" y="118" width="1360" height="764" rx="44" fill="#fff" stroke="#d8e2ee" stroke-width="3"/>
    <rect x="120" y="118" width="1360" height="178" rx="44" fill="url(#accent)"/>
    <rect x="120" y="244" width="1360" height="52" fill="url(#accent)"/>
  </g>
  <g transform="translate(215 190)">
    <rect x="0" y="0" width="150" height="150" rx="34" fill="#fff" opacity="0.96"/>
    <path d="M43 98h64M43 75h84M43 52h52" stroke="${dark}" stroke-width="16" stroke-linecap="round"/>
  </g>
  <text x="215" y="438" fill="#0f172a" font-family="Inter, Arial, sans-serif" font-size="82" font-weight="900" letter-spacing="-1">${escapeXml(title)}</text>
  <text x="218" y="525" fill="#475569" font-family="Inter, Arial, sans-serif" font-size="38" font-weight="700">${escapeXml(subtitle)}</text>
  <g transform="translate(215 650)">
    <rect x="0" y="0" width="360" height="76" rx="22" fill="${pale}" stroke="#d8e2ee"/>
    <text x="32" y="50" fill="${dark}" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900">Guide Market</text>
    <rect x="410" y="0" width="240" height="76" rx="22" fill="#f8fafc" stroke="#d8e2ee"/>
    <text x="442" y="50" fill="#334155" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="850">Reviewed guide</text>
  </g>
  <g transform="translate(1020 550)" opacity="0.95">
    <rect x="0" y="0" width="310" height="210" rx="28" fill="#f8fafc" stroke="#d8e2ee"/>
    <path d="M58 142l58-58 45 42 84-94" fill="none" stroke="${dark}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="58" cy="142" r="18" fill="${mid}"/>
    <circle cx="116" cy="84" r="18" fill="${mid}"/>
    <circle cx="161" cy="126" r="18" fill="${mid}"/>
    <circle cx="245" cy="32" r="18" fill="${mid}"/>
  </g>
</svg>`;
}

function logoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="300" viewBox="0 0 420 300" role="img" aria-labelledby="title">
  <title id="title">Guide Market logo</title>
  <rect width="420" height="300" rx="52" fill="#f4fbf7"/>
  <path d="M95 205V95h76c38 0 66 24 66 58s-28 58-66 58h-30v-42h28c13 0 23-7 23-17s-10-17-23-17h-28v70H95Z" fill="#106b45"/>
  <path d="M218 205V95h47l41 58 41-58h43v110h-45v-54l-32 45h-18l-32-45v54h-45Z" fill="#0f172a"/>
  <text x="92" y="250" fill="#536174" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900">Guide Market</text>
</svg>`;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

fs.writeFileSync(path.join(assetsDir, "guide-market-logo.svg"), logoSvg());

for (const [oldName, [newName, title, subtitle]] of Object.entries(coverMap)) {
  fs.writeFileSync(path.join(generatedDir, newName), svgCover(newName, title, subtitle));
}

for (const [fileName, [title, subtitle]] of Object.entries(generatedTitles)) {
  fs.writeFileSync(path.join(generatedDir, fileName), svgCover(fileName, title, subtitle));
}

const replacements = Object.fromEntries(
  Object.entries(coverMap).map(([oldName, [newName]]) => [`assets/${oldName}`, `assets/generated/${newName}`])
);

for (const file of listFiles(root).filter((file) => file.endsWith(".html"))) {
  let html = fs.readFileSync(file, "utf8");
  for (const [from, to] of Object.entries(replacements)) {
    html = html.replaceAll(from, to);
  }
  fs.writeFileSync(file, html);
}

function listFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git" || entry.name === "public") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) listFiles(full, files);
    else files.push(full);
  }
  return files;
}
