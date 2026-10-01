import { readFile, writeFile, mkdir } from "node:fs/promises";
const root = new URL("./", import.meta.url);
const source = await readFile(new URL("src/client.js", root), "utf8");
const tokens = JSON.parse(await readFile(new URL("src/theme-tokens.json", root), "utf8"));
const css = (await Promise.all(["src/sidebar.css", "src/theme.css"].map(
  (path) => readFile(new URL(path, root), "utf8")
))).join("\n");
await mkdir(new URL("lib/", root), { recursive: true });
const compiled = source.replace("/*__THEME_TOKENS__*/ {}", JSON.stringify(tokens, null, 2))
  .replace('/*__THEME_CSS__*/ ""', JSON.stringify(css));
await writeFile(new URL("lib/client.js", root), compiled);
console.log("Built dsh-wechat-classic-theme (no build dependencies).");

