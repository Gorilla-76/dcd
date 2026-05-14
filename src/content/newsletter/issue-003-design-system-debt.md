---
issue: 3
title: "Design system debt is just debt."
description: "Issue 003 — we audited every button on the marketing site. There were forty-one. There should be three."
pubDate: 2026-02-06
---

We did the audit nobody wanted to do.

## Shipped

- **Button taxonomy.** Across marketing pages: 41 visually distinct buttons. After consolidation: 3 (`primary`, `secondary`, `ghost`) with consistent sizing tokens. PR is a 4,200-line diff and we are not sorry.
- **Newsletter signup** got A/B tested against itself. The "boring" version (left-aligned, no illustration, single field) converted 31% better than the hero variant. We are filing this under *humbling.*

## In flight

- Onboarding flow rewrite. Currently 11 steps. Target: 4. The tension is which 7 things we tell ourselves we'll "surface later" and never actually do.
- A small component library docs site, built on the same stack as this one. Will share when it's not embarrassing.

## Found

[`prefers-reduced-data`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data) — media query for users on metered connections. Browser support is still patchy but it's a clean way to ship a lighter hero image without a feature flag.

— DCD
