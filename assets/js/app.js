/**
 * @fileoverview Portfolio application entry point.
 * Coordinates locale state (EN/ES), dark-first theme toggle, scrollspy,
 * mobile drawer, copy-email feedback, and IntersectionObserver reveals.
 */

import { PORTFOLIO_COPY, PROFILE_META } from './data/portfolio-data.js';
import {
    ICONS,
    renderContact,
    renderEngineeringCases,
    renderExperience,
    renderFooter,
    renderHero,
    renderNav,
    renderProfile,
    renderProjects
} from './components/renderers.js';

const STORAGE_KEYS = {
    locale: 'portfolio_locale',
    theme: 'portfolio_theme'
};

/** @type {'en' | 'es'} */
let currentLocale = (() => {
    const saved = localStorage.getItem(STORAGE_KEYS.locale);
    return saved === 'es' || saved === 'en' ? saved : 'en';
})();

/** @type {IntersectionObserver | null} */
let revealObserver = null;

function syncMetadata(meta) {
    if (!meta) return;
    document.title = meta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', meta.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', meta.description);

    const skipLink = document.querySelector('.skip-link');
    if (skipLink) skipLink.textContent = meta.skipLink;
}

/**
 * Renders all sections for the active locale and re-binds dynamic handlers.
 */
function renderAll() {
    const copy = PORTFOLIO_COPY[currentLocale];
    document.documentElement.lang = currentLocale;
    syncMetadata(copy.meta);

    renderNav(copy.nav);
    renderHero(copy.hero);
    renderProfile(copy.profile);
    renderExperience(copy.experience);
    renderProjects(copy.projects);
    renderEngineeringCases(copy.cases);
    renderContact(copy.contact);
    renderFooter(copy);

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLocale === 'en' ? 'ES' : 'EN';
        langBtn.setAttribute(
            'aria-label',
            currentLocale === 'en' ? 'Switch language to Spanish' : 'Cambiar idioma a inglés'
        );
    }

    bindCopyEmail();
    bindMobileLinks();
    setupRevealObserver();
    setupScrollSpy();
}

function bindCopyEmail() {
    const btn = document.getElementById('copy-email-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
        const copyLabel = btn.dataset.copyLabel || 'Copy email';
        const copiedLabel = btn.dataset.copiedLabel || 'Copied';

        try {
            await navigator.clipboard.writeText(PROFILE_META.email);
            btn.innerHTML = `${ICONS.check} <span>${copiedLabel}</span>`;
            setTimeout(() => {
                btn.innerHTML = `${ICONS.copy} <span>${copyLabel}</span>`;
            }, 2200);
        } catch {
            window.location.href = `mailto:${PROFILE_META.email}`;
        }
    });
}

function setupTheme() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const logoImg = document.getElementById('nav-logo');
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    const initialTheme = saved === 'light' ? 'light' : 'dark';

    const applyTheme = (theme) => {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        if (logoImg) {
            logoImg.setAttribute('src', theme === 'light' ? './assets/img/logo.png' : './assets/img/logo2.png');
        }
        if (toggleBtn) {
            toggleBtn.setAttribute(
                'aria-label',
                theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            );
            toggleBtn.textContent = theme === 'light' ? 'Dark' : 'Light';
        }
    };

    applyTheme(initialTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(next);
            localStorage.setItem(STORAGE_KEYS.theme, next);
        });
    }
}

function setupLanguageToggle() {
    const langBtn = document.getElementById('lang-toggle');
    if (!langBtn) return;

    langBtn.addEventListener('click', () => {
        currentLocale = currentLocale === 'en' ? 'es' : 'en';
        localStorage.setItem(STORAGE_KEYS.locale, currentLocale);
        renderAll();
    });
}

function setupMobileDrawer() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (!toggle || !drawer) return;

    const closeDrawer = () => {
        drawer.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
}

function bindMobileLinks() {
    const drawer = document.getElementById('mobile-drawer');
    const toggle = document.getElementById('mobile-menu-toggle');
    if (!drawer || !toggle) return;

    drawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            drawer.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function setupRevealObserver() {
    if (revealObserver) {
        revealObserver.disconnect();
    }

    const targets = document.querySelectorAll('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        targets.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver?.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => revealObserver?.observe(el));
}

function setupScrollSpy() {
    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav__link, .mobile-drawer__link');

    const spy = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute('id');
                links.forEach((link) => {
                    const active = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle('is-active', active);
                });
            });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => spy.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    setupLanguageToggle();
    setupMobileDrawer();
    renderAll();
});
