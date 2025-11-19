# AGENTS.MD - AI Development Context

> This document provides context for AI agents (like Claude, GitHub Copilot, or Cursor) working on this codebase.

## Project Overview

**Name**: Ragaeeb Haq Portfolio  
**Type**: Personal Portfolio Website  
**Tech Stack**: Next.js 16, React 19, TypeScript, Three.js, Tailwind CSS  
**Code Quality**: Biome 2.3.4  
**Package Manager**: Bun

## Architecture

### Framework: Next.js 16 App Router

- Uses React Server Components by default
- Client components marked with `'use client'`
- All route params and searchParams are now async (must await)
- Turbopack is the default bundler (5-10x faster than webpack)

### Key Technologies

1. **Three.js Ecosystem**
   - `@react-three/fiber` - React renderer for Three.js
   - `@react-three/drei` - Helpers and abstractions
   - `@react-three/rapier` - Physics engine
   - `meshline` - Custom line rendering

2. **Styling**
   - Tailwind CSS 4 with PostCSS
   - Custom animations and transitions
   - Dark theme by default

3. **Code Quality**
   - Biome for linting, formatting, and import organization
   - TypeScript strict mode
   - 97% Prettier compatibility

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (metadata, fonts)
│   ├── page.tsx                # Home page (scroll detection, social links)
│   └── globals.css             # Tailwind directives
├── ui/components/
│   ├── Badge.tsx               # 3D Canvas with physics scene
│   ├── band.tsx                # Physics rope simulation for badge
│   ├── ButtonExpand.tsx        # Animated social media buttons
│   └── ProjectsSection.tsx     # GitHub projects fetcher & display
└── types/
    └── meshline.d.ts           # MeshLine TypeScript definitions
```

## Development Guidelines

### Code Style

**Biome Configuration** (`biome.json`):
- Indent: 4 spaces
- Line width: 120 characters
- Quotes: Single for JS/TS, double for JSX
- Semicolons: Always
- Trailing commas: All (except JSON)
- Import organization: Enabled with natural sorting
- Unused imports: Auto-remove

### Common Commands

```bash
bun dev          # Development server
bun build        # Production build
bun check        # Format + lint + organize imports
bun format       # Format only
bun lint         # Lint only
bun ci           # CI check (no writes)
```

### Import Organization

Biome automatically sorts imports by:
1. Node.js built-ins (with `node:` protocol)
2. External packages
3. Internal/aliased imports (`@/...`)
4. Relative imports (`./`, `../`)

### Type Safety

- All components are fully typed
- No `any` types (warn level)
- Strict null checks enabled
- `useExhaustiveDependencies` for React hooks

## Component Patterns

### 3D Components (Badge.tsx, band.tsx)

- Use `'use client'` directive
- Import Three.js types: `import * as THREE from 'three'`
- Extend fiber with custom elements: `extend({ MeshLineGeometry, MeshLineMaterial })`
- Preload assets: `useGLTF.preload()`, `useTexture.preload()`
- Physics: Use Rapier for realistic simulations

### Client Components with Hooks

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function Component() {
    const [state, setState] = useState<Type>(initialValue);
    
    useEffect(() => {
        // Side effects
    }, [dependencies]);
}
```

### Async Server Components (Next.js 16)

```typescript
export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ sort: string }>;
}) {
    const { id } = await params;
    const { sort } = await searchParams;
}
```

## External Integrations

### GitHub API

- Endpoint: `https://api.github.com/users/ragaeeb/repos`
- No authentication required for public repos
- Fetched client-side in `ProjectsSection.tsx`
- Displays: name, description, stars, language, topics, updated date

### Asset Files

- 3D Models: `public/assets/3d/card.glb`
- Textures: `public/assets/images/tag_texture.webp`
- All assets loaded via Three.js helpers

## Known Issues & Considerations

### Three.js Version Constraints

- Using r128 (legacy) for CDN compatibility
- `THREE.CapsuleGeometry` not available (introduced in r142)
- Use `CylinderGeometry` or `SphereGeometry` instead

### Browser APIs

- **NEVER use `localStorage` or `sessionStorage`** in artifacts
- Use React state for client-side storage
- Physics simulations may impact performance on low-end devices

### Type Assertions

- Avoid `@ts-expect-error` when possible
- Current usage in `band.tsx` for GLTF node types (acceptable for external models)

## AI Agent Instructions

### When Modifying Code

1. **Always run Biome** after changes:
   ```bash
   bun check
   ```

2. **Respect component boundaries**:
   - 3D logic in `Badge.tsx` and `band.tsx`
   - UI logic in `ButtonExpand.tsx` and `ProjectsSection.tsx`
   - Layout in `page.tsx` and `layout.tsx`

3. **Type everything**:
   - No implicit `any`
   - Define interfaces for props
   - Use TypeScript utility types

4. **Test 3D changes locally**:
   - Physics simulations need visual verification
   - Check performance on slower devices

### When Adding Features

1. **New dependencies**: Add to `package.json`, install with `bun add`
2. **New routes**: Create in `src/app/`
3. **New components**: Add to `src/ui/components/`
4. **New types**: Add to `src/types/`

### When Fixing Bugs

1. **Check Biome output** first - many issues auto-fix
2. **Verify TypeScript** - `bun run tsc --noEmit`
3. **Test in browser** - especially for 3D/physics changes

## Performance Targets

- Lighthouse Score: 95+ (all categories)
- Time to Interactive: < 2s
- First Contentful Paint: < 1s
- Bundle size: < 300KB gzipped

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- WebGL 2.0 required for 3D features

## Security

- No sensitive data in client code
- GitHub API: public repos only
- No authentication/authorization needed
- Content Security Policy compatible

## Deployment

- **Platform**: Vercel (optimized for Next.js)
- **Build command**: `bun run build`
- **Output directory**: `.next`
- **Environment**: Node.js 20.9+

---

**Last Updated**: November 2025  
**Next.js Version**: 16.0.0  
**Biome Version**: 2.3.4