/**
 * @fileoverview Static prerender generator for EN (/) and ES (/es/) pages + hreflang sitemap.
 * Reads directly from assets/js/data/portfolio-data.js and assets/js/components/renderers.js
 * so there is a single source of truth for both static HTML and client hydration.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PORTFOLIO_COPY, PROFILE_META } from '../assets/js/data/portfolio-data.js';
import {
    buildContactHtml,
    buildEngineeringCasesHtml,
    buildExperienceHtml,
    buildFooterNavHtml,
    buildHeroHtml,
    buildNavDesktopHtml,
    buildNavMobileHtml,
    buildProfileHtml,
    buildProjectsHtml,
    esc
} from '../assets/js/components/renderers.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BASE_URL = 'https://portafolio-diego-oviedo.netlify.app';
const OG_IMAGE = `${BASE_URL}/assets/img/og-cover.png`;

/**
 * Builds valid JSON-LD structured data for the given locale.
 * @param {'en' | 'es'} locale
 */
function buildJsonLd(locale) {
    const isEs = locale === 'es';
    const pageUrl = isEs ? `${BASE_URL}/es/` : `${BASE_URL}/`;
    const copy = PORTFOLIO_COPY[locale];

    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': `${BASE_URL}/#person`,
                name: PROFILE_META.name,
                jobTitle: isEs ? 'Desarrollador Full Stack' : 'Full Stack Developer',
                description: copy.meta.description,
                url: `${BASE_URL}/`,
                image: OG_IMAGE,
                email: `mailto:${PROFILE_META.email}`,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Buenos Aires',
                    addressCountry: 'AR'
                },
                sameAs: [PROFILE_META.linkedin, PROFILE_META.github],
                knowsAbout: [
                    'Angular',
                    'React',
                    'TypeScript',
                    'Java',
                    'Spring',
                    'Node.js',
                    'NestJS',
                    'Next.js',
                    'Microfrontends',
                    'Web Components',
                    'Stencil.js',
                    'Ionic',
                    'Capacitor',
                    'React Native',
                    'PostgreSQL',
                    'MySQL',
                    'Docker'
                ]
            },
            {
                '@type': 'WebSite',
                '@id': `${BASE_URL}/#website`,
                url: `${BASE_URL}/`,
                name: 'Diego Alejandro Oviedo — Portfolio',
                author: { '@id': `${BASE_URL}/#person` },
                inLanguage: ['en', 'es']
            },
            {
                '@type': 'ProfilePage',
                '@id': `${pageUrl}#profilepage`,
                url: pageUrl,
                name: copy.meta.title,
                description: copy.meta.description,
                inLanguage: locale,
                isPartOf: { '@id': `${BASE_URL}/#website` },
                mainEntity: { '@id': `${BASE_URL}/#person` }
            },
            {
                '@type': 'SoftwareApplication',
                name: 'Tandi',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                url: 'https://tandi.com.ar/',
                image: `${BASE_URL}/assets/img/tandi-1.png`,
                description: copy.projects.tandi.description,
                creator: { '@id': `${BASE_URL}/#person` }
            },
            {
                '@type': 'SoftwareApplication',
                name: 'Golero',
                applicationCategory: 'SportsApplication',
                operatingSystem: 'Web',
                url: 'https://golero.com.ar/',
                image: `${BASE_URL}/assets/img/work-golero.jpg`,
                description: copy.projects.golero.summary,
                creator: { '@id': `${BASE_URL}/#person` }
            },
            {
                '@type': 'SoftwareApplication',
                name: 'Fynta',
                applicationCategory: 'FinanceApplication',
                operatingSystem: 'Web, iOS, Android',
                url: 'https://fynta.app/',
                image: `${BASE_URL}/assets/img/work-fynta.jpg`,
                description: copy.projects.fynta.summary,
                creator: { '@id': `${BASE_URL}/#person` }
            }
        ]
    };

    return JSON.stringify(graph, null, 4);
}

/**
 * Generates a full static HTML document for the requested locale.
 * @param {'en' | 'es'} locale
 */
