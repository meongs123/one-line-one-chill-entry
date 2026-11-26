// SPDX-License-Identifier: MIT
// make.fun entry — "One Line, One Chill" (u-azazex-one-line-one-chill-6d4d5488)
// Writes exactly one chilling line (90 characters, one sentence) to /output/entry.txt.
// Deterministic: no network, no randomness, no input files — the line is a literal below.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My voicemail is full of messages from my own number, each one breathing in time with mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
