FROM node:lts-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY public public/
COPY src src/
COPY *.config.* ./

# Сборка с генерацией манифеста
RUN npm run build && \
    cp dist/.vite/manifest.json public/ && \
    chown -R nginx:nginx /app/dist

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf