import { siteMetadata, siteViewport } from '@/seo/site';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
    subsets: ['latin'],
    variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono',
});

export { siteMetadata as metadata, siteViewport as viewport };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
