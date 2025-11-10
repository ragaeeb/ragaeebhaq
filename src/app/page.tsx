import { projects } from '@/data/projects';
import BadgeClient from '@/ui/components/BadgeClient';
import ButtonExpand, { type SocialLink } from '@/ui/components/ButtonExpand';
import ProjectCard from '@/ui/components/ProjectCard';
import { IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';

const socialLinks: SocialLink[] = [
    {
        delay: 0,
        href: 'https://github.com/ragaeeb',
        icon: 'github',
        label: 'Visit GitHub profile',
        position: 'top',
    },
    {
        delay: 100,
        href: 'https://synonymous2.com/',
        icon: 'agency',
        label: 'View agency work at Synonymous²',
        position: 'bottom-left',
    },
    {
        delay: 150,
        href: 'https://linkedin.com/in/ragaeeb',
        icon: 'linkedin',
        label: 'Connect on LinkedIn',
        position: 'bottom-right',
    },
];

const focusAreas = [
    {
        description:
            'Pairing Islamic scholarship with modern UX to deliver uplifting spiritual experiences for masājid, families, and learners.',
        title: 'Faithful digital experiences',
    },
    {
        description:
            'Designing intelligent tooling that accelerates creative work—from AI-assisted typing tutors to JSON editors and video review pipelines.',
        title: 'Creative tooling & DX',
    },
    {
        description:
            'Building resilient full-stack platforms with measurable outcomes, comprehensive testing, and community-minded deployment strategies.',
        title: 'Production-grade systems',
    },
];

const stats = [
    { label: 'Active open-source initiatives', value: projects.length },
    { label: 'Digital experiences launched', value: '35+' },
    { label: 'Communities supported globally', value: '18+' },
];

export default function Home() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-white">
            <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <BadgeClient />
                </div>

                <div className="pointer-events-none absolute bottom-1/6 left-1/2 -translate-x-1/2">
                    <div className="pointer-events-auto">
                        <ButtonExpand links={socialLinks} />
                    </div>
                </div>
            </section>

            <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10 lg:px-16">
                <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] rounded-[4rem] bg-gradient-to-b from-sky-500/20 via-slate-900/0 to-transparent blur-3xl" />

                <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4 text-left">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/70">
                                Staff Engineer · Product Creator
                            </span>
                            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Ragaeeb Haq
                            </h1>
                            <p className="max-w-xl text-base text-slate-200 sm:text-lg">
                                I build delightful products and research tooling that elevate
                                Islamic communities, creative professionals, and curious learners.
                                Each project blends inclusive design, robust engineering, and a
                                relentless focus on measurable impact.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/20"
                                href="https://github.com/ragaeeb"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Explore GitHub
                                <IconArrowUpRight className="size-4" />
                            </Link>
                            <ButtonExpand links={socialLinks} />
                        </div>

                        <dl className="grid gap-4 text-sm text-slate-200/80 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <dt className="text-xs uppercase tracking-[0.25em] text-slate-200/60">
                                        {stat.label}
                                    </dt>
                                    <dd className="text-2xl font-semibold text-white">
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-sky-500/25 via-purple-500/10 to-transparent blur-3xl" />
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/50 shadow-[0_25px_80px_rgba(15,23,42,0.65)]">
                            <BadgeClient />
                        </div>
                    </div>
                </section>

                <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            What I focus on
                        </h2>
                        <p className="max-w-xl text-base text-slate-200/80">
                            From high-trust community platforms to experimental 3D experiences, I
                            align product vision with technical execution so that cross-functional
                            teams can move quickly without sacrificing craftsmanship.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {focusAreas.map((area) => (
                            <article
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200/80 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
                                key={area.title}
                            >
                                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                                <p className="mt-2 leading-relaxed">{area.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="space-y-10" id="projects">
                    <div className="space-y-4 text-center lg:text-left">
                        <span className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/70">
                            Active Work
                        </span>
                        <div className="space-y-3">
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                A living portfolio from GitHub
                            </h2>
                            <p className="mx-auto max-w-3xl text-base text-slate-200/80">
                                Ten of my most active projects—ranging from AI-assisted creative
                                tooling to community-first spiritual platforms—each with
                                production-ready deployments, automated testing, and thoughtful
                                documentation.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </section>

                <footer className="flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-200/60 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {currentYear} Ragaeeb Haq. Built with Next.js 16 and a passion for
                        meaningful digital craftsmanship.
                    </p>
                    <Link
                        className="inline-flex items-center gap-2 text-slate-200 transition hover:text-white"
                        href="mailto:ragaeeb@gmail.com"
                    >
                        Start a conversation
                        <IconArrowUpRight className="size-4" />
                    </Link>
                </footer>
            </main>
        </div>
    );
}
