# AGENTS.md — Banned Book Club project constraints

## Overview

A one-page website for a student book club that reads banned books. Built with **only** `index.html`, `style.css`, and `script.js`. No external dependencies, no CDN, no build step.

## Constraints

1. **Files only** — `index.html`, `style.css`, `script.js`, plus this `AGENTS.md` and a `.gitignore`.
2. **No dependencies** — no `npm install`, no `import` from `node_modules`, no CDN links (e.g., no Bootstrap, no Font Awesome).
3. **Semantic HTML** — heading, intro, two content sections, a useful interaction (theme switcher).
4. **Responsive** — must work at narrow (mobile) and wide (desktop) browser widths. Mobile-first approach; grid collapses to a single column on small screens.
5. **Keyboard accessible** — focus-visible outlines on interactive elements, logical tab order, skip-link for main content.
6. **Theme interaction** — a button in the header cycles through `light → dark → sepia → light`. Preference is persisted in `localStorage` and honored on page reload. The button’s `aria-pressed` state reflects the current theme.
7. **Color theme** — warm/classic earth-tone palette as default (`#fdf6f0`, `#ffe4c5`, `#8b5a2b`, Georgia serif). Dark and sepia variants are toggled via `<body>` classes.
8. **No external services** — no account creation, no deployment, no API keys.
9. **Serve only on localhost** — the site is meant to be opened via `http://localhost:8000` (or any local HTTP server). Opening `index.html` directly via `file://` may cause CSP or cross-origin issues with `localStorage`.
10. **All work stays inside this project** — no external file creation, no third-party folders.

## Interaction

- **Theme-switcher button** (header, right‑aligned):
  - Clicking cycles the theme: `light → dark → sepia → light`.
  - The chosen theme is saved in `localStorage` under key `book-club-theme`.
  - On page load, the stored preference (or the system `prefers-color-scheme`) is applied.
  - Button text updates to show the current theme (`Light`, `Dark`, `Sepia`).
  - `aria-pressed` attribute is set appropriately (true when the theme is not light).

## Development checklist

- [ ] Verify HTML structure: one `<h1>`, intro section, themes section, theme button.
- [ ] Verify CSS: earth-tone colors, responsive grid at 600px and 900px breakpoints, focus-visible outlines.
- [ ] Verify JS: theme cycling, localStorage persistence, prefers-color-scheme honor.
- [ ] Open in a browser at narrow width (≤ 599px) → single column.
- [ ] Open in a browser at wide width (≥ 600px) → two-column grid for theme list.
- [ ] Use Tab key to navigate; ensure focus-visible outlines appear.
- [ ] Click theme button → theme changes; reload page → theme persists.