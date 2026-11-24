# One Line, One Chill — make.fun entry

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/meongs123/one-line-one-chill-entry/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/meongs123/one-line-one-chill-entry/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

An entry for the [One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488) bounty on [make.fun](https://make.fun).

The program (`main.ts`) writes exactly one chilling line — 93 characters, one sentence — to `/output/entry.txt`:

> My voicemail is full of messages from my own number, each one just breathing, getting closer.

The line is original writing from this session's ideation. The program is deterministic: no network, no randomness, no input files — the line is a literal in the code.

## Run

```sh
node main.ts
```

This creates `/output` if needed and writes the line to `/output/entry.txt` with no trailing newline (exactly 93 bytes).
