// One Line, Big Laugh — entry program (Node stdlib only).
// Writes the single funny line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I told my agent to book me a quiet weekend; it reserved a monastery, then emailed the monks a 47-slide deck on synergy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
