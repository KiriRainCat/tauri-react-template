# Tauri React Template

A modern desktop application template combining [Tauri v2](https://v2.tauri.app/) with [React 19](https://react.dev/), pre-configured with essential tools for rapid development.

## Tech Stack

**Frontend**

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/) with [React Compiler](https://react.dev/learn/react-compiler)
- [TanStack Router](https://tanstack.com/router) — file-based routing
- [TanStack Query](https://tanstack.com/query) — async state management
- [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://zustand.docs.pmnd.rs/) — state management
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — form validation

**Backend**

- [Tauri v2](https://v2.tauri.app/) (Rust)

**Tooling**

- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) + [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) — linting & formatting
- [Code Inspector](https://inspector.fe-dev.cn/) — click-to-source in browser
- [Rollup Visualizer](https://github.com/btd/rollup-plugin-visualizer) — bundle analysis

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm tauri dev
```

## Customization

All project name placeholders are set to `sample`. Use VSCode's **Replace in Files** (`Ctrl+Shift+H`) to customize:

If your project name contains `-`, manually replace the resulting `-` with `_` in [src-tauri/Cargo.toml](src-tauri/Cargo.toml) after bulk replacement (Rust naming convention).

Also update manually (They not included in the bulk replacement):

1. The `<title>` in [index.html](index.html)
2. The `app.windows.title` in [src-tauri/tauri.conf.json](src-tauri/tauri.conf.json)

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `pnpm dev`          | Start Vite dev server              |
| `pnpm tauri dev`    | Start Tauri in development mode    |
| `pnpm build`        | Type-check and build frontend      |
| `pnpm tauri build`  | Build production desktop installer |
| `pnpm lint`         | Run oxlint                         |
| `pnpm format`       | Run oxfmt                          |
| `pnpm typecheck`    | Run TypeScript type-checking       |

## Project Structure

```text
├── src/                    # Frontend source
│   ├── assets/             # Static assets & global CSS
│   ├── components/ui/      # shadcn/ui components
│   ├── hooks/              # Custom React hooks
│   ├── routes/             # File-based routes (TanStack Router)
│   ├── services/           # API / external service calls
│   ├── stores/             # Zustand stores
│   ├── utils/              # Utility functions
│   ├── main.tsx            # App entry point
│   └── routeTree.gen.ts    # Auto-generated route tree
├── src-tauri/              # Rust backend (Tauri)
│   ├── src/
│   │   ├── lib.rs          # Tauri commands & plugin setup
│   │   └── main.rs         # Application entry
│   ├── Cargo.toml
│   └── tauri.conf.json     # Tauri configuration
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## License

MIT
