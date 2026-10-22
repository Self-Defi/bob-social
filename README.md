# B.O.B — Building on a Budget

## Lesson 01: Build Your Own Social Media Scheduler

**B.O.B Social · Powered by Postiz**

Build it. Own it. Learn how.

B.O.B is a series of practical lessons about building with existing open-source software. This repository is the social scheduling lesson, not the entire B.O.B curriculum.

This is a branding-only adaptation of [Postiz](https://github.com/gitroomhq/postiz-app). Postiz and its contributors built the scheduling engine and social integrations. B.O.B adds a wordmark, teal accents, login presentation, browser titles, and teaching material. Existing backend behavior is unchanged.

- [B.O.B source repository](https://github.com/Self-Defi/bob-social)
- [Lesson walkthrough](docs/bob/lesson-01.md)
- [Branding changes and validation status](docs/bob/changes.md)
- [Original Postiz README](README.upstream.md)
- [Upstream installation documentation](https://docs.postiz.com/)
- [License](LICENSE)

## Build this branded edition

The upstream compose file pulls the official Postiz image. That image will **not** include these local branding changes. Build from this source and use the B.O.B override:

```sh
docker compose -f docker-compose.yaml -f docker-compose.bob.yaml build postiz
docker compose -f docker-compose.yaml -f docker-compose.bob.yaml up -d
```

Before starting, follow the current upstream self-hosting instructions: configure URLs, strong unique secrets, database credentials, persistent storage, and only the platform credentials you intend to use. The checked-in upstream compose defaults are examples, not production credentials. Do not commit real credentials. Social platform access and app reviews are separate from installing this app.

## Provenance

Branding baseline: `c06abc3d786b8f719ced5716ccc70dd8a7251a05`. The original README, license, contributor history, package names, API paths, and environment variable names are retained. This educational adaptation is not an official Postiz product or endorsement. Preserve AGPL-3.0 and copyright notices when sharing it. When hosting a modified edition, provide users access to its corresponding source.

## Current status

Branding source prepared. No live deployment or real-account posting test has been completed. See the lesson release checklist before teaching this as a verified end-to-end installation.
