/**
 * @fileoverview Portfolio application entry point.
 * Coordinates locale state (EN/ES), dark-first theme toggle, scrollspy,
 * mobile drawer accessibility, copy-email feedback, and IntersectionObserver reveals.
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

/**
 * Safe storage getter that never throws in restricted browser contexts.
 * @param {string} key
 * @returns {string | null}
 */
function storageGet(key) {
    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
}

/**
 * Safe storage setter that never throws in restricted browser contexts.
 * @param {string} key
 * @param {string} value
 */
function storageSet(key, value) {
    try {
        window.localStorage.setItem(key, value);
    } catch {
        // Ignore storage quota or privacy-mode restrictions
    }
}

/** @type {'en' | 'es'} */
let currentLocale = (() => {
    const saved = storageGet(STORAGE_KEYS.locale);
    return saved === 'es' || saved === 'en' ? saved : 'en';
})();

/** @type {IntersectionObserver | null} */
let revealObserver = null;

/** @type {IntersectionObserver | null} */
let spyObserver = null;

/**
 * Updates document title, meta description, Open Graph, Twitter, and skip link for the active locale.
 * @param {any} meta
 * @param {'en' | 'es'} locale
 */
function syncMetadata(meta, locale) {
    if (!meta) return;
    document.title = meta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', locale === 'es' ? 'es_AR' : 'en_US');

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
    syncMetadata(copy.meta, currentLocale);

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
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const saved = storageGet(STORAGE_KEYS.theme);
    const initialTheme = saved === 'light' ? 'light' : 'dark';

    const applyTheme = (theme) => {
        const isLight = theme === 'light';
        if (isLight) {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        if (logoImg) {
            logoImg.setAttribute('src', isLight ? './assets/img/logo.png' : './assets/img/logo2.png');
        }
        if (themeMeta) {
            themeMeta.setAttribute('content', isLight ? '#fafafa' : '#09090b');
        }
        if (toggleBtn) {
            toggleBtn.setAttribute(
                'aria-label',
                isLight ? 'Switch to dark mode' : 'Switch to light mode'
            );
            toggleBtn.textContent = isLight ? 'Dark' : 'Light';
        }
    };

    applyTheme(initialTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(next);
            storageSet(STORAGE_KEYS.theme, next);
        });
    }
}

function setupLanguageToggle() {
    const langBtn = document.getElementById('lang-toggle');
    if (!langBtn) return;

    langBtn.addEventListener('click', () => {
        currentLocale = currentLocale === 'en' ? 'es' : 'en';
        storageSet(STORAGE_KEYS.locale, currentLocale);
        renderAll();
    });
}

function setDrawerState(isOpen) {
    const drawer = document.getElementById('mobile-drawer');
    const toggle = document.getElementById('mobile-menu-toggle');
    if (!drawer || !toggle) return;

    drawer.classList.toggle('is-open', isOpen);
    drawer.setAttribute('aria-hidden', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

function setupMobileDrawer() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (!toggle || !drawer) return;

    setDrawerState(false);

    toggle.addEventListener('click', () => {
        const next = !drawer.classList.contains('is-open');
        setDrawerState(next);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
            setDrawerState(false);
            toggle.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900 && drawer.classList.contains('is-open')) {
            setDrawerState(false);
        }
    });
}

function bindMobileLinks() {
    const drawer = document.getElementById('mobile-drawer');
    if (!drawer) return;

    drawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            setDrawerState(false);
        });
    });
}

function setupRevealObserver() {
    if (revealObserver) {
        revealObserver.disconnect();
        revealObserver = null;
    }

    const targets = document.querySelectorAll('.reveal');
    if (
        !('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
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
    if (spyObserver) {
        spyObserver.disconnect();
        spyObserver = null;
    }

    if (!('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav__link, .mobile-drawer__link');

    spyObserver = new IntersectionObserver(
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

    sections.forEach((section) => spyObserver?.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    setupLanguageToggle();
    setupMobileDrawer();
    renderAll();
});
