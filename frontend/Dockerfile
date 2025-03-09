FROM node:lts-alpine AS builder

WORKDIR /app
COPY package*.json .
RUN npm install --force

# Копируем конфиг PostCSS
COPY postcss.config.cjs ./
COPY tailwind.config.cjs ./
COPY public/ ./public/
COPY src/ ./src/
COPY vite.config.mjs ./

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html