# AGENTS.md — Banned Book Club project constraints

## Overview

A one-page website for a student book club that reads banned books. Built with **only** `index.html`, `style.css`, and `script.js`. No external dependencies, no CDN, no build step.

## Agent Instructions

**Design/UI freedom**: The agent was given free rein to work on the design and UI (colors, layout, typography, decorative elements, responsive behavior, interactions) to make the site visually appealing and user-friendly. This included iterating on multiple aesthetic directions (earth-toned leafy, Animal Crossing pastel, Gen-Z Pinterest coquette) and refining the user experience.

**Content restriction**: The agent was NOT given freedom to change the content on the page. The text content (introduction, themes, book titles with authors, meeting information, tagline) was provided by the user or agreed upon in the initial planning phase and should remain as-is. The agent's role was purely presentational — making the existing content look good and function well, not rewriting or inventing new content.

## Constraints

1. **Files only** — `index.html`, `style.css`, `script.js`, plus this `AGENTS.md`, `.gitignore`, `REFLECTION.md`, `README.md`, and `evidence/site-localhost.png`.
2. **No dependencies** — no `npm install`, no `import` from `node_modules`, no CDN links (e.g., no Bootstrap, no Font Awesome).
3. **Semantic HTML** — heading, intro, two content sections, a useful interaction (theme switcher, burger menu, expandable details).
4. **Responsive** — must work at narrow (mobile) and wide (desktop) browser widths. Mobile-first approach; grid collapses to a single column on small screens.
5. **Keyboard accessible** — focus-visible outlines on interactive elements, logical tab order, skip-link for main content.
6. **Theme interaction** — a button in the header cycles through `light → dark → sepia → light`. Preference is persisted in `localStorage` and honored on page reload. The button's `aria-pressed` state reflects the current theme.
7. **Color theme** — warm Gen-Z Pinterest palette (sage green `#9caf88`, lavender `#b4a7d6`, terracotta `#d4a373`, cream `#f5efe6`). Dark text (`#2d2d2d`), NOT pink. Flat design with minimal shadows/gradients, soft rounded corners.
8. **No external services** — no account creation, no deployment, no API keys.
9. **Serve only on localhost** — the site is meant to be opened via `http://localhost:8000` (or any local HTTP server). Opening `index.html` directly via `file://` may cause CSP or cross-origin issues with `localStorage`.
10. **All work stays inside this project** — no external file creation, no third-party folders.

## Interaction

- **Theme-switcher button** (header, right side):
  - Clicking cycles the theme: `light → dark → sepia → light`.
  - The chosen theme is saved in `localStorage` under key `book-club-theme`.
  - On page load, the stored preference (or the system `prefers-color-scheme`) is applied.
  - Button text updates to show the current theme (`Light`, `Dark`, `Sepia`).
  - `aria-pressed` attribute is set appropriately (true when the theme is not light).

- **Slide-out burger menu** (header, left side):
  - Clicking the burger icon slides a navigation panel in from the left.
  - Contains 4 book titles with authors.
  - Closes via the ✕ button, clicking outside, or pressing Escape.
  - Focus moves into the menu when opened and returns to the burger when closed.

- **Details/summary** ("Join the conversation"):
  - Expandable section under the Core Themes.
  - Keyboard-operable (Space/Enter to open/close).
  - Provides meeting info without cluttering the page.

## Development checklist

- [x] Verify HTML structure: one `<h1>`, intro section, themes section, theme button, burger menu, slide-out nav.
- [x] Verify CSS: warm cream background, sage/lavender/terracotta accents, dark text, responsive grid at 600px and 900px breakpoints, focus-visible outlines, flat design.
- [x] Verify JS: theme cycling, localStorage persistence, prefers-color-scheme honor, burger menu open/close, Escape key.
- [x] Open in a browser at narrow width (≤ 599px) → single column.
- [x] Open in a browser at wide width (≥ 600px) → two-column grid for theme list.
- [x] Use Tab key to navigate; ensure focus-visible outlines appear.
- [x] Click theme button → theme changes; reload page → theme persists.
- [x] Screenshot captured at `evidence/site-localhost.png`.