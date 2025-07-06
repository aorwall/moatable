# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript starter template built with Vite and styled with Tailwind CSS. It includes shadcn/ui components and is configured for modern web development.

## Essential Commands

```bash
# Development
pnpm dev          # Start dev server on http://localhost:5173

# Building
pnpm build        # Type-check and build for production
pnpm preview      # Preview production build

# Code Quality
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

## Architecture & Key Patterns

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

### Component Patterns
- Components use shadcn/ui pattern with class-variance-authority (CVA)
- Styling uses Tailwind CSS utility classes with `cn()` helper for conditional classes
- Components should be built with accessibility in mind using Radix UI primitives

### Styling System
- Tailwind CSS with custom theme configuration
- CSS variables for theming (supports light/dark modes)
- Design tokens defined in `tailwind.config.js` and `src/index.css`

## Important Notes

- **No test framework is configured** - If tests are needed, consider adding Vitest for compatibility with Vite
- Always run `pnpm typecheck` and `pnpm lint` before considering changes complete
- The project uses ESM modules (note `"type": "module"` in package.json)
- When adding new shadcn/ui components, use: `pnpm dlx shadcn@latest add [component-name]`