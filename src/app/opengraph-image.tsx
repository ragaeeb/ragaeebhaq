import { siteHost, siteName, siteTagline } from '@/seo/site';
import { ImageResponse } from 'next/og';

export const size = {
    height: 630,
    width: 1200,
};

export const contentType = 'image/png';

export default async function OpenGraphImage() {
    const accent = '#38bdf8';
    const slate = '#020617';

    return new ImageResponse(
        <div
            style={{
                backgroundColor: slate,
                backgroundImage: `radial-gradient(circle at 20% 20%, ${accent}40, transparent 55%), radial-gradient(circle at 80% 80%, #a855f740, transparent 60%)`,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                fontFamily:
                    'Geist, Geist Sans, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                height: '100%',
                padding: '72px',
                width: '100%',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span
                    style={{
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '9999px',
                        fontSize: 24,
                        letterSpacing: '0.3em',
                        padding: '10px 28px',
                        textTransform: 'uppercase',
                    }}
                >
                    Portfolio
                </span>
                <span style={{ fontSize: 28, letterSpacing: '0.15em', opacity: 0.65 }}>
                    {siteHost}
                </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 'auto' }}>
                <h1 style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05, margin: 0 }}>
                    {siteName}
                </h1>
                <p
                    style={{
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: 32,
                        margin: 0,
                        maxWidth: 780,
                    }}
                >
                    {siteTagline}
                </p>
            </div>

            <div style={{ display: 'flex', gap: 24, marginTop: 48 }}>
                {['Faithful experiences', 'Creative tooling', 'Production systems'].map((label) => (
                    <div
                        key={label}
                        style={{
                            background: 'rgba(15,23,42,0.55)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 9999,
                            fontSize: 24,
                            letterSpacing: '0.2em',
                            padding: '12px 32px',
                            textTransform: 'uppercase',
                        }}
                    >
                        {label}
                    </div>
                ))}
            </div>
        </div>,
        {
            ...size,
        },
    );
}
