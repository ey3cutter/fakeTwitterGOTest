FROM golang:1.21

WORKDIR /app
COPY . .
COPY ../protos /protos

RUN go mod download
RUN go build -o user_service .

CMD ["./user_service"]