function buildHtmlPage(locale) {
    const isEs = locale === 'es';
    const copy = PORTFOLIO_COPY[locale];
    const canonicalUrl = isEs ? `${BASE_URL}/es/` : `${BASE_URL}/`;
    const altHref = isEs ? '/' : '/es/';
    const altLabel = isEs ? 'EN' : 'ES';
    const altAria = isEs ? 'Switch language to English' : 'Cambiar idioma a español';
    const altHreflang = isEs ? 'en' : 'es';
    const ogLocale = isEs ? 'es_AR' : 'en_US';
    const ogLocaleAlt = isEs ? 'en_US' : 'es_AR';

    return `<!DOCTYPE html>
<html lang="${locale}" data-prerendered="${locale}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(copy.meta.title)}</title>
    <meta name="description" content="${esc(copy.meta.description)}">
    <meta name="author" content="${esc(PROFILE_META.name)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="alternate" hreflang="en" href="${BASE_URL}/">
    <link rel="alternate" hreflang="es" href="${BASE_URL}/es/">
    <link rel="alternate" hreflang="x-default" href="${BASE_URL}/">

    <!-- Favicons -->
    <link rel="icon" href="/assets/img/logo2.png">
    <link rel="apple-touch-icon" href="/assets/img/logo2.png">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="${ogLocale}">
    <meta property="og:locale:alternate" content="${ogLocaleAlt}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${esc(copy.meta.title)}">
    <meta property="og:description" content="${esc(copy.meta.description)}">
    <meta property="og:image" content="${OG_IMAGE}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="${esc(PROFILE_META.name)}">

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(copy.meta.title)}">
    <meta name="twitter:description" content="${esc(copy.meta.description)}">
    <meta name="twitter:image" content="${OG_IMAGE}">

    <meta name="theme-color" content="#09090b">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="/assets/css/styles.css">

    <!-- Prevent theme flash -->
    <script>
        (function () {
            try {
                if (localStorage.getItem('portfolio_theme') === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                }
            } catch (e) {}
        })();
    </script>

    <!-- Structured Data (SEO) -->
    <script type="application/ld+json">
${buildJsonLd(locale)}
    </script>
</head>

<body>
    <a href="#main-content" class="skip-link">${esc(copy.meta.skipLink)}</a>

    <header class="site-header">
        <nav class="nav container" aria-label="${isEs ? 'Navegación principal' : 'Primary navigation'}">
            <a href="#hero" class="nav__brand">
                <img id="nav-logo" src="/assets/img/logo2.png" alt="Logo Diego Oviedo" class="nav__logo-img" width="28" height="28">
                <span>${esc(PROFILE_META.shortName)}</span>
            </a>

            <div class="nav__links" id="nav-links">${buildNavDesktopHtml(copy.nav)}</div>

            <div class="nav__controls">
                <a id="lang-toggle" href="${altHref}" hreflang="${altHreflang}" class="icon-btn" aria-label="${esc(altAria)}">${altLabel}</a>
                <button type="button" id="theme-toggle" class="icon-btn" aria-label="Switch to light mode">Light</button>
                <button
                    type="button"
                    id="mobile-menu-toggle"
                    class="icon-btn nav__mobile-toggle"
                    aria-label="${isEs ? 'Abrir menú de navegación' : 'Toggle navigation menu'}"
                    aria-expanded="false"
                    aria-controls="mobile-drawer"
                >
                    Menu
                </button>
            </div>
        </nav>
    </header>

    <div id="mobile-drawer" class="mobile-drawer" aria-label="${isEs ? 'Navegación móvil' : 'Mobile navigation'}" aria-hidden="true">
        <div id="mobile-drawer-links">${buildNavMobileHtml(copy.nav)}</div>
    </div>

    <main id="main-content">
        <section id="hero" class="hero">
            <div class="container" id="hero-content">${buildHeroHtml(copy.hero)}</div>
        </section>

        <section id="profile" class="section">
            <div class="container" id="profile-content">${buildProfileHtml(copy.profile)}</div>
        </section>

        <section id="experience" class="section">
            <div class="container" id="experience-content">${buildExperienceHtml(copy.experience)}</div>
        </section>

        <section id="projects" class="section">
            <div class="container" id="projects-content">${buildProjectsHtml(copy.projects)}</div>
        </section>

        <section id="cases" class="section">
            <div class="container" id="cases-content">${buildEngineeringCasesHtml(copy.cases)}</div>
        </section>

        <section id="contact" class="section">
            <div class="container" id="contact-content">${buildContactHtml(copy.contact)}</div>
        </section>
    </main>

    <footer class="site-footer">
        <div class="container footer__inner">
            <p class="footer__meta" id="footer-rights">© 2026 ${esc(copy.footer.rights)}</p>
            <nav class="footer__nav" id="footer-nav" aria-label="${isEs ? 'Navegación del pie' : 'Footer navigation'}">${buildFooterNavHtml(copy.nav)}</nav>
        </div>
    </footer>

    <script type="module" src="/assets/js/app.js"></script>
</body>

</html>
`;
}

function buildSitemap() {
    const lastmod = '2026-11-24';
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <url>
        <loc>${BASE_URL}/</loc>
        <lastmod>${lastmod}</lastmod>
        <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/" />
        <xhtml:link rel="alternate" hreflang="es" href="${BASE_URL}/es/" />
        <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${BASE_URL}/es/</loc>
        <lastmod>${lastmod}</lastmod>
        <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/" />
        <xhtml:link rel="alternate" hreflang="es" href="${BASE_URL}/es/" />
        <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
</urlset>
`;
}

// Generate EN (/)
fs.writeFileSync(path.join(ROOT, 'index.html'), buildHtmlPage('en'), 'utf8');

// Generate ES (/es/)
const esDir = path.join(ROOT, 'es');
fs.mkdirSync(esDir, { recursive: true });
fs.writeFileSync(path.join(esDir, 'index.html'), buildHtmlPage('es'), 'utf8');

// Generate sitemap.xml
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), buildSitemap(), 'utf8');

console.log('Prerendered index.html (EN), es/index.html (ES), and sitemap.xml.');
