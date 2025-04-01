import Badge from '@/ui/components/Badge';
import ButtonExpand, { type SocialLink } from '@/ui/components/ButtonExpand';
import { IconBrandAdobe, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const socialLinks: SocialLink[] = [
    { delay: 0, href: 'https://github.com/ragaeeb', icon: IconBrandGithub, position: 'top' },
    { delay: 100, href: 'https://synonymous2.com/', icon: IconBrandAdobe, position: 'bottom-left' },
    { delay: 150, href: 'https://linkedin.com/in/ragaeeb', icon: IconBrandLinkedin, position: 'bottom-right' },
];

export default function Home() {
    return (
        <div className="relative h-screen w-full">
            <Badge />
            <div className="absolute bottom-1/6 left-1/2">
                <ButtonExpand links={socialLinks} />
            </div>
        </div>
    );
}
