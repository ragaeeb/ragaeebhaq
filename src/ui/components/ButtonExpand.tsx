import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import type { ComponentType } from 'react';

export interface SocialLink {
    delay: number;
    href: string;
    icon: ComponentType<{ className?: string }>;
    position: SocialPosition;
}

type SocialPosition = 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' | 'top' | 'top-left' | 'top-right';

const ButtonExpand = ({ links }: { links: SocialLink[] }) => {
    return (
        <div className="relative flex items-center justify-center">
            <input className="peer hidden" id="toggle" type="checkbox" />
            <label
                className="group relative z-10 flex size-[3.2rem] cursor-pointer items-center justify-center rounded-full border bg-black overflow-hidden duration-500 peer-checked:rotate-45 peer-checked:bg-red-500"
                htmlFor="toggle"
            >
                <IconPlus className="text-white relative z-10" />
                <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
            </label>

            {links?.map((link, index) => {
                const { delay, href, icon: Icon, position } = link;
                let positionClass = '';

                // Map positions to transform classes
                switch (position) {
                    case 'bottom':
                        positionClass = 'peer-checked:translate-y-16';
                        break;
                    case 'bottom-left':
                        positionClass = 'peer-checked:-translate-x-16 peer-checked:translate-y-16';
                        break;
                    case 'bottom-right':
                        positionClass = 'peer-checked:translate-x-16 peer-checked:translate-y-16';
                        break;
                    case 'left':
                        positionClass = 'peer-checked:-translate-x-16';
                        break;
                    case 'right':
                        positionClass = 'peer-checked:translate-x-16';
                        break;
                    case 'top':
                        positionClass = 'peer-checked:-translate-y-16';
                        break;
                    case 'top-left':
                        positionClass = 'peer-checked:-translate-x-16 peer-checked:-translate-y-16';
                        break;
                    case 'top-right':
                        positionClass = 'peer-checked:translate-x-16 peer-checked:-translate-y-16';
                        break;
                    default:
                        positionClass = '';
                }

                return (
                    <Link
                        className={`absolute flex size-12 cursor-pointer items-center justify-center rounded-full border 
                        bg-[#000000a2] duration-500 hover:scale-110 hover:bg-[#0000] opacity-0
                        peer-checked:opacity-100 ${positionClass} peer-checked:delay-[${delay}ms]`}
                        href={href}
                        key={index}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Icon className="text-white" />
                    </Link>
                );
            })}
        </div>
    );
};

export default ButtonExpand;
