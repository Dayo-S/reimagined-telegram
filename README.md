# Banned Book Club

A one-page website for a student book club that reads banned books.

## Purpose

This site introduces the Banned Book Club — a student reading group that meets weekly to read and discuss books that have been challenged, restricted, or removed from libraries and classrooms. It covers the club's mission, core themes (censorship & freedom, diversity & representation, identity & belonging), and how to join.

## Prerequisites

- Python 3 (for the built-in HTTP server) — or any simple static file server
- A modern web browser (Chrome, Firefox, Edge, Safari)

No Node.js, npm, or build tools are required.

## Setup

No installation is needed. All files are static HTML, CSS, and JavaScript.

## Local Server Commands

```bash
# Navigate to the project directory
cd path/to/reimagined-telegram

# Start a local HTTP server on port 8000
python -m http.server 8000
```

## Browser URL

Open your browser and navigate to:

```
http://localhost:8000
```

## How to Stop the Server

Press `Ctrl+C` in the terminal where the server is running.

## Project Structure

```
reimagined-telegram/
├── index.html          # Main HTML page
├── style.css           # Styles (Gen-Z Pinterest aesthetic, responsive, accessible)
├── script.js           # Theme switcher + slide-out burger menu
├── .gitignore          # Ignores .env, node_modules/, .DS_Store
├── AGENTS.md           # Project constraints and agent instructions
├── REFLECTION.md       # Reflection on model usage and development process
├── README.md           # This file
└── evidence/
    └── site-localhost.png  # Screenshot of site served on localhost
```

## Features

- **Theme switcher**: Cycles through light → dark → sepia, persists in `localStorage`
- **Slide-out burger menu**: Navigation panel with reading list (4 books with authors)
- **Expandable details**: "Join the conversation" section with meeting info
- **Responsive design**: Single column on mobile, 2-column at 600px, 3-column at 900px
- **Keyboard accessible**: Skip link, focus-visible outlines, Escape to close menu
- **Gen-Z Pinterest aesthetic**: Sage green, lavender, terracotta accents on warm cream background
- **Dark text**: High contrast, readable text (not pink)
- **Flat design**: Minimal shadows and gradients, soft rounded corners

## Constraints

- Only `index.html`, `style.css`, `script.js` — no dependencies or CDN
- All work stays inside this project
- Serve only on localhost
- No build step required