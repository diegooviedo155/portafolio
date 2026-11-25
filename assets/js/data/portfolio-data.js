/**
 * @fileoverview Single source of truth for Diego Alejandro Oviedo's portfolio content.
 * Strongly typed via JSDoc typedefs and structured for EN / ES localization.
 */

/**
 * @typedef {'en' | 'es'} Locale
 *
 * @typedef {Object} CapabilityDomain
 * @property {string} id
 * @property {string} index
 * @property {boolean} primary
 * @property {string} title
 * @property {string} summary
 * @property {string[]} stack
 *
 * @typedef {Object} ExperienceSubProject
 * @property {string} name
 * @property {string} domain
 * @property {string[]} highlights
 *
 * @typedef {Object} ExperienceEntry
 * @property {string} company
 * @property {string} role
 * @property {string} period
 * @property {string} summary
 * @property {ExperienceSubProject[]} [projects]
 * @property {string[]} [highlights]
 *
 * @typedef {Object} CapabilityItem
 * @property {string} title
 * @property {string} desc
 *
 * @typedef {Object} ScreenshotSlot
 * @property {string} tag
 * @property {string} title
 * @property {string} hint
 *
 * @typedef {Object} EngineeringCase
 * @property {string} kicker
 * @property {string} title
 * @property {string} context
 * @property {string} problem
 * @property {string} solution
 * @property {string} decision
 * @property {string} takeaway
 */

export const PROFILE_META = {
    name: 'Diego Alejandro Oviedo',
    shortName: 'Diego Oviedo',
    monogram: 'DO',
    email: 'diegooviedo155@gmail.com',
    linkedin: 'https://www.linkedin.com/in/diego-alejandro-oviedo/',
    github: 'https://github.com/diegooviedo155',
    cvPath: './assets/cv/CV-Diego-Oviedo.pdf',
    siteUrl: 'https://portafolio-diego-oviedo.netlify.app/'
};

