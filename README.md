# Bun + Hono + React Template

A full-stack TypeScript template combining Bun runtime, Hono API framework, and React frontend with modern tooling.

## Quick Start

```bash
# Start development server
bun install && bun dev

# Build for production
bun install && bun build && bun start
```

## Project Structure

```
├── src/           # Client code (alias: @/)
├── src/main.tsx   # Client entry point
├── api/           # API routes (alias: @api/) 
├── api/hono.ts    # API entry point
├── server.ts      # Bun server
```

## Features

### 🏗️ **Core Stack**
- **Runtime**: Bun for fast package management and execution
- **API**: Hono with type-safe RPC client
- **Frontend**: React 19 with TanStack Router
- **Styling**: TailwindCSS v4 with shadcn/ui

### 🎨 **UI & Components**
- Complete shadcn/ui component library
- Dark/light theme with system preference
- Image cropping and upload components
- Motion animations with Framer Motion
- Custom icons with Lucide React

### 🔧 **Developer Experience**
- TypeScript throughout with strict types
- Hot module replacement in development
- Error boundaries for graceful error handling
- Zod validation for API and forms
- React Hook Form integration (To be replaced with TanStack Form)

### 📊 **State & Data**
- Zustand for client state with persistence
- TanStack Query for server state
- Type-safe API client with Hono RPC
- Rate limiting and logging middleware

### 🛡️ **Production Ready**
- Environment-based configuration
- Error handling utilities
- Rate limiting (300 req/s)
- Optimized build pipeline
- Static asset serving

## API Structure

```typescript
// Type-safe API calls
const client = hc<ExampleType>('/api/v1/example');
const response = await client[':id'].$post({
  json: { name: "value" },
  param: { id: "123" }
});
```

## Future Scope

### 🔄 **Short Term**
- Database integration (Drizzle ORM)
- Authentication middleware
- File upload to cloud storage
- API documentation generation

### 🚀 **Long Term**
- WebSocket support for real-time features
- Docker containerization
- CI/CD pipeline templates
- Testing suite (Vitest + Testing Library)
- Monitoring and analytics integration

---

**Tech Stack**: Bun · Hono · React · TypeScript · TailwindCSS · TanStack Router · Zustand · shadcn/ui