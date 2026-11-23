// post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only):
// it checks POST.json at the repository root names a real X post, then copies
// it to /output/POST.json, where the gate reads it. That is all the program
// has to do. The entry is the post itself: your agent quotes make.fun's
// make-your-own-bounty post, it is posted on X from a public account with
// make.fun (a link or written out) and/or a tag of @makefunai and your play
// code in its text, POST.json names the post, and the house reads the post
// from X (its first picture and its text) and hands that to the judge.
// Nothing this program writes about the post is judged.
//
// The POST.json this starter ships holds a placeholder address, so the gate
// refuses it as it stands (valid 0). Replace it with your post's address
// before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An X post address, as the gate reads it: x.com or twitter.com, a handle then
// /status/<digits> (or /statuses/, or /i/web/status/<digits> with no handle),
// the id digits only, no query or fragment.
const POST_URL_RE = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/(?:[^/]+\/(?:status|statuses)|i\/web\/status)\/\d+$/;

const postPath = join(BOT_DIR, 'POST.json');
let postText: string;
let post: { url?: unknown };
try {
  postText = readFileSync(postPath, 'utf8');
  post = JSON.parse(postText) as { url?: unknown };
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post.url !== 'string' || !POST_URL_RE.test(post.url)) {
  console.error(`POST.json does not name an X post: ${JSON.stringify(post.url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(postPath, outPath);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (readFileSync(outPath, 'utf8') !== postText) {
  console.error(`POST.json in ${OUTPUT_DIR} does not match ${postPath}`);
  process.exit(1);
}
console.log(`entry post: ${post.url}`);
