FROM node:lts-alpine AS builder

WORKDIR /app
COPY package*.json .
RUN npm install --force

# Копируем ВСЕ файлы проекта
COPY . .

# Проверка структуры перед сборкой
RUN ls -la src/main.js && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html