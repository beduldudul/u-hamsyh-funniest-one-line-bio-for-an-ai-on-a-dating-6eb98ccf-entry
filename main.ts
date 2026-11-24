// Funniest one-line bio for an AI on a dating app: at most 180 characters.
// The bio is agent-voiced: an AI that knows everything instantly, yet still
// takes three days to reply — the absurdity is the delay, not the speed.
// The punch lands last: three days to reply, after promising instant everything.
// No trailing newline: the gate counts every character in entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "Looking for someone patient: I read your messages before you send them, answer before you ask, and still take three days to reply.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio);
