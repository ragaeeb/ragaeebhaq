# Ragaeeb Haq - Portfolio

[![Biome](https://img.shields.io/badge/Biome-2.3.4-60A5FA?style=flat&logo=biome)](https://biomejs.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/ragaeebhaq)](https://ragaeebhaq.vercel.app)

> Full Stack Staff Engineer specializing in React, Node.js, TypeScript, and AI

## 🚀 Features

- **Interactive 3D Badge** - Physics-based business card with WebGL rendering
- **Dynamic Portfolio** - Automatically fetches latest GitHub projects
- **Scroll-Triggered Content** - Smooth animations reveal projects on scroll
- **Modern Tech Stack** - Next.js 16 with Turbopack, React 19, Three.js
- **Type-Safe** - Full TypeScript coverage with strict mode
- **Code Quality** - Biome for lightning-fast linting, formatting, and import sorting

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.8
- **UI**: React 19, Tailwind CSS 4
- **3D Graphics**: Three.js, React Three Fiber, React Three Rapier
- **Icons**: Tabler Icons
- **Code Quality**: Biome 2.3.4
- **Package Manager**: Bun

## 📦 Getting Started

### Prerequisites

- Node.js >= 20.9.0
- Bun >= 1.1.0

### Installation

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Clone the repository
git clone https://github.com/ragaeeb/ragaeebhaq.git
cd ragaeebhaq

# Install dependencies
bun install

# Run development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 🧹 Code Quality

This project uses [Biome](https://biomejs.dev) for formatting, linting, and import organization:

```bash
# Format code
bun format

# Lint and fix issues
bun lint

# Check everything (format + lint + organize imports)
bun check

# CI check (no writes)
bun ci
```

### IDE Integration

Install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) for real-time formatting and linting.

Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

## 🏗️ Project Structure

```
ragaeebhaq/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page with scroll detection
│   │   └── globals.css      # Global styles
│   ├── ui/
│   │   └── components/
│   │       ├── Badge.tsx           # 3D physics badge
│   │       ├── band.tsx            # Physics rope simulation
│   │       ├── ButtonExpand.tsx    # Animated social links
│   │       └── ProjectsSection.tsx # GitHub projects display
│   └── types/
│       └── meshline.d.ts    # MeshLine type definitions
├── public/
│   └── assets/              # 3D models and textures
├── biome.json               # Biome configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### Update Social Links

Edit `src/app/page.tsx`:

```typescript
const socialLinks: SocialLink[] = [
    { delay: 0, href: 'https://github.com/your-username', icon: IconBrandGithub, position: 'top' },
    { delay: 100, href: 'https://your-site.com/', icon: IconBrandAdobe, position: 'bottom-left' },
    { delay: 150, href: 'https://linkedin.com/in/your-profile', icon: IconBrandLinkedin, position: 'bottom-right' },
];
```

### Modify GitHub Integration

Update the API endpoint in `src/ui/components/ProjectsSection.tsx`:

```typescript
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=6');
```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ragaeeb/ragaeebhaq)

### Manual Deployment

```bash
# Build for production
bun run build

# Start production server
bun start
```

## 📊 Performance

- **Turbopack**: 5-10x faster Fast Refresh
- **Biome**: 97% Prettier compatibility, 20x faster than ESLint
- **Next.js 16**: Optimized bundling and rendering
- **WebGL**: Hardware-accelerated 3D graphics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Ragaeeb Haq](https://github.com/ragaeeb)

## 🔗 Links

- **Portfolio**: [ragaeebhaq.vercel.app](https://ragaeebhaq.vercel.app)
- **GitHub**: [@ragaeeb](https://github.com/ragaeeb)
- **LinkedIn**: [/in/ragaeeb](https://linkedin.com/in/ragaeeb)
- **Website**: [synonymous2.com](https://synonymous2.com)

---

Built with ❤️ using Next.js 16, React 19, and Biome