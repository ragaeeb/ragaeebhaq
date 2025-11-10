'use client';

import dynamic from 'next/dynamic';

const InteractiveBadge = dynamic(() => import('./Badge'), {
    loading: () => (
        <div className="flex h-full w-full items-center justify-center rounded-[2.5rem] border border-white/10 bg-black/40">
            <div className="size-12 animate-spin rounded-full border-2 border-white/20 border-t-white/70" />
            <span className="sr-only">Loading interactive badge</span>
        </div>
    ),
    ssr: false,
});

const BadgeClient = ({ className }: { className?: string }) => {
    const combinedClassName = className ? `h-full w-full ${className}` : 'h-full w-full';

    return (
        <div className={combinedClassName}>
            <InteractiveBadge />
        </div>
    );
};

export default BadgeClient;
