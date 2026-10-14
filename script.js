/* ======================================================================
   script.js — Tiny theme switcher for the Banned Book Club site.
   Toggles light / dark / sepia on <body>, persists in localStorage,
   and honours the prefers-color-scheme media query on first load.
   ====================================================================== */

(function () {
  const button = document.querySelector('.theme-switch');
  if (!button) return;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const prefersSepia = window.matchMedia('(prefers-color-scheme: light)').matches; // we use sepia as a separate choice

  // Determine initial theme from localStorage or system preference
  let stored = localStorage.getItem('book-club-theme');
  if (stored) {
    document.body.classList.add(stored);
    updateButton(stored);
  } else if (prefersDark) {
    // default to dark if user prefers dark & no stored preference
    document.body.classList.add('dark');
    localStorage.setItem('book-club-theme', 'dark');
    updateButton('dark');
  } else {
    // light is default (no class needed)
    localStorage.setItem('book-club-theme', 'light');
    updateButton('light');
  }

  // Cycle: light → dark → sepia → light
  const cycle = ['light', 'dark', 'sepia'];

  button.addEventListener('click', function () {
    const current = document.body.classList.value
      .split(' ')
      .find(c => c === 'dark' || c === 'sepia' || c === 'light');

    let nextIndex;
    if (!current) {
      // no theme class — start at light (index 0) → next = dark (index 1)
      nextIndex = 1;
    } else {
      const currentIdx = cycle.indexOf(current);
      nextIndex = (currentIdx + 1) % cycle.length;
    }

    const nextTheme = cycle[nextIndex];

    // Remove old theme classes, add new one
    document.body.classList.remove('light', 'dark', 'sepia');
    document.body.classList.add(nextTheme);

    // Persist
    localStorage.setItem('book-club-theme', nextTheme);
    updateButton(nextTheme);
  });

  function updateButton(themeKey) {
    const texts = {
      light: 'Light',
      dark: 'Dark',
      sepia: 'Sepia',
    };
    const label = texts[themeKey] || 'Light';
    // aria-pressed is true when the current theme is not light (i.e. a change is active)
    const isPressed = themeKey !== 'light';
    button.setAttribute('aria-pressed', isPressed);
    button.textContent = `Theme: ${label}`;
  }
})();