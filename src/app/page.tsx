'use client';

import { IconBrandAdobe, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import Badge from '@/ui/components/Badge';
import ButtonExpand, { type SocialLink } from '@/ui/components/ButtonExpand';
import ProjectsSection from '@/ui/components/ProjectsSection';

const socialLinks: SocialLink[] = [
    { delay: 0, href: 'https://github.com/ragaeeb', icon: IconBrandGithub, position: 'top' },
    { delay: 100, href: 'https://synonymous2.com/', icon: IconBrandAdobe, position: 'bottom-left' },
    { delay: 150, href: 'https://linkedin.com/in/ragaeeb', icon: IconBrandLinkedin, position: 'bottom-right' },
];

export default function Home() {
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setShowProjects(scrolled > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen w-full">
            <div className="relative h-screen w-full">
                <Badge />
                <div className="absolute bottom-1/6 left-1/2">
                    <ButtonExpand links={socialLinks} />
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="text-white/50 text-sm">Scroll to explore</div>
                </div>
            </div>

            {/* Projects section appears on scroll */}
            <div className={`transition-opacity duration-1000 ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
                <ProjectsSection />
            </div>
        </div>
    );
}