/** @type {Record<Locale, any>} */
export const PORTFOLIO_COPY = {
    en: {
        nav: {
            profile: 'Capabilities',
            experience: 'Experience',
            projects: 'Case Studies',
            cases: 'Engineering',
            contact: 'Contact'
        },
        hero: {
            availability: 'Open to Senior Frontend, Full Stack & Lead roles',
            positioning: 'Full Stack Developer · Angular, React, Java & Node.js · Microfrontends & Mobile',
            headlineMain: 'Building products, scalable interfaces',
            headlineMuted: 'and modern web applications.',
            subheadline:
                'Software engineer experienced in Angular, React, Java, and Node.js. I build, modernize, and integrate web and mobile applications, combining frontend engineering, backend systems, and architecture.',
            ctaPrimary: 'View Case Studies',
            ctaSecondary: 'Contact Me',
            ctaCv: 'Resume (PDF)',
            cvPath: './assets/cv/CV-Diego-Oviedo-EN.pdf',
            specHeaderLeft: 'ENGINEERING SNAPSHOT',
            specHeaderRight: 'BUENOS AIRES · REMOTE',
            specItems: [
                {
                    label: 'Primary Focus',
                    value: 'Senior Frontend · Full Stack · Frontend Architecture'
                },
                {
                    label: 'Core Stack',
                    value: 'Angular, React, TypeScript, Java / Spring, Node.js / NestJS'
                },
                {
                    label: 'Flagship Product',
                    value: 'Tandi — SaaS commerce workflow platform'
                },
                {
                    label: 'Background',
                    value: 'Payments, Entertainment, Mobile & SaaS Products (2021–2026)'
                }
            ],
            specTags: ['Microfrontends', 'Web Components', 'Ionic / Capacitor', 'React Native', 'Nx']
        },
        profile: {
            eyebrow: '01 / Engineering Profile',
            title: 'Full-stack execution with frontend architectural depth',
            subtitle:
                'Structured across six core engineering areas—from component systems and microfrontends to backend services, mobile apps, and external integrations.',
            domains: /** @type {CapabilityDomain[]} */ ([
                {
                    id: 'frontend',
                    index: '01',
                    primary: true,
                    title: 'Frontend Engineering',
                    summary:
                        'Designing maintainable, accessible, and high-performance web applications across Angular and React ecosystems with strict TypeScript.',
                    stack: ['Angular', 'React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'TanStack Query', 'Tailwind CSS', 'HTML', 'CSS', 'Sass']
                },
                {
                    id: 'backend',
                    index: '02',
                    primary: true,
                    title: 'Backend Engineering',
                    summary:
                        'Building modular REST APIs and microservices focused on domain clarity, data integrity, and reliable external service orchestration.',
                    stack: ['Java', 'Spring', 'Node.js', 'NestJS', 'REST APIs', 'Microservices', 'JPA', 'Hibernate']
                },
                {
                    id: 'architecture',
                    index: '03',
                    primary: false,
                    title: 'Architecture',
                    summary:
                        'Enabling incremental migrations, shared design systems, and multi-app monorepos.',
                    stack: ['Microfrontends', 'Web Components', 'Stencil.js', 'Nx', 'Component Libraries', 'Modular Architecture']
                },
                {
                    id: 'mobile',
                    index: '04',
                    primary: false,
                    title: 'Mobile Development',
                    summary:
                        'Shipping hybrid and cross-platform mobile apps with native device capabilities.',
                    stack: ['Ionic', 'Capacitor', 'Cordova', 'React Native', 'Expo', 'Native Integrations']
                },
                {
                    id: 'data-infra',
                    index: '05',
                    primary: false,
                    title: 'Data & Infrastructure',
                    summary:
                        'Relational persistence, containerized workflows, and automated delivery pipelines.',
                    stack: ['PostgreSQL', 'MySQL', 'Supabase', 'Docker', 'Jenkins', 'CI/CD', 'Git', 'Nexus']
                },
                {
                    id: 'integrations',
                    index: '06',
                    primary: false,
                    title: 'Integrations',
                    summary:
                        'Connecting payments, identity providers, push notifications, and third-party APIs.',
                    stack: ['Mercado Pago', 'Firebase Cloud Messaging', 'Amazon Cognito', 'Biometric Auth', 'Third-Party APIs']
                }
            ])
        },
        experience: {
            eyebrow: '02 / Professional Experience',
            title: 'Production engineering across payments, entertainment, and mobile',
            subtitle:
                'Four and a half years building and modernizing production systems, bridging legacy codebases with modern architectures.',
            entries: /** @type {ExperienceEntry[]} */ ([
                {
                    company: 'Eldar',
                    role: 'Full Stack Developer',
                    period: 'June 2022 – May 2026',
                    summary:
                        'Worked across payment processing, entertainment, and application modernization initiatives—spanning backend microservices, cross-framework component libraries, microfrontends, and hybrid mobile apps.',
                    projects: [
                        {
                            name: 'Onyra',
                            domain: 'Payments',
                            highlights: [
                                'Built microservices with Java and Spring, backed by MySQL persistence using JPA and Hibernate.',
                                'Containerized and automated builds with Docker and Jenkins.',
                                'Created a shared component library with Stencil.js and Web Components, distributed and versioned via Nexus.',
                                'Integrated Angular and React microfrontends into a cohesive platform.'
                            ]
                        },
                        {
                            name: 'Cabal',
                            domain: 'Payments',
                            highlights: [
                                'Modernized web and mobile applications across React, Ionic, Capacitor, and Cordova.',
                                'Implemented Firebase Cloud Messaging and biometric authentication.',
                                'Delivered native Android and iOS integrations, managing test environments and store-ready builds.'
                            ]
                        },
                        {
                            name: 'Bold',
                            domain: 'Entertainment',
                            highlights: [
                                'Developed hybrid mobile applications using Ionic, Angular, Capacitor, and Cordova.',
                                'Built features for points and rewards programs, service integrations, and migrations.',
                                'Integrated authentication flows with Amazon Cognito.'
                            ]
                        },
                        {
                            name: 'Cross-Platform & Modernization',
                            domain: 'Architecture',
                            highlights: [
                                'Executed incremental migration from React to Angular using microfrontends.',
                                'Delivered two Minimum Viable Products (MVPs) with Angular and maintained existing React applications.',
                                'Adopted TanStack Query and Tailwind CSS for cleaner state and UI workflows.'
                            ]
                        }
                    ]
                },
                {
                    company: 'Health Management Solutions',
                    role: 'Software Developer',
                    period: 'September 2021 – June 2022',
                    summary:
                        'Focused on mobile frontend development for healthcare management workflows.',
                    highlights: [
                        'Developed mobile frontend features using Ionic and Angular.',
                        'Implemented debt notification flows and integrated Mercado Pago for in-app payments.'
                    ]
                }
            ])
        },
        projects: {
            eyebrow: '03 / Selected Projects',
            title: 'Product engineering & case studies',
            subtitle:
                'SaaS products I build end-to-end—covering product discovery, architecture, full-stack implementation, payments, and deployment.',
            tandi: {
                badge: 'Flagship Case Study · SaaS',
                name: 'Tandi',
                tagline: 'From scattered WhatsApp orders to a structured digital sales workflow.',
                description:
                    'A SaaS platform designed to simplify online selling for entrepreneurs and small businesses.',
                visitUrl: 'https://tandi.com.ar/',
                visitLabel: 'Visit Tandi',
                exploreLabel: 'Explore the product',
                contactLabel: 'Contact me',
                problemTitle: 'The Problem',
                problemHeading: 'Selling through chat creates operational chaos',
                problemText:
                    'Entrepreneurs, resellers, and small shops commonly manage sales across WhatsApp chats, Instagram posts, manual catalogs, price lists, and spreadsheets. The core problem is not merely listing products online—it is organizing the entire commercial operation (variants, deposits, pre-orders, stock, and delivery tracking) without technical overhead.',
                solutionTitle: 'The Solution',
                solutionHeading: 'One structured workflow from catalog to dispatch',
                solutionText:
                    'Tandi centralizes the selling experience into a single platform where each store manages its online catalog, orders, deposits, balances, inventory, pre-orders, and shipping—supporting businesses that sell from own stock, on demand (por encargo), or in hybrid mode.',
                screenshotsLabel: 'Product Views (tandi.com.ar)',
                screenshots: [
                    {
                        image: 'assets/img/tandi-1.png',
                        alt: 'Tandi landing page and mobile storefront preview showing stock, pre-order, and hybrid selling modes',
                        title: 'Storefront & Hybrid Selling',
                        meta: 'Stock · Pre-order · Wholesale flow'
                    },
                    {
                        image: 'assets/img/tandi-2.png',
                        alt: 'Tandi promotions, customer history, and automatic order tracking timeline',
                        title: 'Promotions & Order Tracking',
                        meta: 'Coupons · Packs · Customer tracking link'
                    },
                    {
                        image: 'assets/img/tandi-3.png',
                        alt: 'Tandi workflow comparison covering wholesale notebook, flexible deposits, and mobile checkout',
                        title: 'Deposits & Wholesale Workflow',
                        meta: 'Flexible señas · Mobile checkout'
                    }
                ],
                capabilitiesLabel: 'Product Architecture & Verified Capabilities',
                capabilities: /** @type {CapabilityItem[]} */ ([
                    {
                        title: 'Storefront & Custom Link',
                        desc: 'Dedicated store URL ready to share on WhatsApp statuses, Instagram bios, and broadcast groups.'
                    },
                    {
                        title: 'Catalog & Variant Stock',
                        desc: 'Interactive galleries by size and color with independent stock tracking per variant.'
                    },
                    {
                        title: 'Stock, Pre-Order & Hybrid Modes',
                        desc: 'Supports immediate-delivery stock, on-demand pre-orders (por encargo), or both combined.'
                    },
                    {
                        title: 'Orders, Deposits & Balances',
                        desc: 'Centralized order intake with deposit (seña) management, pending balance control, and customer history.'
                    },
                    {
                        title: 'Wholesale Purchasing Workflow',
                        desc: 'Built-in wholesale purchasing notebook (cuaderno de compra mayorista) to consolidate supplier restocks.'
                    },
                    {
                        title: 'Payments, Shipping & Promos',
                        desc: 'Mercado Pago & bank transfers, postal-code shipping quotes, QR/barcode labels, coupons, packs, and combos.'
                    }
                ]),
                challengesTitle: 'Technical Challenges & Architecture Focus',
                challenges: [
                    {
                        label: 'Variant & Inventory Modeling',
                        detail: 'Representing size/color matrices with independent stock counts alongside on-demand items in a single storefront.'
                    },
                    {
                        label: 'Hybrid Order Lifecycle',
                        detail: 'Coordinating state transitions across partial deposits (señas), remaining balances, wholesale sourcing, and dispatch.'
                    },
                    {
                        label: 'External Integrations',
                        detail: 'Connecting Mercado Pago payment confirmation, postal-code shipping quotes, and QR/barcode label generation.'
                    },
                    {
                        label: 'Mobile-First Seller UX',
                        detail: 'Enabling store owners to upload products, manage orders, and generate labels directly from a phone.'
                    }
                ],
                decisionsTitle: 'Engineering Decisions & Scope',
                decisions: [
                    {
                        label: 'Workflow-First Product Design',
                        detail: 'Structured around real WhatsApp/Instagram reseller workflows rather than generic e-commerce templates.'
                    },
                    {
                        label: 'No-Friction Buyer Tracking',
                        detail: 'Automatic per-order tracking links reduce repetitive status inquiries without forcing buyer account creation.'
                    },
                    {
                        label: 'Scope & Engineering Maturity',
                        detail: 'Covers full commercial operations—catalog, variants, hybrid stock, deposits, wholesale notebook, payments, shipping, and promotions.'
                    }
                ]
            },
            secondary: [
                {
                    name: 'Golero',
                    domain: 'Sports Tech · SaaS',
                    url: 'https://golero.com.ar/',
                    image: 'assets/img/work-golero.jpg',
                    alt: 'Golero sports club and court reservation platform screenshot',
                    summary:
                        'SaaS platform digitizing sports clubs and complexes—enabling 24/7 court discovery, real-time availability, online reservations, and Mercado Pago payments.',
                    problem:
                        'Clubs relied on manual WhatsApp coordination, leading to double bookings and friction for players.',
                    architecture:
                        'Full-stack Next.js and TypeScript application backed by Supabase, SEO-optimized club discovery, and Mercado Pago checkout for instant confirmation.',
                    stack: ['Next.js', 'TypeScript', 'Supabase', 'Mercado Pago', 'SEO']
                },
                {
                    name: 'Fynta',
                    domain: 'Fintech · Electronic Invoicing SaaS',
                    url: 'https://fynta.app/',
                    image: 'assets/img/work-fynta.jpg',
                    alt: 'Fynta electronic invoicing SaaS for Argentine monotributistas screenshot',
                    summary:
                        'Electronic invoicing SaaS for Argentine monotributistas—handling CAE voucher issuance with ARCA (AFIP), category cap tracking, and preventive alerts.',
                    problem:
                        'Independent workers face complex tax portals and risk exceeding category limits without timely visibility.',
                    architecture:
                        'Nx monorepo sharing Zod validation schemas and typed HTTP contracts across a modular NestJS API, PostgreSQL/Supabase persistence, Next.js web app, and React Native (Expo) mobile app using a Billing Provider pattern.',
                    stack: ['TypeScript', 'NestJS', 'Next.js', 'React Native', 'Expo', 'Nx', 'Zod', 'PostgreSQL', 'Supabase']
                }
            ]
        },
        cases: {
            eyebrow: '04 / Engineering Cases',
            title: 'How I approach technical decisions',
            subtitle:
                'Concise notes on architectural trade-offs and system modernization from production work.',
            items: /** @type {EngineeringCase[]} */ ([
                {
                    kicker: 'Architecture · Migration',
                    title: 'Incremental React-to-Angular migration via Microfrontends',
                    context: 'Production enterprise web applications at Eldar evolving over multi-year cycles.',
                    problem: 'A full rewrite would freeze feature delivery and introduce high regression risk.',
                    solution: 'Co-hosted React and Angular microfrontends behind shared routing and composition boundaries.',
                    decision: 'Migrated domain slices incrementally instead of scheduling a big-bang rewrite.',
                    takeaway: 'Incremental boundaries let teams ship product features while retiring legacy modules safely.'
                },
                {
                    kicker: 'Design Systems · Web Components',
                    title: 'Cross-framework UI library with Stencil.js & Nexus',
                    context: 'Multiple teams building Angular and React microfrontends needing consistent UI.',
                    problem: 'Duplicating components per framework caused visual drift and double maintenance.',
                    solution: 'Built framework-agnostic Web Components with Stencil.js, versioned and distributed through Nexus.',
                    decision: 'Standardized on Web Components at the UI boundary rather than maintaining parallel React/Angular packages.',
                    takeaway: 'Strict versioning and framework-neutral primitives scale better than framework-coupled UI kits.'
                },
                {
                    kicker: 'Monorepo · Type Safety',
                    title: 'Shared Zod contracts across NestJS, Next.js, and React Native',
                    context: 'Building Fynta across web, mobile, and backend API simultaneously.',
                    problem: 'API payload drift between backend and clients slows down solo/small-team product iteration.',
                    solution: 'Structured an Nx monorepo with shared TypeScript types, Zod schemas, and a typed HTTP client.',
                    decision: 'Enforced single-source validation schemas at the boundary instead of duplicating DTOs.',
                    takeaway: 'Shared contracts catch breaking changes at compile time before they reach production.'
                }
            ])
        },
        contact: {
            eyebrow: '05 / Contact',
            title: "Let's build something meaningful.",
            subtitle:
                "I'm open to opportunities where I can contribute to building, evolving and scaling software products.",
            copyEmail: 'Copy email',
            copied: 'Copied to clipboard',
            sendEmail: 'Send email',
            links: [
                { label: 'Email', value: 'diegooviedo155@gmail.com', href: 'mailto:diegooviedo155@gmail.com', external: false },
                { label: 'LinkedIn', value: '/in/diego-alejandro-oviedo', href: 'https://www.linkedin.com/in/diego-alejandro-oviedo/', external: true },
                { label: 'GitHub', value: '@diegooviedo155', href: 'https://github.com/diegooviedo155', external: true }
            ]
        },
        footer: {
            rights: 'Diego Alejandro Oviedo. Built with semantic HTML, modular JS, and zero framework bloat.'
        }
    },

    es: {
        nav: {
            profile: 'Capacidades',
            experience: 'Experiencia',
            projects: 'Casos de estudio',
            cases: 'Ingeniería',
            contact: 'Contacto'
        },
        hero: {
            availability: 'Abierto a roles Senior Frontend, Full Stack y Frontend Lead',
            positioning: 'Full Stack Developer · Angular, React, Java & Node.js · Microfrontends & Mobile',
            headlineMain: 'Construyendo productos, interfaces escalables',
            headlineMuted: 'y aplicaciones web modernas.',
            subheadline:
                'Desarrollador de software con experiencia en Angular, React, Java y Node.js. Construyo, modernizo e integro aplicaciones web y móviles, combinando frontend engineering, backend y arquitectura.',
            ctaPrimary: 'Ver casos de estudio',
            ctaSecondary: 'Contactarme',
            ctaCv: 'Descargar CV',
            cvPath: './assets/cv/CV-Diego-Oviedo-ES.pdf',
            specHeaderLeft: 'PERFIL TÉCNICO',
            specHeaderRight: 'BUENOS AIRES · REMOTO',
            specItems: [
                {
                    label: 'Foco principal',
                    value: 'Senior Frontend · Full Stack · Arquitectura Frontend'
                },
                {
                    label: 'Stack principal',
                    value: 'Angular, React, TypeScript, Java / Spring, Node.js / NestJS'
                },
                {
                    label: 'Producto insignia',
                    value: 'Tandi — Plataforma SaaS de gestión comercial'
                },
                {
                    label: 'Trayectoria',
                    value: 'Medios de pago, Entretenimiento, Mobile y SaaS propios (2021–2026)'
                }
            ],
            specTags: ['Microfrontends', 'Web Components', 'Ionic / Capacitor', 'React Native', 'Nx']
        },
        profile: {
            eyebrow: '01 / Perfil de Ingeniería',
            title: 'Ejecución full stack con profundidad en arquitectura frontend',
            subtitle:
                'Organizado en seis áreas de ingeniería: desde sistemas de componentes y microfrontends hasta servicios backend, aplicaciones móviles e integraciones externas.',
            domains: /** @type {CapabilityDomain[]} */ ([
                {
                    id: 'frontend',
                    index: '01',
                    primary: true,
                    title: 'Frontend Engineering',
                    summary:
                        'Diseño y desarrollo de aplicaciones web mantenibles, accesibles y de alto rendimiento en Angular y React con TypeScript estricto.',
                    stack: ['Angular', 'React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'TanStack Query', 'Tailwind CSS', 'HTML', 'CSS', 'Sass']
                },
                {
                    id: 'backend',
                    index: '02',
                    primary: true,
                    title: 'Backend Engineering',
                    summary:
                        'Desarrollo de APIs REST modulares y microservicios enfocados en claridad de dominio, persistencia e integración de servicios.',
                    stack: ['Java', 'Spring', 'Node.js', 'NestJS', 'APIs REST', 'Microservicios', 'JPA', 'Hibernate']
                },
                {
                    id: 'architecture',
                    index: '03',
                    primary: false,
                    title: 'Architecture',
                    summary:
                        'Migraciones incrementales, bibliotecas de componentes compartidas y monorepos.',
                    stack: ['Microfrontends', 'Web Components', 'Stencil.js', 'Nx', 'Design Systems', 'Arquitectura Modular']
                },
                {
                    id: 'mobile',
                    index: '04',
                    primary: false,
                    title: 'Mobile Development',
                    summary:
                        'Aplicaciones híbridas y multiplataforma con integraciones nativas en Android e iOS.',
                    stack: ['Ionic', 'Capacitor', 'Cordova', 'React Native', 'Expo', 'Integraciones Nativas']
                },
                {
                    id: 'data-infra',
                    index: '05',
                    primary: false,
                    title: 'Data & Infrastructure',
                    summary:
                        'Persistencia relacional, entornos containerizados y pipelines de entrega.',
                    stack: ['PostgreSQL', 'MySQL', 'Supabase', 'Docker', 'Jenkins', 'CI/CD', 'Git', 'Nexus']
                },
                {
                    id: 'integrations',
                    index: '06',
                    primary: false,
                    title: 'Integrations',
                    summary:
                        'Pasarelas de pago, identidad, notificaciones push y APIs de terceros.',
                    stack: ['Mercado Pago', 'Firebase Cloud Messaging', 'Amazon Cognito', 'Auth Biométrica', 'APIs Externas']
                }
            ])
        },
        experience: {
            eyebrow: '02 / Experiencia Profesional',
            title: 'Ingeniería en producción: medios de pago, entretenimiento y mobile',
            subtitle:
                'Más de cuatro años construyendo y modernizando sistemas en producción, conectando aplicaciones existentes con arquitecturas modernas.',
            entries: /** @type {ExperienceEntry[]} */ ([
                {
                    company: 'Eldar',
                    role: 'Full Stack Developer',
                    period: 'Junio 2022 – Mayo 2026',
                    summary:
                        'Participación en proyectos de medios de pago, entretenimiento y modernización de aplicaciones—abarcando microservicios backend, bibliotecas de componentes, microfrontends y apps móviles híbridas.',
                    projects: [
                        {
                            name: 'Onyra',
                            domain: 'Medios de pago',
                            highlights: [
                                'Desarrollo de microservicios con Java y Spring, con persistencia en MySQL vía JPA e Hibernate.',
                                'Containerización y automatización con Docker y Jenkins.',
                                'Biblioteca de componentes con Stencil.js y Web Components, versionada y distribuida mediante Nexus.',
                                'Integración de microfrontends Angular y React.'
                            ]
                        },
                        {
                            name: 'Cabal',
                            domain: 'Medios de pago',
                            highlights: [
                                'Modernización de aplicaciones web y mobile con React, Ionic, Capacitor y Cordova.',
                                'Implementación de Firebase Cloud Messaging y autenticación biométrica.',
                                'Integraciones nativas Android e iOS, despliegues y gestión de ambientes de prueba.'
                            ]
                        },
                        {
                            name: 'Bold',
                            domain: 'Entretenimiento',
                            highlights: [
                                'Desarrollo de aplicaciones híbridas con Ionic, Angular, Capacitor y Cordova.',
                                'Implementación de programas de puntos y beneficios, migraciones e integración de servicios.',
                                'Integración de autenticación con Amazon Cognito.'
                            ]
                        },
                        {
                            name: 'Otras implementaciones',
                            domain: 'Arquitectura',
                            highlights: [
                                'Migración incremental de React a Angular mediante microfrontends.',
                                'Entrega de dos productos mínimos viables (MVP) con Angular y mantenimiento de aplicaciones React.',
                                'Adopción de TanStack Query y Tailwind CSS.'
                            ]
                        }
                    ]
                },
                {
                    company: 'Health Management Solutions',
                    role: 'Software Developer',
                    period: 'Septiembre 2021 – Junio 2022',
                    summary:
                        'Desarrollo frontend orientado a aplicaciones móviles en el sector salud.',
                    highlights: [
                        'Desarrollo frontend mobile con Ionic y Angular.',
                        'Implementación de notificaciones de deuda e integración de pagos con Mercado Pago.'
                    ]
                }
            ])
        },
        projects: {
            eyebrow: '03 / Proyectos Seleccionados',
            title: 'Productos propios y casos de estudio',
            subtitle:
                'Plataformas SaaS diseñadas y construidas de punta a punta: producto, arquitectura, desarrollo full stack, pagos y despliegue.',
            tandi: {
                badge: 'Caso de Estudio Principal · SaaS',
                name: 'Tandi',
                tagline: 'De pedidos dispersos por WhatsApp a un flujo de venta digital estructurado.',
                description:
                    'Una plataforma SaaS diseñada para simplificar la venta online de emprendedores y pequeños comercios.',
                visitUrl: 'https://tandi.com.ar/',
                visitLabel: 'Visitar Tandi',
                exploreLabel: 'Explorar el producto',
                contactLabel: 'Contactarme',
                problemTitle: 'El problema',
                problemHeading: 'Vender por chat genera desorden operativo',
                problemText:
                    'Muchos emprendedores, revendedores y comercios gestionan sus ventas entre chats de WhatsApp, publicaciones en Instagram, catálogos manuales, listas de precios y planillas. El problema no es solo vender online: es organizar toda la operación comercial (variantes, señas, encargos, stock y envíos) sin complejidad técnica.',
                solutionTitle: 'La solución',
                solutionHeading: 'Un flujo centralizado desde el catálogo hasta la entrega',
                solutionText:
                    'Tandi centraliza la experiencia de venta en una plataforma que permite a cada comercio organizar su catálogo online, pedidos, cobros, señas, saldos, stock, encargos y envíos—adaptándose a negocios que venden con stock propio, por encargo o en modo híbrido.',
                screenshotsLabel: 'Vistas del Producto (tandi.com.ar)',
                screenshots: [
                    {
                        image: 'assets/img/tandi-1.png',
                        alt: 'Vista principal de Tandi mostrando tienda mobile con stock propio, por encargo e híbrido',
                        title: 'Tienda y Venta Híbrida',
                        meta: 'Stock · Encargo · Cuaderno mayorista'
                    },
                    {
                        image: 'assets/img/tandi-2.png',
                        alt: 'Promociones, historial de clientes y link de seguimiento automático de pedidos en Tandi',
                        title: 'Promociones y Seguimiento',
                        meta: 'Cupones · Packs · Link de estado'
                    },
                    {
                        image: 'assets/img/tandi-3.png',
                        alt: 'Comparativa operativa de Tandi: compras mayoristas, cobro de señas y checkout móvil',
                        title: 'Señas y Compras Mayoristas',
                        meta: 'Señas flexibles · Checkout en celular'
                    }
                ],
                capabilitiesLabel: 'Arquitectura del Producto y Capacidades Verificadas',
                capabilities: /** @type {CapabilityItem[]} */ ([
                    {
                        title: 'Tienda y Link Propio',
                        desc: 'Enlace único para compartir en estados de WhatsApp, biografía de Instagram y grupos de difusión.'
                    },
                    {
                        title: 'Catálogo y Variantes',
                        desc: 'Galerías por talle y color con stock independiente por cada variante.'
                    },
                    {
                        title: 'Stock, Encargo e Híbrido',
                        desc: 'Soporte para entrega inmediata con stock propio, preventas/encargos o combinación de ambos.'
                    },
                    {
                        title: 'Pedidos, Señas y Saldos',
                        desc: 'Recepción ordenada de pedidos, gestión de señas, control de saldos e historial de clientes.'
                    },
                    {
                        title: 'Cuaderno de Compra Mayorista',
                        desc: 'Organización de listas de compra al mayorista para consolidar reposiciones y encargos.'
                    },
                    {
                        title: 'Cobros, Envíos y Promociones',
                        desc: 'Mercado Pago y transferencias, envíos por código postal, rótulos QR/barras, cupones, packs y combos.'
                    }
                ]),
                challengesTitle: 'Desafíos Técnicos y Foco de Arquitectura',
                challenges: [
                    {
                        label: 'Modelado de Variantes y Disponibilidad',
                        detail: 'Representar matrices de talle y color con stock independiente conviviendo con productos por encargo en un mismo catálogo.'
                    },
                    {
                        label: 'Ciclo de Vida Híbrido de Pedidos',
                        detail: 'Coordinar estados entre señas parciales, saldos pendientes, reposición mayorista y despacho.'
                    },
                    {
                        label: 'Integraciones Externas',
                        detail: 'Conexión con Mercado Pago, cotización de envíos por código postal y generación de rótulos con código de barras y QR.'
                    },
                    {
                        label: 'Experiencia Mobile-First',
                        detail: 'Flujo pensado para que el comercio cargue productos, gestione pedidos y emita rótulos desde el celular.'
                    }
                ],
                decisionsTitle: 'Decisiones y Alcance Funcional',
                decisions: [
                    {
                        label: 'Diseño Basado en Operación Real',
                        detail: 'Pensado alrededor de cómo venden hoy emprendedores y revendedores por WhatsApp, evitando fricción innecesaria.'
                    },
                    {
                        label: 'Seguimiento Sin Fricción',
                        detail: 'Link de seguimiento automático para cada cliente, reduciendo consultas repetitivas sin obligar a crear cuenta.'
                    },
                    {
                        label: 'Alcance Completo de Producto',
                        detail: 'Cubre catálogo, variantes, modo híbrido, señas, cuaderno mayorista, cobros, logística y promociones.'
                    }
                ]
            },
            secondary: [
                {
                    name: 'Golero',
                    domain: 'Sports Tech · SaaS',
                    url: 'https://golero.com.ar/',
                    image: 'assets/img/work-golero.jpg',
                    alt: 'Captura de Golero, plataforma de reservas de canchas deportivas',
                    summary:
                        'Plataforma SaaS que digitaliza clubes y complejos deportivos: búsqueda de canchas, disponibilidad en tiempo real, reservas online 24/7 y cobros con Mercado Pago.',
                    problem:
                        'Los clubes dependían de coordinación manual por WhatsApp, generando superposición de turnos y fricción al reservar.',
                    architecture:
                        'Aplicación full stack con Next.js y TypeScript sobre Supabase, SEO orientado a búsqueda de clubes e integración de pagos con Mercado Pago para confirmación inmediata.',
                    stack: ['Next.js', 'TypeScript', 'Supabase', 'Mercado Pago', 'SEO']
                },
                {
                    name: 'Fynta',
                    domain: 'Fintech · Facturación Electrónica SaaS',
                    url: 'https://fynta.app/',
                    image: 'assets/img/work-fynta.jpg',
                    alt: 'Captura de Fynta, SaaS de facturación electrónica para monotributistas',
                    summary:
                        'Plataforma SaaS de facturación electrónica para monotributistas argentinos: emisión de comprobantes con CAE ante ARCA, control de tope de categoría y alertas preventivas.',
                    problem:
                        'Los contribuyentes enfrentan portales complejos y el riesgo de superar el tope de su categoría sin visibilidad preventiva.',
                    architecture:
                        'Monorepo Nx con contratos compartidos y validación con Zod entre API modular en NestJS, persistencia PostgreSQL/Supabase, web en Next.js y app móvil en React Native (Expo) usando patrón Billing Provider.',
                    stack: ['TypeScript', 'NestJS', 'Next.js', 'React Native', 'Expo', 'Nx', 'Zod', 'PostgreSQL', 'Supabase']
                }
            ]
        },
        cases: {
            eyebrow: '04 / Casos Técnicos',
            title: 'Cómo abordo decisiones de ingeniería',
            subtitle:
                'Síntesis de decisiones arquitectónicas y trade-offs aplicados en proyectos reales.',
            items: /** @type {EngineeringCase[]} */ ([
                {
                    kicker: 'Arquitectura · Migración',
                    title: 'Migración incremental de React a Angular con Microfrontends',
                    context: 'Aplicaciones web corporativas en producción en Eldar con evolución continua.',
                    problem: 'Una reescritura completa frenaría el roadmap de negocio y aumentaría el riesgo de regresiones.',
                    solution: 'Convivencia de microfrontends React y Angular bajo límites claros de ruteo y composición.',
                    decision: 'Migrar módulos por dominio de forma incremental en lugar de un reemplazo total.',
                    takeaway: 'Las fronteras incrementales permiten entregar valor continuo mientras se moderniza la base.'
                },
                {
                    kicker: 'Design Systems · Web Components',
                    title: 'Biblioteca de componentes multi-framework con Stencil.js y Nexus',
                    context: 'Múltiples equipos trabajando en microfrontends Angular y React con necesidad de consistencia visual.',
                    problem: 'Duplicar componentes por framework generaba inconsistencias y doble mantenimiento.',
                    solution: 'Web Components agnósticos al framework con Stencil.js, versionados y distribuidos mediante Nexus.',
                    decision: 'Estandarizar la capa UI en Web Components en vez de mantener paquetes paralelos.',
                    takeaway: 'El versionado estricto y las primitivas estándar escalan mejor que los kits acoplados a un framework.'
                },
                {
                    kicker: 'Monorepo · Contratos Tipados',
                    title: 'Contratos compartidos con Zod entre NestJS, Next.js y React Native',
                    context: 'Desarrollo simultáneo de web, mobile y API en Fynta.',
                    problem: 'La desincronización de esquemas entre backend y clientes ralentiza la iteración del producto.',
                    solution: 'Monorepo Nx con tipos TypeScript, esquemas Zod compartidos y cliente HTTP tipado.',
                    decision: 'Validar con una única fuente de verdad en el borde en lugar de duplicar DTOs.',
                    takeaway: 'Los contratos compartidos detectan cambios incompatibles en compilación antes de llegar a producción.'
                }
            ])
        },
        contact: {
            eyebrow: '05 / Contacto',
            title: 'Let\'s build something meaningful.',
            subtitle:
                'Estoy abierto a oportunidades donde pueda aportar construyendo, evolucionando y escalando productos de software.',
            copyEmail: 'Copiar email',
            copied: 'Copiado al portapapeles',
            sendEmail: 'Enviar email',
            links: [
                { label: 'Email', value: 'diegooviedo155@gmail.com', href: 'mailto:diegooviedo155@gmail.com', external: false },
                { label: 'LinkedIn', value: '/in/diego-alejandro-oviedo', href: 'https://www.linkedin.com/in/diego-alejandro-oviedo/', external: true },
                { label: 'GitHub', value: '@diegooviedo155', href: 'https://github.com/diegooviedo155', external: true }
            ]
        },
        footer: {
            rights: 'Diego Alejandro Oviedo. Desarrollado con HTML semántico, JS modular y sin librerías pesadas.'
        }
    }
};
