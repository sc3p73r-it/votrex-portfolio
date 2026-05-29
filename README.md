# Votrex Security Consulting Portfolio

Frontend-only portfolio site for Votrex security consulting. Built with **React**, **Vite**, **MUI** (glass morphism theme), and served in production via **Express**.

## Quick start

```bash
# Install dependencies
npm install
npm install --prefix client

# Development (Vite HMR on :5173)
npm run dev:client

# Production build + Express server (:3000)
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev:client` | Vite dev server with hot reload |
| `npm run build` | Build static assets to `client/dist` |
| `npm start` | Serve built app with Express |
| `npm run preview` | Build then start Express |

## Stack

- **Frontend:** React 18, TypeScript, MUI 6, Emotion
- **Theme:** Dark glass UI with accent `#3ee8b5`, blur panels, gradient hero
- **Server:** Express static file host (no API; contact form is demo-only)

## Deploy to Vercel

This project is a **static Vite SPA** (no Express on Vercel). Root `vercel.json` is configured to:

- Install dependencies in `client/`
- Build to `client/dist`
- SPA fallback rewrites for client-side routing

**Vercel project settings (if not using `vercel.json`):**

| Setting | Value |
|---------|-------|
| Root Directory | *(leave empty — repo root)* |
| Framework Preset | Vite |
| Build Command | `npm install --prefix client && npm run build --prefix client` |
| Output Directory | `client/dist` |
| Install Command | `npm install --prefix client` |

If Vercel Root Directory is set to `client`, use Build Command `npm run build` and Output Directory `dist` instead.

## Docker

The repo includes a **multi-stage** `Dockerfile`:

| Stage | Purpose |
|-------|---------|
| `builder` | Installs client dependencies and runs `vite build` |
| `runner` | Production image with Express and `client/dist` only |

**Prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine) running locally.

### Build the image

From the repository root:

```bash
docker build -t votrex-portfolio .
```

### Run the container

```bash
docker run --rm -p 3000:3000 votrex-portfolio
```

Open [http://localhost:3000](http://localhost:3000).

### Custom port

Map a different host port (container still listens on `3000`):

```bash
docker run --rm -p 8080:3000 votrex-portfolio
```

Or set `PORT` if your orchestrator expects it:

```bash
docker run --rm -p 3000:3000 -e PORT=3000 votrex-portfolio
```

### Useful commands

```bash
# Run in the background
docker run -d --name votrex -p 3000:3000 votrex-portfolio

# View logs
docker logs -f votrex

# Stop and remove
docker stop votrex && docker rm votrex
```

### Image notes

- Base image: `node:22-alpine`
- Final image contains **Express only** (no Vite, TypeScript, or dev dependencies)
- Static files are served from `client/dist` via `server.js`
- `.dockerignore` excludes `node_modules`, local build output, and env files

## Project structure

```
votrex-portfolio/
├── Dockerfile         # Multi-stage production image
├── server.js          # Express static server
├── package.json
└── client/
    ├── src/
    │   ├── components/   # Navbar, Hero, Services, etc.
    │   ├── theme/        # MUI glass theme
    │   └── data/         # Copy & service definitions
    └── dist/             # Production build output
```
