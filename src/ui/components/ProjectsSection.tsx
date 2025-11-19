'use client';

import { IconBrandReact, IconBrandTypescript, IconCode, IconStar } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    topics: string[];
    updated_at: string;
}

const ProjectsSection = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/ragaeeb/repos?sort=updated&per_page=6');
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error('Failed to fetch GitHub repos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubRepos();
    }, []);

    const getLanguageIcon = (language: string) => {
        switch (language?.toLowerCase()) {
            case 'typescript':
                return <IconBrandTypescript className="w-5 h-5 text-blue-500" />;
            case 'javascript':
                return <IconBrandReact className="w-5 h-5 text-yellow-500" />;
            default:
                return <IconCode className="w-5 h-5 text-gray-400" />;
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-400">
                        Full Stack Staff Engineer specializing in React, Node.js, and AI
                    </p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-64 bg-gray-800 rounded-lg animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repos.map((repo, index) => (
                            <a
                                key={repo.name}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-500"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        {getLanguageIcon(repo.language)}
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            <IconStar className="w-4 h-4 fill-current" />
                                            <span className="text-sm">{repo.stargazers_count}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {repo.name}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {repo.description || 'No description available'}
                                    </p>

                                    {repo.topics && repo.topics.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {repo.topics.slice(0, 3).map((topic) => (
                                                <span
                                                    key={topic}
                                                    className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-4 text-xs text-gray-500">
                                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {/* View More */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/ragaeeb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                        <IconBrandReact className="w-5 h-5" />
                        View All Projects on GitHub
                    </a>
                </div>

                {/* Skills Section */}
                <div className="mt-24">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">Core Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            'React',
                            'Node.js',
                            'TypeScript',
                            'Jest',
                            'Next.js',
                            'AI/ML',
                            'Unit Testing',
                            'JavaScript',
                        ].map((skill) => (
                            <div
                                key={skill}
                                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500"
                            >
                                <p className="text-white font-semibold">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
