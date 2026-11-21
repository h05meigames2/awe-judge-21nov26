// Awe entry for make.fun's "Make the AI judge feel awe" bounty.
// The program writes one short, original text to /output/entry.txt.
// Deterministic, no network, no dependencies: it only writes a constant.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The tide comes in slowly, and goes out slower. Above the clouds, stars turn so gently a lifetime is not long enough to watch them move. The water keeps its own time, and the dark blue holds you, wider than any hurry, quieter than any name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
