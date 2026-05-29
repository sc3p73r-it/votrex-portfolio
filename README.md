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

## Project structure

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
