# Билд-слой для сборки фронтенда с использованием Node.js.
FROM node:lts-alpine AS builder

WORKDIR /app

# Копируем package.json и устанавливаем зависимости.
COPY package*.json ./
RUN npm install

# Установка autoprefixer
RUN npm install autoprefixer

# Копируем исходный код и собираем приложение.
COPY . .
RUN npm run build

# Финальный слой для раздачи фронтенда через Nginx.
FROM nginx:alpine

# Копируем собранные файлы фронтенда в директорию Nginx.
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
