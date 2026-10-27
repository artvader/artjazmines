# UI Critique — Art Jazmines Portfolio (`src/`)

**Mode:** Persuade / Experience (single-page portfolio) · **Target:** `src/` · **Stack:** React 19 + Tailwind v4 + Vite

⚠️ DEGRADED: single-context (spawn_agent unavailable in this session)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Submit state + nav pill exist; four decorative "progressbars" announce meaningless 0/80/94 values to screen readers |
| 2 | Match System / Real World | 2 | Copy is heavily coded: "Signal is too fast", "Signal rejected", "COORDB // N25.0330", "Vaulted Works" |
| 3 | User Control and Freedom | 2 | 30s submit cooldown blocks retries; success doesn't clear the form; mobile drawer never receives focus |
| 4 | Consistency and Standards | 3 | Strong token/type system; undermined by a light-paper drawer inside a dark ember site and a dead footer anchor |
| 5 | Error Prevention | 2 | `required` + honeypot + delay exist, but zero inline validation; errors surface far from the field |
| 6 | Recognition Rather Than Recall | 3 | Labels on nav, good focus rings, sr-only new-tab notice — but `#work` footer link resolves to nothing |
| 7 | Flexibility and Efficiency | n/a | Single-scroll portfolio; no accelerator surface to score |
| 8 | Aesthetic and Minimalist Design | 3 | Authored look, but noise overlay + embers + glitch echoes + scanlines + sprites all run at once |
| 9 | Error Recovery | 2 | "Signal failed. Check the channels." — names nothing, offers no fix, renders in the wrong column |
| 10 | Help and Documentation | n/a | No help surface needed on this surface |
| **Total** | | **19/32** | **Acceptable (59%)** |

## Design Specificity Verdict

**LLM assessment: specific — genuinely authored.** The ember/amber palette on `#290c01`, the ten-frame fire sprite, the glitch-echo section headers (`::before`/`::after` chromatic split on `data-echo`), the stepped-noise CRT overlay, the "creative foundry / fabrication matrix" vocabulary, and Koulen+Lekton+Lato all read as one point of view. An unrelated agency could not wear this unchanged.

Where it slips: the service gradients (pink→purple, lime→yellow, plum→orange, brass→yellow) are a second, unrelated color world bolted onto the ember palette, and the mobile drawer's warm paper (`#efe9e3`) is a third. Three palettes, one site.

**Deterministic scan:** 2 findings, both advisory and both effectively false positives here — `src/index.css:99` flags "Lato" as an overused font (it's an explicit project constraint in `AGENTS.md`), and `src/index.css:270` flags the grid-line background (`services-matrix-preview-grid`) as slop — a deliberate matrix/holo texture, not filler. The detector also warned it couldn't read `/assets/fonts/fonts.css`; the file exists at `public/assets/fonts/fonts.css`, so that's a path-resolution miss.

**Visual overlays:** no browser automation tool exposed this session, so no live overlay ran; findings are source-derived.

## Overall Impression

Visually well above the usual portfolio template — it looks like a person made it. Functionally it has the classic gap: craft went into the atmosphere, not into the failure paths. The happy path is polished; every moment something goes wrong (bad anchor, field error, retry, mobile menu) is where it falls apart.

## What's Working

1. **Motion respects the user.** `prefers-reduced-motion` handled per-animation in CSS *and* in JS (`ViewportHeader`, routing progress jumps to 100).
2. **Accessibility intent is real.** `focus-visible` rings everywhere, focus trap with restore on the project dialog, `aria-modal`/`aria-labelledby`, `aria-live` status, `sr-only "(opens in a new tab)"`, alt text, `aria-hidden` on the ember field.
3. **Data separated from presentation.** Nav/services/work in `src/config/`, tokens in `:root`.

## Priority Issues

**[P1] Footer "Work" link is dead.** `Footer.tsx:19` links to `#work`; actual ids are `portfolio` and `works`. Guaranteed dead end at the moment someone decides to look at work. Fix: `href: "#portfolio"`. Command: `$impeccable audit`

**[P1] Mobile drawer contrast is broken.** Panel is `bg-[#efe9e3]/30` over a blurred dark page with links in `text-[#40352c]`; featured-work card is `bg-[#451e09]` with a `text-[#26211c]` chevron — near-black on near-black. On phones this drawer *is* the navigation. Fix: opaque drawer surface, white chevrons in the dark card. Command: `$impeccable adapt`

**[P1] Contact form errors are cryptic, misplaced, and the form never resets.** Validation errors render in the telemetry column instead of under their inputs (no `aria-describedby`). Copy decodes instead of instructing: "Signal is too fast.", "Signal cooling down. Retry in 30s", "Signal failed. Check the channels." On success the controlled fields are never cleared. Fix: per-field errors, plain copy, clear fields on success, cooldown only after a successful send. Command: `$impeccable clarify`

**[P2] Decorative micro-typography illegible and noisy to AT.** 10px labels at `opacity-30`/`_/_0.3` fail contrast; four `role="progressbar"` telemetry rows announce meaningless values. Fix: ≥12px at ≥0.55 opacity, `aria-hidden` the telemetry. Command: `$impeccable audit`

**[P2] First viewport has no action; headers depend on absolute pixels.** Hero has no CTA; callout uses `top-[250px]`/`leading-[53px]`, About uses `absolute left-[80px] md:left-[106px]`, and `COMMUNICATIONS` is `whitespace-nowrap` at 58px (overflowing 375px phones, silently clipped). Fix: one hero CTA, flex/grid flow, drop the nowrap. Command: `$impeccable layout`

## Persona Red Flags

**Alex (Power User):** 30s invisible cooldown blocks retries; menu opens without taking focus; "Signal is too fast" punishes fast typists.

**Jordan (First-Timer):** Hero offers no next step across 300dvh; every label is coded; mobile drawer rows don't read as links.

**Sam (Accessibility-Dependent):** Dead `#work` link; four decorative progressbars in the reading order; service tabs lack roving tabindex/arrow keys; `_/_0.3` and `text-white/44` fail 4.5:1; the 2.5s minimum submit delay is undiscoverable.

**Cognitive load:** 2 of 8 checklist items fail (visual hierarchy; one thing at a time) → moderate.

## Minor Observations

- 10 of 12 screenshots in `src/config/work.ts` are placeholders filtered out at runtime; Music Museum Group shows zero, LAPR+ shows one.
- `h-[900px]` video height ignores viewport.
- Only `additionalFabrications` images are lazy-loaded.
- `body::before` full-viewport infinite `mix-blend-mode: screen` animation is a permanent compositing cost.
- `App.tsx` portals every section into `document.body` plus an empty `<div>`.
- Placeholder color equals typed-text color.
- `aria-live="polite"` on the whole Services panel over-announces.

## Questions to Consider

- What should a visitor do in the first five seconds — and why does the page wait until the footer to ask?
- If the telemetry bars were removed tomorrow, would anyone notice?
- Is the coded vocabulary helping a hiring manager, or making them decode the portfolio before evaluating it?
