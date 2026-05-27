const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });

for (const fileName of ["sitemap.xml", "robots.txt"]) {
  const linkPath = path.join(publicDir, fileName);
  const target = `../${fileName}`;

  try {
    fs.rmSync(linkPath, { force: true });
  } catch {}

  fs.symlinkSync(target, linkPath);
}
