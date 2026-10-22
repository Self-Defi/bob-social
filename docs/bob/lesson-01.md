# Lesson 01 — Build Your Own Social Media Scheduler

**Series:** B.O.B — Building on a Budget
**Project:** B.O.B Social
**Foundation:** Postiz, credited throughout

## Learning outcome

Run your own branded scheduler, connect one social account, and verify one scheduled post. Software can be open source while hosting, platform API access, and optional AI services still have costs. Keep a simple cost log; do not promise a universally free deployment.

## Walkthrough

1. Explain the foundation. Open the upstream repository, license, and original README. Show what Postiz already provides and what our branding changes do.
2. Fork the repository to your own GitHub account. Keep attribution and license files. Clone your fork and retain the upstream remote for future updates.
3. Review the branding diff. Show the two logo components, public SVG assets, login presentation, page titles, and primary color token. Keep integrations, auth logic, and database identifiers intact.
4. Follow the linked current upstream self-hosting guide. Prepare Docker, URLs, persistent storage, unique secrets, and the required services. Keep credentials outside Git. The machine must remain online for scheduled jobs to run.
5. Use the two-file compose build command in the README. Explain why pulling the standard prebuilt image would ignore our branding edits.
6. Open the app. Verify the logo, login copy, browser title, and Postiz credit at desktop and mobile widths. Create the administrator account and apply the upstream registration controls appropriate to your deployment.
7. Connect ONE account using that network's documented developer setup. Confirm callback URLs and requested permissions. Record any approval or API cost; do not promise the same experience for every network.
8. Prepare a clearly identified test post. Review the account, media, caption, timezone, and publishing time before scheduling.
9. Verify the post on the destination network and inspect the scheduler status. Restart the deployment and confirm account data and uploaded media persist.
10. Share the corresponding source, installation notes, measured costs, and known limitations. Give Postiz visible credit in the lesson and application.

## Recording outline

- Result first: show the branded scheduler and a verified test post.
- Foundation: open source, attribution, and what we changed.
- Build: fork, branding, configuration, and local image build.
- Publish: connect, schedule, verify.
- Ownership: backups, updates, source availability, and actual running costs.

## Release checklist

- [x] Fork exists at https://github.com/Self-Defi/bob-social.
- [ ] Clean source build succeeds.
- [ ] Login and dashboard checked on desktop and mobile.
- [ ] Postiz attribution and corresponding-source access are visible.
- [ ] One account connected and one scheduled post verified externally.
- [ ] Restart and persistence verified.
- [ ] Actual costs and platform-specific constraints recorded.
- [ ] Walkthrough reproduced from a clean installation.

This checklist is intentionally incomplete until the deployment has been tested. Source preparation alone is not proof that publishing works.
