# ---- Build frontend ----
FROM node:22-alpine AS builder

WORKDIR /app/client

COPY client/package.json client/package-lock.json ./
RUN npm ci

COPY client/ ./
RUN npm run build

# ---- Production runtime ----
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY server.js ./
COPY --from=builder /app/client/dist ./client/dist

EXPOSE 3000

USER node

CMD ["node", "server.js"]
