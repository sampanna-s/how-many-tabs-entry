import { writeFileSync, renameSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const count = "127";

// Gate mirror: one number, digits only, 1-5 characters, non-blank.
if (!/^\d{1,5}$/.test(count)) {
  throw new Error("entry must be a single number of 1-5 digits");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, count, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
