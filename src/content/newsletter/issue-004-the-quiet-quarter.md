---
issue: 4
title: "The quiet quarter."
description: "Issue 004 — Q1 wrap. What shipped, what slipped, and the metric we're retiring because it was lying to us."
pubDate: 2026-02-20
---

End-of-quarter dispatch. A little longer than usual. Skim freely.

## Shipped this quarter

- Marketing site refresh (you're looking at the descendant of it)
- Internal portal v2 — 38% faster TTFB after the edge migration
- Brand guidelines v3, now actually maintained in one place
- The button consolidation from [Issue 003](/archive/issue-003-design-system-debt) (still healing)

## What slipped

- The video case-study format. We have three drafts and zero published. Pushing to Q2 with smaller scope.
- A11y audit for the docs site. Started, paused for the portal launch, restarting in two weeks.

## Retiring a metric

We've been reporting "pages shipped per sprint" since forever. It's a vanity number — it rewards splitting work into smaller PRs, not doing more useful work. We're switching to "design-reviewed pages live in production" which is harder to game and closer to what we actually care about.

## Found

- A reminder that [system fonts are fast](https://systemfontstack.com/) and most users cannot tell the difference between your custom typeface and `-apple-system, BlinkMacSystemFont`. Performance > preference, sometimes.

Back in two weeks.

— DCD
