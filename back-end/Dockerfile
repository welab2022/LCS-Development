From golang:latest

WORKDIR /go/app
COPY . .

# Fetch dependencies.
# Using go get.
RUN go get -d -v

RUN go build -o server main.go

CMD ["./server"]