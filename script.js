/* ======================================================================
   script.js — Banned Book Club one‑page site
   Theme switcher + slide‑out Animal Crossing‑style menu.
   Persists theme in localStorage, honours prefers-color-scheme.
   ====================================================================== */

(function () {
  // ----- Theme switcher -----
  (function () {
    const button = document.querySelector('.theme-switch');
    if (!button) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let stored = localStorage.getItem('book-club-theme');
    if (stored) {
      document.body.classList.add(stored);
      updateButton(stored);
    } else if (prefersDark) {
      document.body.classList.add('dark');
      localStorage.setItem('book-club-theme', 'dark');
      updateButton('dark');
    } else {
      localStorage.setItem('book-club-theme', 'light');
      updateButton('light');
    }

    const cycle = ['light', 'dark', 'sepia'];

    button.addEventListener('click', function () {
      const current = document.body.classList.value
        .split(' ')
        .find(c => c === 'dark' || c === 'sepia' || c === 'light');

      let nextIndex;
      if (!current) { nextIndex = 1; }
      else {
        const currentIdx = cycle.indexOf(current);
        nextIndex = (currentIdx + 1) % cycle.length;
      }

      const nextTheme = cycle[nextIndex];
      document.body.classList.remove('light', 'dark', 'sepia');
      document.body.classList.add(nextTheme);
      localStorage.setItem('book-club-theme', nextTheme);
      updateButton(nextTheme);
    });

    function updateButton(themeKey) {
      const texts = { light: 'Light', dark: 'Dark', sepia: 'Sepia' };
      const label = texts[themeKey] || 'Light';
      const isPressed = themeKey !== 'light';
      button.setAttribute('aria-pressed', isPressed);
      button.textContent = `Theme: ${label}`;
    }
  })();

  // ----- Slide‑out menu -----
  (function () {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.slide-menu');
    const closeBtn = document.querySelector('.close-menu');
    const skipLink = document.querySelector('.skip-link');

    if (!burger || !menu) return;

    // Open / close
    function openMenu() {
      burger.classList.add('open');
      menu.classList.add('open');
      // keep focus inside menu by focusing first focusable element
      const firstFocusable = menu.querySelector('a, button');
      if (firstFocusable) firstFocusable.focus();
      // aria
      burger.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
      burger.classList.remove('open');
      menu.classList.remove('open');
      // return focus to burger
      burger.focus();
      burger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }

    burger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Click outside menu to close
    document.addEventListener('click', function (e) {
      if (e.target === burger || e.target === closeBtn) {
        if (menu.classList.contains('open')) closeMenu();
        else openMenu();
      }
    });

    // Keyboard: Escape closes menu
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close menu when a link is clicked (mobile UX)
    const links = menu.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Optional: focus trap logic could be added here for full accessibility
  })();
})();