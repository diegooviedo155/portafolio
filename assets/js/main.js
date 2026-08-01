/*===== MENU SHOW (mobile) =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('is-active')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE LINK ON CLICK + CLOSE MOBILE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
    document.getElementById('nav-toggle').classList.remove('is-active')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLLSPY: highlight nav link for section in view =====*/
const sections = document.querySelectorAll('main section[id]');

const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
            navLink.forEach(n => n.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(s => spy.observe(s));

/*===== HEADER SHADOW ON SCROLL =====*/
const header = document.querySelector('.l-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('l-header--scrolled', window.scrollY > 12);
});

/*===== CURRENT YEAR IN FOOTER =====*/
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 900,
    easing: 'cubic-bezier(.5,0,0,1)',
    reset: false
});

/*HERO*/
sr.reveal('.home__eyebrow', {});
sr.reveal('.home__title', { delay: 100 });
sr.reveal('.home__text', { delay: 200 });
sr.reveal('.home__cta', { delay: 300 });
sr.reveal('.home__social-icon', { interval: 100, delay: 350 });
sr.reveal('.home__img', { delay: 200, origin: 'right', distance: '30px' });
sr.reveal('.home__meta', { delay: 450 });

/*ABOUT*/
sr.reveal('.about__eyebrow', {});
sr.reveal('.about__title', { delay: 100 });
sr.reveal('.about__stat', { interval: 120, delay: 150 });
sr.reveal('.about__text', { delay: 250 });
sr.reveal('.about__img', { origin: 'left', distance: '30px' });

/*SKILLS*/
sr.reveal('.skills__eyebrow', {});
sr.reveal('.skills__title', { delay: 100 });
sr.reveal('.skills__text', { delay: 150 });
sr.reveal('.skills__group', { interval: 150, delay: 200 });

/*WORK*/
sr.reveal('.work__eyebrow', {});
sr.reveal('.work__title', { delay: 100 });
sr.reveal('.work__text', { delay: 150 });
sr.reveal('.project-card', { interval: 150, delay: 200 });
sr.reveal('.work__more', { delay: 250 });

/*CONTACT*/
sr.reveal('.contact__eyebrow', {});
sr.reveal('.contact__title', { delay: 100 });
sr.reveal('.contact__form', { delay: 200 });
sr.reveal('.contact__chip', { interval: 100, delay: 250 });
