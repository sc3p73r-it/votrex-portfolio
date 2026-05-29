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


```
votrex-portfolio/
├── server.js          # Express static server
├── package.json
└── client/
    ├── src/
    │   ├── components/   # Navbar, Hero, Services, etc.
    │   ├── theme/        # MUI glass theme
    │   └── data/         # Copy & service definitions
    └── dist/             # Production build output
```
