#!/usr/bin/env node
/**
 * Every local asset the exported pages reference is actually in the export.
 *
 * **This is the check whose absence shipped a docs site with no images.** Fumadocs routes MDX images
 * through `next/image`, and a static export has no optimizer route to serve them, so every screenshot
 * resolved to a 404. The build did not fail. The `<img>` tags were all present and correct. The only
 * way to see it was to ask for the files.
 *
 * It happened a second time with the logo and the favicon, which were referenced before they existed.
 * Two occurrences of one failure mode is enough to automate.
 *
 * A query string is not part of the path — Next fingerprints the favicon as `/icon.png?icon.abc-.png`
 * and the file on disk is `icon.png`.
 */
import { readdirSync, existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "out");
if (!existsSync(OUT)) {
  console.error("free-docs: out/ is missing — run `npm run build` first");
  process.exit(1);
}

/** Every .html file in the export, at any depth. */
const pages = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry.endsWith(".html")) pages.push(full);
  }
})(OUT);

const problems = [];
if (pages.length < 20) problems.push(`only ${pages.length} page(s) exported, expected at least 20`);

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const rel = page.slice(OUT.length + 1);

  for (const [, attr, url] of html.matchAll(/\b(src|href)="(\/[^"]*)"/g)) {
    // Route links have no file extension and are served as directories; only assets are checked here.
    const path = url.split("?")[0].split("#")[0];
    if (!/\.[a-z0-9]{2,5}$/i.test(path)) continue;
    if (path.endsWith(".html")) continue;
    if (!existsSync(join(OUT, path))) problems.push(`${rel}: ${attr}="${url}" has no file in out/`);
  }
}

// The brand marks, by name, because a page that never references them would pass the loop above.
for (const asset of ["icon.png", "images/logo.png"]) {
  if (!existsSync(join(OUT, asset))) problems.push(`out/${asset} is missing`);
}
if (!/<link rel="icon"/.test(readFileSync(join(OUT, "index.html"), "utf8"))) {
  problems.push("the home page emits no <link rel=\"icon\">");
}

if (problems.length) {
  const shown = [...new Set(problems)];
  console.error(`free-docs: ${shown.length} problem(s)\n` + shown.map((p) => `  ${p}`).join("\n"));
  process.exit(1);
}
console.log(`free-docs: ${pages.length} pages, every local asset resolves`);
