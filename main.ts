// The Printer Apology — make.fun entry (program/v1, Node 22).
// Writes the printer's one-line apology to /output/entry.txt.
// Stdlib only: the grading sandbox has no python3 and no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry I ate the contract. After a year of cheap paper, staples and swearing, I finally took something that mattered.";

// Gate: UTF-8 text, 1-120 characters, not only whitespace, single line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-120 characters, got ${chars}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

// /output is bind-mounted by the grader: create it if missing, never delete it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
