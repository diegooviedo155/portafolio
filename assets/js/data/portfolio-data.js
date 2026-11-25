/**
 * @fileoverview Single source of truth for Diego Alejandro Oviedo's portfolio content.
 * Strongly typed via JSDoc typedefs and structured for complete EN / ES localization.
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
 * @property {string[]} core
 * @property {string[]} [supporting]
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
 * @typedef {Object} ScreenshotItem
 * @property {string} image
 * @property {string} alt
 * @property {string} title
 * @property {string} meta
 *
 * @typedef {Object} EngineeringCase
 * @property {string} kicker
 * @property {string} title
 * @property {string} context
 * @property {string} problem
 * @property {string} approach
 * @property {string} decision
 * @property {string} takeaway
 * @property {string} [diagram]
 */

export const PROFILE_META = {
    name: 'Diego Alejandro Oviedo',
    shortName: 'Diego Oviedo',
    email: 'diegooviedo155@gmail.com',
    linkedin: 'https://www.linkedin.com/in/diego-alejandro-oviedo/',
    github: 'https://github.com/diegooviedo155',
    cvPath: './assets/cv/CV-Diego-Oviedo-EN.pdf',
    siteUrl: 'https://portafolio-diego-oviedo.netlify.app/'
};

/** @type {Record<Locale, any>} */
export const PORTFOLIO_COPY = {
    en: {
        meta: {
            title: 'Diego Alejandro Oviedo — Full Stack Developer | Angular, React, Java & Node.js',
            description:
                'Diego Alejandro Oviedo — Full Stack Developer & Frontend Engineer in Buenos Aires, Argentina (Remote). Experienced in Angular, React, Java, Node.js, Microfrontends, Web Components & Mobile. Builder of Tandi, Golero, and Fynta.',
            skipLink: 'Skip to content'
        },
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
            scrollCue: 'Scroll to explore',
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
                'Grouped across seven engineering disciplines—prioritizing the technologies I rely on to ship, modernize, and scale production systems.',
            coreLabel: 'Core',
            domains: /** @type {CapabilityDomain[]} */ ([
                {
                    id: 'frontend',
                    index: '01',
                    primary: true,
                    title: 'Frontend Engineering',
                    summary:
                        'Designing maintainable, accessible, and high-performance web interfaces across Angular and React ecosystems with strict TypeScript.',
                    core: ['Angular', 'React', 'TypeScript', 'Next.js'],
                    supporting: ['JavaScript', 'Redux', 'TanStack Query', 'Tailwind CSS', 'HTML5', 'CSS3', 'Sass']
                },
                {
                    id: 'backend',
                    index: '02',
                    primary: true,
                    title: 'Backend Engineering',
                    summary:
                        'Building modular REST APIs and microservices focused on domain clarity, data integrity, and reliable external service orchestration.',
                    core: ['Java', 'Spring', 'Node.js', 'NestJS'],
                    supporting: ['REST APIs', 'Microservices', 'JPA', 'Hibernate', 'Express', 'Zod']
                },
                {
                    id: 'architecture',
                    index: '03',
                    primary: false,
                    title: 'Architecture',
                    summary:
                        'Enabling incremental migrations, cross-framework design systems, and type-safe monorepos.',
                    core: ['Microfrontends', 'Web Components', 'Stencil.js', 'Nx'],
                    supporting: ['Component Libraries', 'Shared Contracts', 'Modular Architecture']
                },
                {
                    id: 'mobile',
                    index: '04',
                    primary: false,
                    title: 'Mobile Development',
                    summary:
                        'Shipping hybrid and cross-platform mobile apps with native device integrations.',
                    core: ['Ionic', 'Capacitor', 'React Native', 'Expo'],
                    supporting: ['Cordova', 'Native Plugins', 'Android & iOS Store Releases']
                },
                {
                    id: 'databases',
                    index: '05',
                    primary: false,
                    title: 'Databases',
                    summary:
                        'Relational data modeling, domain-driven repositories, and transactional persistence.',
                    core: ['PostgreSQL', 'MySQL', 'Supabase'],
                    supporting: ['JPA / Hibernate', 'Domain Repositories']
                },
                {
                    id: 'devops',
                    index: '06',
                    primary: false,
                    title: 'DevOps & Tooling',
                    summary:
                        'Containerized environments, CI/CD pipelines, package registries, and agile delivery.',
                    core: ['Docker', 'Jenkins', 'Git', 'Nexus'],
                    supporting: ['CI/CD', 'GitHub', 'GitLab', 'Scrum', 'Selenium']
                },
                {
                    id: 'integrations',
                    index: '07',
                    primary: false,
                    title: 'Integrations',
                    summary:
                        'Connecting payment gateways, identity providers, push notifications, and external APIs.',
                    core: ['Mercado Pago', 'Amazon Cognito', 'Firebase Cloud Messaging'],
                    supporting: ['Biometric Auth', 'Electronic Invoicing APIs', 'Third-Party Webhooks']
                }
            ])
        },
        experience: {
            eyebrow: '02 / Professional Experience',
            title: 'Production engineering across payments, entertainment, and mobile',
            subtitle:
                'Over four years building and modernizing production systems, bridging legacy codebases with modern architectures.',
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
                                'Implemented Firebase Cloud Messaging and biometric authentication (fingerprint and face recognition).',
                                'Delivered native Android and iOS integrations, managing staging environments and store releases.'
                            ]
                        },
                        {
                            name: 'Bold',
                            domain: 'Entertainment',
                            highlights: [
                                'Developed hybrid mobile applications using Ionic, Angular, Capacitor, and Cordova.',
                                'Built features for loyalty points and rewards redemption programs.',
                                'Participated in system migrations and implemented Amazon Cognito authentication.'
                            ]
                        },
                        {
                            name: 'Cross-Platform & Modernization',
                            domain: 'Architecture',
                            highlights: [
                                'Initiated an incremental migration from React to Angular using microfrontends without disrupting production.',
                                'Delivered two Minimum Viable Products (MVPs) with Angular and maintained existing React applications.',
                                'Adopted TanStack Query and Tailwind CSS for cleaner state and UI workflows.'
                            ]
                        }
                    ]
                },
                {
                    company: 'Health Management Solutions (HMS)',
                    role: 'Software Developer',
                    period: 'September 2021 – June 2022',
                    summary:
                        'Focused on mobile frontend development for healthcare provider applications.',
                    highlights: [
                        'Developed mobile frontend features using Ionic and Angular.',
                        'Implemented a debt notification module with direct payment access via Mercado Pago.'
                    ]
                }
            ])
        },
        projects: {
            eyebrow: '03 / Selected Projects',
            title: 'Product engineering & case studies',
            subtitle:
                'SaaS products I build end-to-end—each solving a distinct operational problem with tailored product and architectural trade-offs.',
            labels: {
                problem: 'Problem',
                solution: 'Solution',
                processModeling: 'Product & Process Modeling',
                architecture: 'Architecture & Execution',
                visitLive: 'Visit live site'
            },
            tandi: {
                badge: 'Flagship Case Study · SaaS',
                name: 'Tandi',
                tagline: 'From scattered WhatsApp orders to a structured digital sales workflow.',
                description:
                    'A SaaS platform designed to simplify online selling for entrepreneurs, resellers, and small businesses.',
                visitUrl: 'https://tandi.com.ar/',
                visitLabel: 'Visit Tandi',
                contactLabel: 'Contact me',
                problemTitle: 'The Problem',
                problemHeading: 'Selling through chat creates operational chaos',
                problemText:
                    'Entrepreneurs, resellers, and small shops commonly manage sales across WhatsApp chats, Instagram posts, manual catalogs, price lists, and spreadsheets. The core problem is not merely listing products online—it is organizing the entire commercial operation (variants, deposits, pre-orders, stock, and delivery tracking) without technical overhead.',
                solutionTitle: 'The Solution',
                solutionHeading: 'One structured workflow from catalog to dispatch',
                solutionText:
                    'Tandi centralizes the selling experience into a single platform where each store manages its online catalog, orders, deposits, balances, inventory, pre-orders, and shipping—supporting businesses that sell from own stock, on demand (por encargo), or in hybrid mode.',
                screenshotsLabel: 'Product Walkthrough (tandi.com.ar)',
                screenshots: /** @type {ScreenshotItem[]} */ ([
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
                ]),
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
                decisionsTitle: 'Decisions & Product Learnings',
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
                        label: 'Key Learning',
                        detail: 'For small merchants, reducing operational steps (deposits, wholesale lists, dispatch labels) matters more than adding complex storefront customization.'
                    }
                ]
            },
            golero: {
                badge: 'Product & Operations · SaaS',
                name: 'Golero',
                domain: 'Sports Tech · Court Booking Platform',
                url: 'https://golero.com.ar/',
                image: 'assets/img/work-golero.jpg',
                alt: 'Golero sports club and court reservation platform screenshot',
                summary:
                    'SaaS platform digitizing sports clubs and complexes—enabling 24/7 court discovery, real-time availability, online reservations, and Mercado Pago payments.',
                problem:
                    'Clubs relied on manual WhatsApp coordination, leading to double bookings, unverified deposits, and friction for players looking for open slots.',
                processModeling:
                    'Modeled multi-sport club schedules (football, padel, tennis, basketball, pickleball), real-time slot locking, and instant booking confirmation tied to Mercado Pago checkout.',
                architecture:
                    'Full-stack Next.js and TypeScript platform backed by Supabase, SEO-oriented venue discovery across CABA and GBA, and production deployment.',
                stack: ['Next.js', 'TypeScript', 'Supabase', 'Mercado Pago', 'SEO']
            },
            fynta: {
                badge: 'Architecture & Systems · Fintech SaaS',
                name: 'Fynta',
                domain: 'Electronic Invoicing · Monorepo Platform',
                url: 'https://fynta.app/',
                image: 'assets/img/work-fynta.jpg',
                alt: 'Fynta electronic invoicing SaaS for Argentine monotributistas screenshot',
                summary:
                    'Electronic invoicing SaaS for Argentine monotributistas—handling CAE voucher issuance with ARCA (AFIP), category cap tracking, and preventive alerts.',
                problem:
                    'Independent workers face complex tax portals and risk exceeding their tax bracket limits without timely visibility.',
                architectureFlow: [
                    { layer: 'Monorepo', detail: 'Nx Workspace' },
                    { layer: 'Contracts', detail: 'Shared Zod Schemas' },
                    { layer: 'Backend API', detail: 'NestJS · Billing Provider Pattern' },
                    { layer: 'Clients', detail: 'Next.js (App Router) + React Native (Expo)' },
                    { layer: 'Persistence', detail: 'PostgreSQL / Supabase (Domain Repos)' }
                ],
                architecture:
                    'Built an Nx monorepo with shared Zod contracts and a typed HTTP client, a modular NestJS API using the Billing Provider pattern for electronic invoicing providers, and domain-driven repositories in PostgreSQL/Supabase.',
                stack: ['TypeScript', 'NestJS', 'Next.js', 'React Native', 'Expo', 'Nx', 'Zod', 'PostgreSQL', 'Supabase']
            }
        },
        cases: {
            eyebrow: '04 / Engineering Stories',
            title: 'How I approach technical decisions',
            subtitle:
                'Editorial notes on architectural trade-offs and system modernization from production work.',
            labels: {
                context: 'Context',
                problem: 'Problem',
                approach: 'Approach',
                decision: 'Technical Decision',
                takeaway: 'Takeaway'
            },
            items: /** @type {EngineeringCase[]} */ ([
                {
                    kicker: 'Architecture · Migration',
                    title: 'Incremental React-to-Angular migration via Microfrontends',
                    context: 'Production enterprise web applications at Eldar evolving over multi-year release cycles.',
                    problem: 'A full rewrite would freeze product delivery and introduce high regression risk.',
                    approach: 'Co-hosted React and Angular microfrontends behind shared routing and composition boundaries.',
                    decision: 'Migrated domain slices incrementally while keeping production systems continuously live.',
                    takeaway: 'Incremental boundaries let teams ship product features while retiring legacy modules safely.',
                    diagram: 'Host Shell ──▶ [ MFE: Angular ] + [ MFE: React ] ──▶ Shared Routing & Auth'
                },
                {
                    kicker: 'Design Systems · Web Components',
                    title: 'Cross-framework UI library with Stencil.js & Nexus',
                    context: 'Multiple teams building Angular and React microfrontends needing visual and behavioral consistency.',
                    problem: 'Duplicating components per framework caused visual drift and double maintenance.',
                    approach: 'Encapsulated UI primitives as framework-agnostic Web Components compiled with Stencil.js.',
                    decision: 'Standardized on Web Components published and versioned through Nexus instead of parallel UI kits.',
                    takeaway: 'Strict versioning and standard browser primitives scale better than framework-coupled libraries.',
                    diagram: 'Stencil.js Source ──▶ Web Components ──▶ Nexus Registry ──▶ Angular & React Apps'
                },
                {
                    kicker: 'Monorepo · Type Safety',
                    title: 'Shared Zod contracts across NestJS, Next.js, and React Native',
                    context: 'Building Fynta across web, mobile, and backend API simultaneously.',
                    problem: 'API payload drift between backend and clients slows down iteration and introduces runtime bugs.',
                    approach: 'Structured an Nx monorepo with shared TypeScript types, Zod schemas, and a typed HTTP client.',
                    decision: 'Enforced single-source validation schemas at the boundary instead of duplicating DTOs.',
                    takeaway: 'Shared contracts catch breaking changes at compile time before they reach production.',
                    diagram: 'packages/contracts (Zod) ──┬──▶ NestJS API\n                           ├──▶ Next.js Web\n                           └──▶ React Native (Expo)'
                }
            ])
        },
        contact: {
            eyebrow: '05 / Contact',
            title: "Let's build something meaningful.",
            subtitle:
                "I'm open to opportunities where I can contribute to building, evolving, and scaling software products.",
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
        meta: {
            title: 'Diego Alejandro Oviedo — Full Stack Developer | Angular, React, Java & Node.js',
            description:
                'Diego Alejandro Oviedo — Full Stack Developer y Frontend Engineer en Buenos Aires, Argentina (Remoto). Experiencia en Angular, React, Java, Node.js, Microfrontends, Web Components y Mobile. Creador de Tandi, Golero y Fynta.',
            skipLink: 'Ir al contenido principal'
        },
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
            scrollCue: 'Deslizá para explorar',
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
                'Organizado en siete disciplinas de ingeniería, priorizando las tecnologías con las que construyo, modernizo y escalo sistemas en producción.',
            coreLabel: 'Principal',
            domains: /** @type {CapabilityDomain[]} */ ([
                {
                    id: 'frontend',
                    index: '01',
                    primary: true,
                    title: 'Frontend Engineering',
                    summary:
                        'Diseño y desarrollo de interfaces web mantenibles, accesibles y de alto rendimiento en Angular y React con TypeScript estricto.',
                    core: ['Angular', 'React', 'TypeScript', 'Next.js'],
                    supporting: ['JavaScript', 'Redux', 'TanStack Query', 'Tailwind CSS', 'HTML5', 'CSS3', 'Sass']
                },
                {
                    id: 'backend',
                    index: '02',
                    primary: true,
                    title: 'Backend Engineering',
                    summary:
                        'Desarrollo de APIs REST modulares y microservicios enfocados en claridad de dominio, persistencia e integración de servicios.',
                    core: ['Java', 'Spring', 'Node.js', 'NestJS'],
                    supporting: ['APIs REST', 'Microservicios', 'JPA', 'Hibernate', 'Express', 'Zod']
                },
                {
                    id: 'architecture',
                    index: '03',
                    primary: false,
                    title: 'Architecture',
                    summary:
                        'Migraciones incrementales, bibliotecas de componentes multi-framework y monorepos tipados.',
                    core: ['Microfrontends', 'Web Components', 'Stencil.js', 'Nx'],
                    supporting: ['Design Systems', 'Contratos Compartidos', 'Arquitectura Modular']
                },
                {
                    id: 'mobile',
                    index: '04',
                    primary: false,
                    title: 'Mobile Development',
                    summary:
                        'Aplicaciones híbridas y multiplataforma con integraciones nativas en Android e iOS.',
                    core: ['Ionic', 'Capacitor', 'React Native', 'Expo'],
                    supporting: ['Cordova', 'Plugins Nativos', 'Despliegue en Tiendas']
                },
                {
                    id: 'databases',
                    index: '05',
                    primary: false,
                    title: 'Databases',
                    summary:
                        'Modelado relacional, repositorios por dominio y persistencia transaccional.',
                    core: ['PostgreSQL', 'MySQL', 'Supabase'],
                    supporting: ['JPA / Hibernate', 'Repositorios de Dominio']
                },
                {
                    id: 'devops',
                    index: '06',
                    primary: false,
                    title: 'DevOps & Tooling',
                    summary:
                        'Entornos containerizados, pipelines de entrega, registro de artefactos y metodologías ágiles.',
                    core: ['Docker', 'Jenkins', 'Git', 'Nexus'],
                    supporting: ['CI/CD', 'GitHub', 'GitLab', 'Scrum', 'Selenium']
                },
                {
                    id: 'integrations',
                    index: '07',
                    primary: false,
                    title: 'Integrations',
                    summary:
                        'Pasarelas de pago, proveedores de identidad, notificaciones push y APIs externas.',
                    core: ['Mercado Pago', 'Amazon Cognito', 'Firebase Cloud Messaging'],
                    supporting: ['Auth Biométrica', 'Facturación Electrónica', 'Webhooks']
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
                                'Implementación de Firebase Cloud Messaging y autenticación biométrica (huella y reconocimiento facial).',
                                'Integraciones nativas Android e iOS, despliegues a tiendas y gestión de ambientes de prueba.'
                            ]
                        },
                        {
                            name: 'Bold',
                            domain: 'Entretenimiento',
                            highlights: [
                                'Desarrollo de aplicaciones híbridas con Ionic, Angular, Capacitor y Cordova.',
                                'Implementación de programas de puntos y canje de beneficios.',
                                'Participación en migraciones e integración de autenticación con Amazon Cognito.'
                            ]
                        },
                        {
                            name: 'Otras implementaciones',
                            domain: 'Arquitectura',
                            highlights: [
                                'Migración incremental de React a Angular mediante microfrontends manteniendo continuidad en producción.',
                                'Entrega de dos productos mínimos viables (MVP) con Angular y mantenimiento de aplicaciones React.',
                                'Adopción de TanStack Query y Tailwind CSS.'
                            ]
                        }
                    ]
                },
                {
                    company: 'Health Management Solutions (HMS)',
                    role: 'Software Developer',
                    period: 'Septiembre 2021 – Junio 2022',
                    summary:
                        'Desarrollo frontend orientado a aplicaciones móviles en el sector salud.',
                    highlights: [
                        'Desarrollo frontend mobile con Ionic y Angular.',
                        'Implementación de un módulo de notificaciones de deuda con acceso directo al pago vía Mercado Pago.'
                    ]
                }
            ])
        },
        projects: {
            eyebrow: '03 / Proyectos Seleccionados',
            title: 'Productos propios y casos de estudio',
            subtitle:
                'Plataformas SaaS diseñadas y construidas de punta a punta—cada una resolviendo un problema operativo distinto con decisiones de producto y arquitectura propias.',
            labels: {
                problem: 'Problema',
                solution: 'Solución',
                processModeling: 'Producto y Modelado Operativo',
                architecture: 'Arquitectura y Ejecución',
                visitLive: 'Visitar sitio'
            },
            tandi: {
                badge: 'Caso de Estudio Principal · SaaS',
                name: 'Tandi',
                tagline: 'De pedidos dispersos por WhatsApp a un flujo de venta digital estructurado.',
                description:
                    'Una plataforma SaaS diseñada para simplificar la venta online de emprendedores, revendedores y pequeños comercios.',
                visitUrl: 'https://tandi.com.ar/',
                visitLabel: 'Visitar Tandi',
                contactLabel: 'Contactarme',
                problemTitle: 'El problema',
                problemHeading: 'Vender por chat genera desorden operativo',
                problemText:
                    'Muchos emprendedores, revendedores y comercios gestionan sus ventas entre chats de WhatsApp, publicaciones en Instagram, catálogos manuales, listas de precios y planillas. El problema no es solo vender online: es organizar toda la operación comercial (variantes, señas, encargos, stock y envíos) sin complejidad técnica.',
                solutionTitle: 'La solución',
                solutionHeading: 'Un flujo centralizado desde el catálogo hasta la entrega',
                solutionText:
                    'Tandi centraliza la experiencia de venta en una plataforma que permite a cada comercio organizar su catálogo online, pedidos, cobros, señas, saldos, stock, encargos y envíos—adaptándose a negocios que venden con stock propio, por encargo o en modo híbrido.',
                screenshotsLabel: 'Recorrido Visual del Producto (tandi.com.ar)',
                screenshots: /** @type {ScreenshotItem[]} */ ([
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
                ]),
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
                decisionsTitle: 'Decisiones y Aprendizajes de Producto',
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
                        label: 'Aprendizaje Clave',
                        detail: 'Para comercios chicos, reducir pasos operativos (señas, lista mayorista, rótulos) aporta mucho más valor que sumar personalización visual compleja.'
                    }
                ]
            },
            golero: {
                badge: 'Producto y Operaciones · SaaS',
                name: 'Golero',
                domain: 'Sports Tech · Reservas de Canchas',
                url: 'https://golero.com.ar/',
                image: 'assets/img/work-golero.jpg',
                alt: 'Captura de Golero, plataforma de reservas de canchas deportivas',
                summary:
                    'Plataforma SaaS que digitaliza clubes y complejos deportivos: búsqueda de canchas, disponibilidad en tiempo real, reservas online 24/7 y cobros con Mercado Pago.',
                problem:
                    'Los clubes dependían de coordinación manual por WhatsApp, generando superposición de turnos, señas sin validar y fricción para los jugadores.',
                processModeling:
                    'Modelado de agendas multideporte (fútbol, pádel, tenis, básquet, pickleball), disponibilidad en tiempo real y confirmación instantánea asociada al checkout de Mercado Pago.',
                architecture:
                    'Aplicación full stack con Next.js y TypeScript sobre Supabase, SEO orientado a búsqueda de clubes en CABA y GBA, y despliegue en producción.',
                stack: ['Next.js', 'TypeScript', 'Supabase', 'Mercado Pago', 'SEO']
            },
            fynta: {
                badge: 'Arquitectura y Sistemas · Fintech SaaS',
                name: 'Fynta',
                domain: 'Facturación Electrónica · Plataforma Monorepo',
                url: 'https://fynta.app/',
                image: 'assets/img/work-fynta.jpg',
                alt: 'Captura de Fynta, SaaS de facturación electrónica para monotributistas',
                summary:
                    'Plataforma SaaS de facturación electrónica para monotributistas argentinos: emisión de comprobantes con CAE ante ARCA, control de tope de categoría y alertas preventivas.',
                problem:
                    'Los monotributistas enfrentan portales fiscales complejos y el riesgo de superar el tope de su categoría sin visibilidad preventiva.',
                architectureFlow: [
                    { layer: 'Monorepo', detail: 'Nx Workspace' },
                    { layer: 'Contratos', detail: 'Esquemas Zod compartidos' },
                    { layer: 'Backend API', detail: 'NestJS · Patrón Billing Provider' },
                    { layer: 'Clientes', detail: 'Next.js (App Router) + React Native (Expo)' },
                    { layer: 'Persistencia', detail: 'PostgreSQL / Supabase (Repositorios de dominio)' }
                ],
                architecture:
                    'Monorepo Nx con contratos Zod compartidos y cliente HTTP tipado, API modular en NestJS usando el patrón Billing Provider para proveedores de facturación, y repositorios por dominio en PostgreSQL/Supabase.',
                stack: ['TypeScript', 'NestJS', 'Next.js', 'React Native', 'Expo', 'Nx', 'Zod', 'PostgreSQL', 'Supabase']
            }
        },
        cases: {
            eyebrow: '04 / Historias Técnicas',
            title: 'Cómo abordo decisiones de ingeniería',
            subtitle:
                'Notas editoriales sobre trade-offs arquitectónicos y modernización de sistemas en producción.',
            labels: {
                context: 'Contexto',
                problem: 'Problema',
                approach: 'Enfoque',
                decision: 'Decisión técnica',
                takeaway: 'Aprendizaje'
            },
            items: /** @type {EngineeringCase[]} */ ([
                {
                    kicker: 'Arquitectura · Migración',
                    title: 'Migración incremental de React a Angular con Microfrontends',
                    context: 'Aplicaciones web corporativas en producción en Eldar con ciclos continuos de entrega.',
                    problem: 'Una reescritura completa frenaría el roadmap de negocio y aumentaría el riesgo de regresiones.',
                    approach: 'Convivencia de microfrontends React y Angular bajo límites claros de ruteo y composición.',
                    decision: 'Migrar módulos por dominio de forma incremental manteniendo los sistemas en producción sin cortes.',
                    takeaway: 'Las fronteras incrementales permiten entregar valor continuo mientras se moderniza la base.',
                    diagram: 'Host Shell ──▶ [ MFE: Angular ] + [ MFE: React ] ──▶ Ruteo y Auth compartidos'
                },
                {
                    kicker: 'Design Systems · Web Components',
                    title: 'Biblioteca de componentes multi-framework con Stencil.js y Nexus',
                    context: 'Múltiples equipos trabajando en microfrontends Angular y React con necesidad de consistencia visual.',
                    problem: 'Duplicar componentes por framework generaba inconsistencias y doble mantenimiento.',
                    approach: 'Encapsular primitivas UI como Web Components agnósticos compilados con Stencil.js.',
                    decision: 'Estandarizar la capa UI en Web Components publicados y versionados en Nexus en lugar de kits paralelos.',
                    takeaway: 'El versionado estricto y las primitivas estándar escalan mejor que las librerías acopladas a un framework.',
                    diagram: 'Código Stencil.js ──▶ Web Components ──▶ Registro Nexus ──▶ Apps Angular y React'
                },
                {
                    kicker: 'Monorepo · Contratos Tipados',
                    title: 'Contratos compartidos con Zod entre NestJS, Next.js y React Native',
                    context: 'Desarrollo simultáneo de web, mobile y API en Fynta.',
                    problem: 'La desincronización de esquemas entre backend y clientes ralentiza la iteración y genera errores en runtime.',
                    approach: 'Monorepo Nx con tipos TypeScript, esquemas Zod compartidos y cliente HTTP tipado.',
                    decision: 'Validar con una única fuente de verdad en el borde en lugar de duplicar DTOs.',
                    takeaway: 'Los contratos compartidos detectan cambios incompatibles en compilación antes de llegar a producción.',
                    diagram: 'packages/contracts (Zod) ──┬──▶ API NestJS\n                           ├──▶ Web Next.js\n                           └──▶ Mobile React Native (Expo)'
                }
            ])
        },
        contact: {
            eyebrow: '05 / Contacto',
            title: "Let's build something meaningful.",
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
