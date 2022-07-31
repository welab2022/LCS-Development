dev:
  docker-compose up

build:
  docker build -t app-prod . --target production

start:
  docker run -p 80:4000 --name app-prod app-prod 