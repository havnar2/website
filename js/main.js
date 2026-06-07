/* ============================================
   BC Consulting — Main JS
   - Dark/light mode toggle (auto-detect + manual)
   - Email obfuscation
   ============================================ */

(function () {
  'use strict';

  // ---------- Theme Toggle ----------
  const html = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const STORAGE_KEY = 'bc-consulting-theme';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Initialize theme
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    setTheme(saved);
  } else {
    setTheme(getSystemPreference());
  }

  // Listen for system preference changes (only if user hasn't overridden)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Toggle button
  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ---------- Email Obfuscation ----------
  // Email is built from parts so bots can't scrape it from HTML source
  const emailParts = {
    user: 'bjorn.claessens',
    domain: 'gmail',
    tld: 'com'
  };

  const emailText = document.getElementById('email-text');
  const emailLink = document.getElementById('email-link');

  if (emailText && emailLink) {
    const fullEmail = emailParts.user + '@' + emailParts.domain + '.' + emailParts.tld;
    emailText.textContent = fullEmail;
    emailLink.href = 'mailto:' + fullEmail;
  }
})();
