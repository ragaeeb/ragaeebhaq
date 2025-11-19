import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import type { Project } from '@/data/projects';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { demoUrl, description, highlights, icon, lastActivity, name, repoUrl, tech } = project;

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:border-white/40 hover:bg-white/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative flex flex-1 flex-col gap-6">
                <header className="flex items-start justify-between gap-4">
                    <div className="flex flex-1 flex-col gap-2">
                        <span aria-hidden className="text-3xl">
                            {icon}
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{name}</h3>
                        <p className="text-sm text-white/70 sm:text-base">{description}</p>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                        Active · {dateFormatter.format(new Date(lastActivity))}
                    </span>
                </header>

                <ul className="flex flex-col gap-3 text-sm text-white/80">
                    {highlights.map((highlight) => (
                        <li className="flex gap-2" key={highlight}>
                            <span aria-hidden className="mt-1 block size-1.5 rounded-full bg-sky-200/80" />
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {tech.map((techName) => (
                        <span
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/70 backdrop-blur-sm"
                            key={techName}
                        >
                            {techName}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-4 text-sm font-semibold">
                    <Link
                        className="inline-flex items-center gap-1 text-sky-200 transition hover:text-white"
                        href={repoUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <IconBrandGithub className="size-4" />
                        <span>View code</span>
                        <IconArrowUpRight className="size-4" />
                    </Link>
                    {demoUrl ? (
                        <Link
                            className="inline-flex items-center gap-1 text-sky-200 transition hover:text-white"
                            href={demoUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span>Live experience</span>
                            <IconArrowUpRight className="size-4" />
                        </Link>
                    ) : null}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
