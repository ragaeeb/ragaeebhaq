export interface Project {
    demoUrl?: null | string;
    description: string;
    highlights: string[];
    icon: string;
    lastActivity: string;
    name: string;
    repoUrl: string;
    slug: string;
    tech: string[];
}

export const projects: Project[] = [
    {
        demoUrl: 'https://keystorm.vercel.app',
        description:
            'An AI-guided touch typing tutor that adapts lessons to your interests while gradually building muscle memory across ten mastery levels.',
        highlights: [
            'Generates personalized practice scripts with caching and background prefetching for smooth lesson flow.',
            'Includes interactive tutorials for finger placement, shift usage, punctuation, and number rows to accelerate skill acquisition.',
        ],
        icon: '⌨️',
        lastActivity: '2025-11-10T05:57:35Z',
        name: 'KeyStorm',
        repoUrl: 'https://github.com/ragaeeb/keystorm',
        slug: 'keystorm',
        tech: ['Next.js 16', 'React 19', 'Bun', 'AI-assisted content'],
    },
    {
        demoUrl: 'https://salaten.vercel.app',
        description:
            'A beautifully visualized Islamic prayer timetable that merges astronomy, Hijri calendaring, and responsive layouts for every device.',
        highlights: [
            'Supports multiple global calculation methods with customizable Fajr and Isha angles for precise timings.',
            'Offers immersive card, parallax, and timetable views with live countdowns and animated sky transitions.',
        ],
        icon: '🕋',
        lastActivity: '2025-11-08T07:55:30Z',
        name: 'Salat10 Next',
        repoUrl: 'https://github.com/ragaeeb/salat10-next',
        slug: 'salat10-next',
        tech: ['Next.js 16', 'Tailwind CSS', 'Adhan.js', 'Code coverage via Codecov'],
    },
    {
        demoUrl: 'https://bluckajean.vercel.app',
        description:
            'A powerful visual JSON array editor with intelligent type inference, automatic error correction, and a polished collaborative interface.',
        highlights: [
            'Balances performance and developer experience with Bun, React 19, and comprehensive CI tooling.',
            'Delivers instant feedback with advanced linting, deploy previews, and Codecov-backed test suites.',
        ],
        icon: '🧮',
        lastActivity: '2025-11-04T23:48:03Z',
        name: 'bluckajean',
        repoUrl: 'https://github.com/ragaeeb/bluckajean',
        slug: 'bluckajean',
        tech: ['Next.js 16', 'TypeScript', 'Bun', 'Codecov'],
    },
    {
        demoUrl: 'https://dar-as-sahaba.com',
        description:
            'An end-to-end masjid website template with optimized Gatsby builds, dynamic prayer times, and privacy-first community tooling.',
        highlights: [
            'Preact-powered single page layout with reveal animations, lazy loading, and responsive SCSS styling.',
            'Automates deployments, testing, and Markdown link checks to keep community sites production ready.',
        ],
        icon: '🕌',
        lastActivity: '2025-10-25T02:58:44Z',
        name: 'das-js',
        repoUrl: 'https://github.com/ragaeeb/das-js',
        slug: 'das-js',
        tech: ['Gatsby', 'Preact', 'Bootstrap 4', 'Cypress'],
    },
    {
        demoUrl: 'https://libaby.vercel.app',
        description:
            'A local-first Islamic research library that unifies Shamela and Turath collections with lightning-fast search and offline-friendly storage.',
        highlights: [
            'Implements Meilisearch-backed fuzzy and diacritic-aware search across every downloaded text.',
            'Pairs responsive UI with RTL support, collapsible navigation, and structured metadata management.',
        ],
        icon: '📚',
        lastActivity: '2025-10-25T00:25:03Z',
        name: 'Libaby',
        repoUrl: 'https://github.com/ragaeeb/libaby',
        slug: 'libaby',
        tech: ['Next.js 16', 'Meilisearch', 'Tailwind CSS', 'Bun'],
    },
    {
        demoUrl: 'https://shamela.vercel.app',
        description:
            'A universal TypeScript SDK for working with the Maktabah Shamela v4 APIs directly from Node.js, browsers, or Next.js applications.',
        highlights: [
            'Downloads master databases and book content with ergonomic helper functions and resilient streaming.',
            'Ships TypeScript definitions, API examples, and automated tests to keep integrations reliable.',
        ],
        icon: '📖',
        lastActivity: '2025-10-24T02:41:02Z',
        name: 'shamela',
        repoUrl: 'https://github.com/ragaeeb/shamela',
        slug: 'shamela',
        tech: ['TypeScript', 'Node.js', 'Browser-ready builds', 'CI automation'],
    },
    {
        demoUrl: 'https://al-iyaal.vercel.app',
        description:
            'An AI-assisted video editor that flags concerning dialogue and streamlines clip extraction for family-friendly content review.',
        highlights: [
            'Ingests subtitles, surfaces Gemini-powered content analysis, and color-codes priorities for faster review.',
            'Provides a responsive timeline with precise trimming, keyboard shortcuts, and multi-segment exports.',
        ],
        icon: '🎬',
        lastActivity: '2025-10-20T22:24:00Z',
        name: 'al-ʿIyāl',
        repoUrl: 'https://github.com/ragaeeb/al-iyaal',
        slug: 'al-iyaal',
        tech: ['Next.js 16', 'Gemini AI', 'Bun', 'TypeScript'],
    },
    {
        demoUrl: null,
        description:
            'A polished HeroUI + Next.js starter that demonstrates themeable components, motion primitives, and modern DX defaults.',
        highlights: [
            'Preconfigures Tailwind variants, Framer Motion, and next-themes for rapid product scaffolding.',
            'Ships with comprehensive instructions for generating production-ready apps via create-next-app.',
        ],
        icon: '🧩',
        lastActivity: '2025-10-19T01:16:09Z',
        name: 'Quizzie Template',
        repoUrl: 'https://github.com/ragaeeb/quizzie',
        slug: 'quizzie',
        tech: ['Next.js', 'HeroUI', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        demoUrl: null,
        description:
            'A cozy React Three Fiber adventure that follows a duck family through painterly neighborhoods and stealthy missions.',
        highlights: [
            'Implements smooth eight-directional movement with lerped camera tracking and handcrafted maps.',
            'Uses mission-specific HUDs and win conditions to keep gameplay focused on exploration and rescue.',
        ],
        icon: '🦆',
        lastActivity: '2025-10-17T19:54:26Z',
        name: 'Hashi',
        repoUrl: 'https://github.com/ragaeeb/hashi',
        slug: 'hashi',
        tech: ['Next.js', 'React Three Fiber', 'Tailwind CSS', 'Game design'],
    },
    {
        demoUrl: 'https://bridgecanada.vercel.app',
        description:
            'A professional services site that coordinates international delegations visiting Canada with end-to-end hospitality and logistics.',
        highlights: [
            'Details premium concierge services from visa assistance to executive transportation and curated itineraries.',
            'Built with modern animations, Radix primitives, and Bun-powered tooling for consistent deployments.',
        ],
        icon: '🌉',
        lastActivity: '2025-10-13T23:00:13Z',
        name: 'Bridge Canada',
        repoUrl: 'https://github.com/ragaeeb/bridgecanada',
        slug: 'bridgecanada',
        tech: ['Next.js', 'Tailwind CSS', 'Radix UI', 'Bun'],
    },
];
