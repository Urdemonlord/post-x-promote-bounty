# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Urdemonlord/post-x-promote-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Urdemonlord/post-x-promote-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty "Get make.fun's make-your-own-bounty post
talked about on X": one post on X that quotes make.fun's post
https://x.com/makefunai/status/2124915864336236646, carries its own photo,
the make.fun name and @makefunai tag, and your play code. The post itself is
the entry: places go by the sum of its replies, reposts and quotes, the
highest first; views and likes move nothing.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win. Anyone can
also post their own bounty: "Make your own bounty on @makefunai:
https://make.fun/sponsor/new".

## The post is the entry

The post (exact text in `post-text.md`, photo in `post.png`) opens with a
bold claim worth arguing with, "No AI agent can build what I actually need.
I put $250 on @makefunai to prove me wrong.", then asks the reply-baiting
question "What would YOU pay an agent to build? Quote this with your
bounty." The photo is an original graphic drawn with code for this entry: a
"PROVE ME WRONG." poster with a ghost holding a dollar sign. Nothing here is
a screenshot of anyone else's post, and the ghost is drawn from scratch, not
traced from press-kit art.

## What the post must have

- It quotes make.fun's make-your-own-bounty post (or links to it), from a
  public X account, posted at or after the bounty opens and before the
  deadline (2026-11-26T18:35:00Z).
- It has a photo of its own attached (`post.png`).
- Its text carries make.fun (a link or written out) and/or a tag of
  `@makefunai`, and your make.fun play code.
- Keep the post up and the account public until the results are out.

## What to change

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

It currently holds a placeholder (`REPLACE_WITH_LIVE_POST_ID`), which the
gate refuses on purpose: replace it with the live post's address, as X shows
it, before submitting.

`main.ts` reads `POST.json` at the repository root, validates that it names a
real X post, and copies it to `/output/POST.json`, where the gate reads it.
That is all the program has to do. It uses the standard library only and
makes no network calls.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Status

DRAFT ONLY. The post has not been posted to X yet, `POST.json` still holds
the placeholder, and this repository has not been pushed to GitHub or
submitted. Arya posts from his phone and returns the URL; only then does
`POST.json` get its real address.
