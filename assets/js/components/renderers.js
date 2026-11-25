/**
 * @fileoverview Pure DOM rendering helpers and reusable SVG icons.
 * Keeps presentation cleanly separated from content data.
 */

import { PROFILE_META } from '../data/portfolio-data.js';

/**
 * Escapes HTML special characters to prevent accidental injection.
 * @param {string} value
 * @returns {string}
 */
function esc(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export const ICONS = {
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`
};

/**
 * Renders navigation links for both desktop nav and mobile drawer.
 * @param {Record<string, string>} navCopy
 */
export function renderNav(navCopy) {
    const items = [
        { href: '#profile', label: navCopy.profile },
        { href: '#experience', label: navCopy.experience },
        { href: '#projects', label: navCopy.projects },
        { href: '#cases', label: navCopy.cases },
        { href: '#contact', label: navCopy.contact }
    ];

    const desktopEl = document.getElementById('nav-links');
    const mobileEl = document.getElementById('mobile-drawer-links');

    if (desktopEl) {
        desktopEl.innerHTML = items
            .map((item) => `<a href="${item.href}" class="nav__link">${esc(item.label)}</a>`)
            .join('');
    }

    if (mobileEl) {
        mobileEl.innerHTML = items
            .map((item) => `<a href="${item.href}" class="mobile-drawer__link">${esc(item.label)}</a>`)
            .join('');
    }
}

/**
 * Renders Hero section.
 * @param {any} hero
 */
export function renderHero(hero) {
    const root = document.getElementById('hero-content');
    if (!root) return;

    root.innerHTML = `
        <div class="hero__grid">
            <div>
                <div class="hero__status">
                    <span class="hero__status-dot" aria-hidden="true"></span>
                    <span>${esc(hero.availability)}</span>
                </div>

                <p class="hero__name">${esc(PROFILE_META.name)} · ${esc(hero.positioning)}</p>

                <h1 class="hero__title">
                    ${esc(hero.headlineMain)}
                    <span class="hero__title-muted"> ${esc(hero.headlineMuted)}</span>
                </h1>

                <p class="hero__subtitle">${esc(hero.subheadline)}</p>

                <div class="hero__actions">
                    <a href="#projects" class="btn btn--primary">
                        ${esc(hero.ctaPrimary)} ${ICONS.arrowRight}
                    </a>
                    <a href="#contact" class="btn btn--secondary">
                        ${esc(hero.ctaSecondary)}
                    </a>
                    <a href="${esc(hero.cvPath || PROFILE_META.cvPath)}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost">
                        ${ICONS.file} ${esc(hero.ctaCv)}
                    </a>
                </div>

                <div class="hero__links">
                    <a href="${PROFILE_META.linkedin}" target="_blank" rel="noopener noreferrer" class="hero__social-link">
                        ${ICONS.linkedin} LinkedIn
                    </a>
                    <a href="${PROFILE_META.github}" target="_blank" rel="noopener noreferrer" class="hero__social-link">
                        ${ICONS.github} GitHub
                    </a>
                    <a href="mailto:${PROFILE_META.email}" class="hero__social-link">
                        ${ICONS.mail} ${esc(PROFILE_META.email)}
                    </a>
                </div>
            </div>

            <aside class="hero__spec" aria-label="Engineering overview">
                <div class="hero__spec-header">
                    <span>${esc(hero.specHeaderLeft)}</span>
                    <span>${esc(hero.specHeaderRight)}</span>
                </div>
                <div class="hero__spec-list">
                    ${hero.specItems
                        .map(
                            (item) => `
                        <div class="hero__spec-item">
                            <span class="hero__spec-label">${esc(item.label)}</span>
                            <span class="hero__spec-value">${esc(item.value)}</span>
                        </div>
                    `
                        )
                        .join('')}
                </div>
                <div class="hero__spec-footer">
                    ${hero.specTags.map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')}
                </div>
            </aside>
        </div>

        <a href="#profile" class="hero__scroll">
            <span class="hero__scroll-line" aria-hidden="true"></span>
            <span>${esc(hero.scrollCue)}</span>
        </a>
    `;
}

/**
 * Renders Engineering Profile (7 strategic disciplines, badge-free editorial typography).
 * @param {any} profile
 */
export function renderProfile(profile) {
    const root = document.getElementById('profile-content');
    if (!root) return;

    const primaryDomains = profile.domains.filter((d) => d.primary);
    const secondaryDomains = profile.domains.filter((d) => !d.primary);

    const renderCard = (domain, isPrimary) => `
        <article class="capability-card ${isPrimary ? 'capability-card--primary' : ''} reveal">
            <div class="capability-card__head">
                <h3 class="capability-card__title">${esc(domain.title)}</h3>
                <span class="capability-card__index">${esc(domain.index)}</span>
            </div>
            <p class="capability-card__summary">${esc(domain.summary)}</p>
            <div class="stack-editorial">
                <p class="stack-core">${esc(domain.core.join(' · '))}</p>
                ${
                    domain.supporting?.length
                        ? `<p class="stack-supporting">${esc(domain.supporting.join(' · '))}</p>`
                        : ''
                }
            </div>
        </article>
    `;

    root.innerHTML = `
        <div class="section-header reveal">
            <span class="section-eyebrow">${esc(profile.eyebrow)}</span>
            <h2 class="section-title">${esc(profile.title)}</h2>
            <p class="section-subtitle">${esc(profile.subtitle)}</p>
        </div>

        <div class="profile-grid profile-grid--primary">
            ${primaryDomains.map((d) => renderCard(d, true)).join('')}
        </div>
        <div class="profile-grid profile-grid--secondary">
            ${secondaryDomains.map((d) => renderCard(d, false)).join('')}
        </div>
    `;
}

/**
 * Renders Professional Experience timeline.
 * @param {any} experience
 */
export function renderExperience(experience) {
    const root = document.getElementById('experience-content');
    if (!root) return;

    root.innerHTML = `
        <div class="section-header reveal">
            <span class="section-eyebrow">${esc(experience.eyebrow)}</span>
            <h2 class="section-title">${esc(experience.title)}</h2>
            <p class="section-subtitle">${esc(experience.subtitle)}</p>
        </div>

        <div class="experience-list">
            ${experience.entries
                .map(
                    (entry) => `
                <article class="experience-entry reveal">
                    <div class="experience-meta">
                        <span class="experience-period">${esc(entry.period)}</span>
                        <h3 class="experience-company">${esc(entry.company)}</h3>
                        <p class="experience-role">${esc(entry.role)}</p>
                    </div>
                    <div class="experience-body">
                        <p class="experience-intro">${esc(entry.summary)}</p>
                        ${
                            entry.projects
                                ? `<div class="experience-projects">
                                    ${entry.projects
                                        .map(
                                            (proj) => `
                                        <div class="exp-subcard">
                                            <div class="exp-subcard__header">
                                                <h4 class="exp-subcard__name">${esc(proj.name)}</h4>
                                                <span class="exp-subcard__domain">${esc(proj.domain)}</span>
                                            </div>
                                            <ul class="exp-bullets">
                                                ${proj.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}
                                            </ul>
                                        </div>
                                    `
                                        )
                                        .join('')}
                                   </div>`
                                : ''
                        }
                        ${
                            entry.highlights
                                ? `<ul class="exp-bullets">
                                    ${entry.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}
                                   </ul>`
                                : ''
                        }
                    </div>
                </article>
            `
                )
                .join('')}
        </div>
    `;
}

/**
 * Renders Selected Projects (Tandi Flagship + Golero & Fynta Case Studies).
 * @param {any} projects
 */
export function renderProjects(projects) {
    const root = document.getElementById('projects-content');
    if (!root) return;

    const { tandi, golero, fynta, labels } = projects;

    root.innerHTML = `
        <div class="section-header reveal">
            <span class="section-eyebrow">${esc(projects.eyebrow)}</span>
            <h2 class="section-title">${esc(projects.title)}</h2>
            <p class="section-subtitle">${esc(projects.subtitle)}</p>
        </div>

        <div class="case-stack">
            <!-- Flagship Case Study: Tandi -->
            <article class="flagship-case reveal" aria-labelledby="tandi-heading">
                <div class="flagship-case__top">
                    <div>
                        <span class="flagship-case__badge">${esc(tandi.badge)}</span>
                        <h3 id="tandi-heading" class="flagship-case__title">${esc(tandi.name)}</h3>
                        <p class="flagship-case__subtitle">${esc(tandi.tagline)}</p>
                        <p class="flagship-case__desc">${esc(tandi.description)}</p>
                    </div>
                    <div class="flagship-case__actions">
                        <a href="${tandi.visitUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
                            ${esc(tandi.visitLabel)} ${ICONS.external}
                        </a>
                        <a href="#contact" class="btn btn--secondary">
                            ${esc(tandi.contactLabel)}
                        </a>
                    </div>
                </div>

                <div class="case-split">
                    <div class="case-panel">
                        <span class="case-panel__label">${esc(tandi.problemTitle)}</span>
                        <h4 class="case-panel__heading">${esc(tandi.problemHeading)}</h4>
                        <p class="case-panel__text">${esc(tandi.problemText)}</p>
                    </div>
                    <div class="case-panel">
                        <span class="case-panel__label">${esc(tandi.solutionTitle)}</span>
                        <h4 class="case-panel__heading">${esc(tandi.solutionHeading)}</h4>
                        <p class="case-panel__text">${esc(tandi.solutionText)}</p>
                    </div>
                </div>

                <div>
                    <p class="case-section-label">${esc(tandi.screenshotsLabel)}</p>
                    <div class="screenshot-grid">
                        ${tandi.screenshots
                            .map(
                                (shot) => `
                            <figure class="screenshot-card">
                                <div class="screenshot-card__media">
                                    <img src="${shot.image}" alt="${esc(shot.alt)}" loading="lazy" width="1440" height="900">
                                </div>
                                <figcaption class="screenshot-card__caption">
                                    <span class="screenshot-card__title">${esc(shot.title)}</span>
                                    <span class="screenshot-card__meta">${esc(shot.meta)}</span>
                                </figcaption>
                            </figure>
                        `
                            )
                            .join('')}
                    </div>
                </div>

                <div>
                    <p class="case-section-label">${esc(tandi.capabilitiesLabel)}</p>
                    <div class="capabilities-grid">
                        ${tandi.capabilities
                            .map(
                                (cap) => `
                            <div class="cap-item">
                                <h4 class="cap-item__title">${esc(cap.title)}</h4>
                                <p class="cap-item__desc">${esc(cap.desc)}</p>
                            </div>
                        `
                            )
                            .join('')}
                    </div>
                </div>

                <div class="case-details-grid">
                    <div class="case-panel">
                        <span class="case-panel__label">${esc(tandi.challengesTitle)}</span>
                        <ul class="detail-list">
                            ${tandi.challenges
                                .map((c) => `<li><strong>${esc(c.label)}:</strong> ${esc(c.detail)}</li>`)
                                .join('')}
                        </ul>
                    </div>
                    <div class="case-panel">
                        <span class="case-panel__label">${esc(tandi.decisionsTitle)}</span>
                        <ul class="detail-list">
                            ${tandi.decisions
                                .map((d) => `<li><strong>${esc(d.label)}:</strong> ${esc(d.detail)}</li>`)
                                .join('')}
                        </ul>
                    </div>
                </div>
            </article>

            <!-- Distinct Case Studies: Golero (Product & Ops) & Fynta (Architecture & Monorepo) -->
            <div class="secondary-cases">
                <article class="case-feature reveal">
                    <div class="case-feature__media">
                        <img src="${golero.image}" alt="${esc(golero.alt)}" loading="lazy" width="800" height="450">
                    </div>
                    <div class="case-feature__body">
                        <div class="case-card__head">
                            <div>
                                <span class="case-card__badge">${esc(golero.badge)}</span>
                                <h3 class="case-card__title">${esc(golero.name)}</h3>
                                <p class="case-card__domain">${esc(golero.domain)}</p>
                            </div>
                            <a href="${golero.url}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" aria-label="${esc(labels.visitLive)}: ${esc(golero.name)}">
                                ${ICONS.external}
                            </a>
                        </div>

                        <p class="case-card__summary">${esc(golero.summary)}</p>

                        <div class="case-card__blocks">
                            <div>
                                <p class="case-card__block-title">${esc(labels.problem)}</p>
                                <p class="case-card__summary">${esc(golero.problem)}</p>
                            </div>
                            <div>
                                <p class="case-card__block-title">${esc(labels.processModeling)}</p>
                                <p class="case-card__summary">${esc(golero.processModeling)}</p>
                            </div>
                            <div>
                                <p class="case-card__block-title">${esc(labels.architecture)}</p>
                                <p class="case-card__summary">${esc(golero.architecture)}</p>
                            </div>
                        </div>

                        <div class="case-card__tags">
                            ${golero.stack.map((tech) => `<span class="tag">${esc(tech)}</span>`).join('')}
                        </div>
                    </div>
                </article>

                <article class="case-feature case-feature--reverse reveal">
                    <div class="case-feature__media">
                        <img src="${fynta.image}" alt="${esc(fynta.alt)}" loading="lazy" width="800" height="450">
                    </div>
                    <div class="case-feature__body">
                        <div class="case-card__head">
                            <div>
                                <span class="case-card__badge">${esc(fynta.badge)}</span>
                                <h3 class="case-card__title">${esc(fynta.name)}</h3>
                                <p class="case-card__domain">${esc(fynta.domain)}</p>
                            </div>
                            <a href="${fynta.url}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" aria-label="${esc(labels.visitLive)}: ${esc(fynta.name)}">
                                ${ICONS.external}
                            </a>
                        </div>

                        <p class="case-card__summary">${esc(fynta.summary)}</p>

                        <div class="arch-flow" aria-label="Fynta architecture layers">
                            ${fynta.architectureFlow
                                .map(
                                    (row) => `
                                <div class="arch-flow__row">
                                    <span class="arch-flow__layer">${esc(row.layer)}</span>
                                    <span class="arch-flow__detail">${esc(row.detail)}</span>
                                </div>
                            `
                                )
                                .join('')}
                        </div>

                        <div class="case-card__blocks">
                            <div>
                                <p class="case-card__block-title">${esc(labels.problem)}</p>
                                <p class="case-card__summary">${esc(fynta.problem)}</p>
                            </div>
                            <div>
                                <p class="case-card__block-title">${esc(labels.architecture)}</p>
                                <p class="case-card__summary">${esc(fynta.architecture)}</p>
                            </div>
                        </div>

                        <div class="case-card__tags">
                            ${fynta.stack.map((tech) => `<span class="tag">${esc(tech)}</span>`).join('')}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    `;
}

/**
 * Renders Engineering Stories section (Context -> Problem -> Approach -> Decision -> Takeaway).
 * @param {any} casesData
 */
export function renderEngineeringCases(casesData) {
    const root = document.getElementById('cases-content');
    if (!root) return;

    const { labels, items } = casesData;

    root.innerHTML = `
        <div class="section-header reveal">
            <span class="section-eyebrow">${esc(casesData.eyebrow)}</span>
            <h2 class="section-title">${esc(casesData.title)}</h2>
            <p class="section-subtitle">${esc(casesData.subtitle)}</p>
        </div>

        <div class="eng-cases-grid">
            ${items
                .map(
                    (item) => `
                <article class="eng-case-card reveal">
                    <span class="eng-case-card__kicker">${esc(item.kicker)}</span>
                    <h3 class="eng-case-card__title">${esc(item.title)}</h3>
                    <dl class="eng-case-dl">
                        <div>
                            <dt>${esc(labels.context)}</dt>
                            <dd>${esc(item.context)}</dd>
                        </div>
                        <div>
                            <dt>${esc(labels.problem)}</dt>
                            <dd>${esc(item.problem)}</dd>
                        </div>
                        <div>
                            <dt>${esc(labels.approach)}</dt>
                            <dd>${esc(item.approach)}</dd>
                        </div>
                        <div>
                            <dt>${esc(labels.decision)}</dt>
                            <dd>${esc(item.decision)}</dd>
                        </div>
                        <div>
                            <dt>${esc(labels.takeaway)}</dt>
                            <dd>${esc(item.takeaway)}</dd>
                        </div>
                    </dl>
                    ${item.diagram ? `<pre class="eng-diagram" aria-label="Architecture flow">${esc(item.diagram)}</pre>` : ''}
                </article>
            `
                )
                .join('')}
        </div>
    `;
}

/**
 * Renders Contact section with copy-email support.
 * @param {any} contact
 */
export function renderContact(contact) {
    const root = document.getElementById('contact-content');
    if (!root) return;

    root.innerHTML = `
        <div class="contact-box reveal">
            <div>
                <span class="section-eyebrow">${esc(contact.eyebrow)}</span>
                <h2 class="contact-box__title">${esc(contact.title)}</h2>
                <p class="contact-box__subtitle">${esc(contact.subtitle)}</p>
                <div class="contact-box__actions">
                    <a href="mailto:${PROFILE_META.email}" class="btn btn--primary">
                        ${ICONS.mail} ${esc(contact.sendEmail)}
                    </a>
                    <button type="button" id="copy-email-btn" class="btn btn--secondary" data-copy-label="${esc(contact.copyEmail)}" data-copied-label="${esc(contact.copied)}">
                        ${ICONS.copy} <span>${esc(contact.copyEmail)}</span>
                    </button>
                </div>
            </div>

            <div class="contact-links">
                ${contact.links
                    .map(
                        (link) => `
                    <a href="${link.href}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="contact-link-card">
                        <div>
                            <div class="contact-link-card__label">${esc(link.label)}</div>
                            <div class="contact-link-card__value">${esc(link.value)}</div>
                        </div>
                        ${ICONS.external}
                    </a>
                `
                    )
                    .join('')}
            </div>
        </div>
    `;
}

/**
 * Renders Footer.
 * @param {any} copy
 */
export function renderFooter(copy) {
    const rightsEl = document.getElementById('footer-rights');
    const navEl = document.getElementById('footer-nav');

    if (rightsEl) {
        rightsEl.textContent = `© ${new Date().getFullYear()} ${copy.footer.rights}`;
    }

    if (navEl) {
        navEl.innerHTML = `
            <a href="#profile">${esc(copy.nav.profile)}</a>
            <a href="#experience">${esc(copy.nav.experience)}</a>
            <a href="#projects">${esc(copy.nav.projects)}</a>
            <a href="#cases">${esc(copy.nav.cases)}</a>
            <a href="#contact">${esc(copy.nav.contact)}</a>
        `;
    }
}
