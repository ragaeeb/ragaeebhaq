'use client';

import { IconBrandAdobe, IconBrandGithub, IconBrandLinkedin, IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { type ReactNode, useId, useState } from 'react';

export type SocialIconId = 'agency' | 'github' | 'linkedin';

export interface SocialLink {
    delay: number;
    href: string;
    icon: SocialIconId;
    label: string;
    position: SocialPosition;
}

type SocialPosition =
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right'
    | 'top'
    | 'top-left'
    | 'top-right';

const iconLookup: Record<SocialIconId, (props: { className?: string }) => ReactNode> = {
    agency: (props) => <IconBrandAdobe {...props} />,
    github: (props) => <IconBrandGithub {...props} />,
    linkedin: (props) => <IconBrandLinkedin {...props} />,
};

const ButtonExpand = ({ links }: { links: SocialLink[] }) => {
    const [open, setOpen] = useState(false);
    const id = useId();

    return (
        <div className="relative flex items-center justify-center">
            <button
                aria-controls={`${id}-links`}
                aria-expanded={open}
                aria-label={open ? 'Collapse social links' : 'Expand social links'}
                className="group relative z-10 flex size-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black/80 text-white transition duration-500 hover:border-white/40 hover:bg-black data-[open=true]:rotate-45 data-[open=true]:bg-red-500"
                data-open={open}
                onClick={() => setOpen((previous) => !previous)}
                type="button"
            >
                <IconPlus className="relative z-10 size-5" />
                <span aria-hidden className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-sky-400/70 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                </span>
            </button>

            <ul className="contents" id={`${id}-links`}>
                {links.map((link) => {
                    const { delay, href, icon, label, position } = link;
                    let positionClass = '';

                    switch (position) {
                        case 'bottom':
                            positionClass = 'data-[open=true]:translate-y-16';
                            break;
                        case 'bottom-left':
                            positionClass =
                                'data-[open=true]:-translate-x-16 data-[open=true]:translate-y-16';
                            break;
                        case 'bottom-right':
                            positionClass =
                                'data-[open=true]:translate-x-16 data-[open=true]:translate-y-16';
                            break;
                        case 'left':
                            positionClass = 'data-[open=true]:-translate-x-16';
                            break;
                        case 'right':
                            positionClass = 'data-[open=true]:translate-x-16';
                            break;
                        case 'top':
                            positionClass = 'data-[open=true]:-translate-y-16';
                            break;
                        case 'top-left':
                            positionClass =
                                'data-[open=true]:-translate-x-16 data-[open=true]:-translate-y-16';
                            break;
                        case 'top-right':
                            positionClass =
                                'data-[open=true]:translate-x-16 data-[open=true]:-translate-y-16';
                            break;
                        default:
                            positionClass = '';
                    }

                    return (
                        <li key={href}>
                            <Link
                                aria-label={label}
                                className={`absolute flex size-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-0 backdrop-blur-sm transition duration-500 hover:scale-110 hover:border-white/40 hover:bg-black/80 data-[open=true]:opacity-100 ${positionClass}`}
                                data-open={open}
                                href={href}
                                rel="noopener noreferrer"
                                style={{ transitionDelay: open ? `${delay}ms` : '0ms' }}
                                target="_blank"
                            >
                                {iconLookup[icon]({ className: 'size-5' })}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ButtonExpand;
