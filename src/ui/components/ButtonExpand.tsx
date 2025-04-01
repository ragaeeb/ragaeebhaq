import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { ComponentType, FC } from 'react';

export interface SocialMenuItemProps {
    delay: number;
    href: string;
    icon: ComponentType<{ className?: string }>;
    position: SocialPosition;
}

export type SocialPosition =
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right'
    | 'top'
    | 'top-left'
    | 'top-right';

const SocialMenuItem: FC<SocialMenuItemProps> = ({ delay, href, icon: Icon, position }) => {
    const positionClasses = {
        bottom: 'translate-y-16',
        'bottom-left': '-translate-x-16 translate-y-16',
        'bottom-right': 'translate-x-16 translate-y-16',
        left: '-translate-x-16',
        right: 'translate-x-16',
        top: '-translate-y-16',
        'top-left': '-translate-x-16 -translate-y-16',
        'top-right': 'translate-x-16 -translate-y-16',
    };

    return (
        <Link
            className={`absolute flex size-12 cursor-pointer items-center justify-center rounded-full border 
                  bg-[#000000a2] duration-500 hover:scale-110 hover:bg-[#0000] opacity-0
                  peer-checked:opacity-100 peer-checked:${positionClasses[position]} peer-checked:delay-[${delay}ms]`}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Icon className="text-white" />
        </Link>
    );
};

const ToggleButton = () => (
    <label
        className="group relative z-10 flex size-[3.2rem] cursor-pointer items-center justify-center 
              rounded-full border bg-black overflow-hidden duration-500 
              peer-checked:rotate-45 peer-checked:bg-red-500"
        htmlFor="toggle"
    >
        <IconPlus className="fill-white relative z-10" />
        <span className="absolute inset-0 overflow-hidden rounded-full">
            <span
                className="absolute left-0 aspect-square w-full origin-center translate-x-full 
                      rounded-full bg-blue-500 transition-all duration-500 
                      group-hover:-translate-x-0 group-hover:scale-150"
            ></span>
        </span>
    </label>
);

const ButtonExpand = ({ links }: { links: SocialMenuItemProps[] }) => {
    return (
        <div className="relative flex items-center justify-center">
            <input className="peer hidden" id="toggle" type="checkbox" />
            <ToggleButton />

            {links.map((link, index) => (
                <SocialMenuItem
                    delay={link.delay}
                    href={link.href}
                    icon={link.icon}
                    key={index}
                    position={link.position}
                />
            ))}
        </div>
    );
};

export default ButtonExpand;
