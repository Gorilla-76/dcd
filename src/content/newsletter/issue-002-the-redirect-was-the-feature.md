---
issue: 2
title: "The redirect was the feature."
description: "Issue 002 — a quiet launch, a loud 301, and one CSS property that fixed three different bugs."
pubDate: 2026-01-23
---

A short one this week. Most of the team was deep in launch prep so the dispatch is correspondingly lean.

## Shipped

- **/careers** got a full pass. New illustrations, new copy, new applicant flow. Bounce rate down ~18% on the first dry-run cohort. Credit to the brand team for not letting us ship the original headline.
- **301 sweep.** We retired thirty-four stale URLs and pointed them at their living equivalents. Boring infrastructure. The kind that pays rent.

## In flight

- The redesigned **internal portal** is in staging. Expect a "please bang on this" message in #design-feedback next week.
- Working on a small motion language doc — when to ease-out, when to spring, when to just cut. Draft going around shortly.

## Found

`scroll-margin-top` exists and it solves the "anchor link hides under the sticky header" problem in one line. We have been hand-rolling JavaScript for this for years. Years.

```css
:target {
  scroll-margin-top: 6rem;
}
```

That's it. That's the link.

— DCD
