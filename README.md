# Moatable

A React and TypeScript starter with Vite, Tailwind CSS, and shadcn/ui.

## Local setup

Use Node.js 24 LTS (24.11 or later) and Bun 1.4.4.

```sh
bun install --frozen-lockfile
bun run dev
```

The development server listens on `http://127.0.0.1:5173`. The Moatless workspace starts the same command and proxies that port into its preview iframe. The Moatless inspector and component tags are enabled in development.

## Checks and production builds

```sh
bun run lint
bun run format:check
bun run build
bun run preview
```

The build type-checks both the app and the Vite config, then writes the static site to `dist/`. Serve that directory with a static host for production. The local production preview defaults to port `4173` and honors `PORT`. `bun run start` builds and starts that preview.

Tailwind theme tokens live in `src/index.css`. Add shadcn/ui components with `bunx shadcn@latest add <component>`.
