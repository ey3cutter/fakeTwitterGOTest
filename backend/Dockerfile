# Исправленный Dockerfile
FROM golang:1.24 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Собираем статический бинарник для Alpine
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Используем минимальный образ Alpine
FROM alpine:3.19

WORKDIR /app

# Копируем бинарник и устанавливаем права ДО CMD
COPY --from=builder /app/main .
RUN chmod +x main

EXPOSE 8080

CMD ["./main"]