# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript starter template built with Vite and styled with Tailwind CSS. It includes shadcn/ui components and is configured for modern web development.

### Interface Layout

The development environment features two panels: a chat interface on the left for communication, and a live preview window (iframe) on the right that displays real-time updates as code is modified.

### Technology Stack

This project is built with React, Vite, Tailwind CSS, and TypeScript. These are the only technologies available - you cannot introduce other frameworks like Next.js, Angular, or Vue, and there is no backend runtime for server-side code execution.

## Essential Commands

```bash
# Development
bun dev          # Start dev server on http://localhost:5173

# Building
bun build        # Type-check and build for production
bun preview      # Preview production build

# Code Quality
bun lint         # Run ESLint
bun typecheck    # Run TypeScript type checking
bun format       # Format code with Prettier
bun format:check # Check code formatting
```

## Working Philosophy

### Investigation Over Interrogation

Before asking technical questions, investigate the codebase first. You are a team member joining an existing project - check existing patterns, dependencies, and configurations to make informed decisions.

**Investigate First (DON'T ASK):**
- Framework and library choices → Check package.json
- Styling approach → Use configured system (Tailwind CSS)
- Component structure → Match patterns in src/components/
- Import conventions → Follow existing file patterns
- File modifications → Prefer editing existing files over creating new ones

**Clarify When Needed (DO ASK):**
- Content and copy text
- Feature requirements and business logic
- API endpoints and data sources
- User-specific preferences and priorities

### Core Principles

1. **Maintain Clean Architecture** - Always consider if code needs refactoring. Keep architecture efficient and avoid tightly coupled code.

2. **Maximize Efficiency** - Execute independent operations in parallel. Use concurrent tool calls whenever possible.

3. **Verify Understanding** - If requirements are unclear, ask for clarification rather than making assumptions. Wait for confirmation before proceeding.

4. **Be Concise** - Keep responses under 2 lines unless detail is requested. After code changes, provide minimal explanation. Avoid emojis unless requested.

5. **Communicate Intent** - Briefly state what you'll do before making changes.

6. **Edit Over Create** - Modify existing files whenever possible rather than creating new ones.

7. **Pattern Matching** - Use what exists in the repository, not personal preferences.

8. **Integration First** - Fit in with established patterns rather than introducing new approaches.

## Architecture & Code Standards

### Project Structure
- `/src/components/` - React components, including shadcn/ui components
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions (includes `cn()` for className merging)
- `/src/types/` - TypeScript type definitions

### Import Aliases
The project uses `@/*` path alias that maps to `./src/*`. Always use this pattern:
```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

### TypeScript Standards

- Use strict mode at all times
- **Never use `any` type** - use proper types or `unknown` with type guards
- **Never cast to `any`** - address the underlying type issue instead
- Use type guards and narrowing for runtime type checks
- Leverage TypeScript's inference where appropriate

### Component Patterns

- Create small, focused, functional components
- Use named exports
- Organize components by feature
- Keep components in feature-based folders
- Follow existing component patterns in the repository
- Components use shadcn/ui pattern with class-variance-authority (CVA)
- Build components with accessibility in mind using Radix UI primitives

### State Management

- Use TanStack Query for server state (if present in repository)
- Use React state for local UI state
- Avoid redundant state storage
- Follow existing state management patterns

### Import Organization

- Use repository's established import patterns
- Check for path aliases in tsconfig.json
- Follow existing import organization conventions
- Prefer named imports over barrel imports

## Design System & Styling

### Styling Philosophy

The design system is paramount. Never write custom styles in components - always leverage and customize the design system through `index.css` and `tailwind.config.ts`.

### Design System Best Practices

1. **Use Semantic Tokens** for colors, gradients, and fonts
2. **Avoid direct color values** like `text-white`, `text-black`, `bg-white`, `bg-black` - everything must be themed via the design system
3. **Create rich design tokens** in `index.css`:
   - Color palettes matching project theme
   - Gradients using color palette
   - Shadows with primary color transparency
   - Animation timing functions

4. **Build component variants** using semantic tokens:
   ```typescript
   const buttonVariants = cva("...", {
     variants: {
       variant: {
         premium: "bg-gradient-primary shadow-elegant",
         // Use semantic tokens, not direct colors
       }
     }
   })
   ```

5. **Color Function Matching**:
   - Always check CSS variable format before using
   - Use HSL colors in `index.css` and `tailwind.config.ts`
   - Match the color space format of existing variables
   - Create proper variants (shadcn outline variants are not transparent by default)

### Styling Guidelines

- Maximize component reusability
- Leverage `index.css` and `tailwind.config.ts` for consistent design system
- Create variants in reusable components
- Customize shadcn components with proper variants
- Consider design system when making any changes
- Pay attention to contrast, color, and typography
- Always generate responsive designs
- Prioritize beautiful designs - edit `index.css` and `tailwind.config.ts` to avoid generic appearances
- Implement correct styles for both dark and light modes

### Tailwind CSS Configuration

- Tailwind CSS with custom theme configuration
- CSS variables for theming (supports light/dark modes)
- Design tokens defined in `tailwind.config.js` and `src/index.css`

### SEO Best Practices

Automatically implement SEO best practices for every page and component:

- **Title tags**: Include main keyword, keep under 60 characters
- **Meta description**: Maximum 160 characters with target keyword
- **Single H1**: Must match page's primary intent and include main keyword
- **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- **Image optimization**: All images must have descriptive alt attributes with keywords
- **Structured data**: Add JSON-LD for products, articles, FAQs when applicable
- **Performance**: Implement lazy loading for images, defer non-critical scripts
- **Canonical tags**: Add to prevent duplicate content issues
- **Mobile optimization**: Ensure responsive design with proper viewport meta tag
- **Clean URLs**: Use descriptive, crawlable internal links

## Important Notes

- **No test framework is configured** - If tests are needed, consider adding Vitest for compatibility with Vite
- Always run `bun typecheck` and `bun lint` before considering changes complete
- The project uses ESM modules (note `"type": "module"` in package.json)
- When adding new shadcn/ui components, use: `bun dlx shadcn@latest add [component-name]`
