import type { Metadata, Viewport } from 'next';

export const siteOrigin = 'https://ragaeeb.com';
export const siteHost = new URL(siteOrigin).host;
export const siteName = 'Ragaeeb Haq';
export const siteTitle = 'Ragaeeb Haq — Staff Engineer & Community Builder';
export const siteDescription =
    'Staff engineer crafting prayer experiences, creative tooling, and joyful web products for global communities.';
export const siteTagline =
    'Staff engineer shipping faithful digital experiences, creative tooling, and production-grade systems.';
export const siteKeywords = [
    'Ragaeeb Haq',
    'Staff Engineer',
    'Next.js',
    'TypeScript',
    'Islamic software',
    'Creative tooling',
    'Web performance',
];
export const siteAuthor = { name: 'Ragaeeb Haq', url: 'https://github.com/ragaeeb' };
export const siteTwitterHandle = '@ragaeeb';
export const openGraphImagePath = '/opengraph-image';
export const themeColor = '#0f172a';

export const siteMetadata: Metadata = {
    alternates: {
        canonical: siteOrigin,
    },
    authors: [siteAuthor],
    description: siteDescription,
    keywords: siteKeywords,
    metadataBase: new URL(siteOrigin),
    openGraph: {
        description: siteDescription,
        images: [
            {
                alt: siteTitle,
                height: 630,
                url: openGraphImagePath,
                width: 1200,
            },
        ],
        locale: 'en_US',
        firstName: 'Ragaeeb',
        lastName: 'Haq',
        username: 'ragaeeb',
        siteName,
        title: siteTitle,
        type: 'profile',
        url: siteOrigin,
    },
    robots: {
        follow: true,
        googleBot: {
            follow: true,
            index: true,
        },
        index: true,
    },
    title: siteTitle,
    twitter: {
        card: 'summary_large_image',
        creator: siteTwitterHandle,
        description: siteDescription,
        images: [openGraphImagePath],
        title: siteTitle,
    },
};

export const siteViewport: Viewport = {
    colorScheme: 'dark light',
    themeColor,
};
