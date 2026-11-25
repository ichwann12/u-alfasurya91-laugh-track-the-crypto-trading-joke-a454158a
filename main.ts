import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(repoRoot, "entry.txt"), "utf8").trim();
if (entry.length === 0 || entry.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_BOT_DIR ?? join(repoRoot, "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "output.txt"), entry + "\n");
console.log(entry);
