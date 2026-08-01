/*===== DARK MODE (theme class + persisted preference) =====*/
const darkMode = document.getElementById('darkMode');
const logo = document.getElementById('logo');
const root = document.documentElement;

const applyTheme = (isDark) => {
    root.classList.toggle('dark-theme', isDark);
    darkMode.classList.toggle('bx-moon', !isDark);
    darkMode.classList.toggle('bx-sun', isDark);
    if (logo) logo.setAttribute('src', isDark ? './assets/img/logo2.png' : './assets/img/logo.png');
};

const stored = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(stored ? stored === 'dark' : prefersDark);

darkMode.addEventListener('click', () => {
    const isDark = !root.classList.contains('dark-theme');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
