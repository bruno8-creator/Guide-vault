const fs = require("fs");
const path = require("path");

const siteUrl = "https://guide-market.com";

const exclude = [
  "/admin/*",
  "/api/*",
  "/drafts/*",
  "/test/*",
  "/private/*",
  "/preview/*",
  "/404.html",
  "/500.html",
];

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules" || entry.name === "public") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkHtmlFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function isExcludedRoute(route) {
  return exclude.some((pattern) => {
    if (pattern.endsWith("/*")) {
      return route.startsWith(pattern.slice(0, -1));
    }
    return route === pattern;
  });
}

function htmlFileToRoute(filePath) {
  const relative = path.relative(process.cwd(), filePath).replaceAll(path.sep, "/");
  if (relative === "index.html") {
    return "/";
  }
  return `/${relative}`;
}

function isIndexableHtml(filePath) {
  const html = fs.readFileSync(filePath, "utf8");
  return !/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  output: "export",
  outDir: ".",
  changefreq: "weekly",
  priority: 0.7,
  exclude,
  transform: async () => null,
  additionalPaths: async () => {
    return walkHtmlFiles(process.cwd())
      .map((filePath) => ({ filePath, route: htmlFileToRoute(filePath) }))
      .filter(({ route }) => !isExcludedRoute(route))
      .filter(({ filePath }) => isIndexableHtml(filePath))
      .map(({ route }) => ({
        loc: route,
        changefreq: "weekly",
        priority: route === "/" ? 1.0 : 0.7,
        lastmod: new Date().toISOString(),
      }));
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    transformRobotsTxt: async () => `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
  },
};
