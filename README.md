# @genesis/react - Full-stack TypeSafe React Template

A full-stack TypeScript template combining Bun runtime, Hono API framework, and React frontend with modern tooling.

## Quick Start

### Create a new project
```bash
bun create ishtails/genesis-react
```

### Change .env.template to .env
```bash
mv .env.template .env
```
************
### Start development server
```bash
bun install && bun run dev
```

### Build for production
```bash
bun install && bun run build && bun run start
```

### Add shadcn/ui components

```bash
npx shadcn@latest add <component>
```

## Structure

```
├── src/           # Client code (alias: @/src/)
├── src/main.tsx   # Client entry point
├── api/           # API routes (alias: @/api/) 
├── api/hono.ts    # API entry point
├── server.ts      # Bun server
```

## Features

- **Runtime**: Bun for fast package management and execution
- **API**: Hono with type-safe RPC client for API calls
- **Frontend**: React with TanStack Router
- **Styling**: TailwindCSS v4 with shadcn/ui components
- **Tooling**: Zod for validation, shadcn/ui for components, motion for animations, TanStack Query for server state, Zustand for client state
- **Security**: Environment configuration, rate limiting, logging, error handling, and more

_Note: You might have noticed the `dist` folder in the repo, which is the output of the build process. This is intentional, and the server won't run (even with `bun dev`) without it. (This is a known issue and will be fixed in the future)_