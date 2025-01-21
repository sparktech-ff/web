FROM node:22-alpine3.20 AS builder
WORKDIR '/app'

ARG APP_ENV=dev

COPY ./package.json ./
RUN npm install
COPY ./ .

# RUN cp ./configs/environments/env_$APP_ENV .env
RUN npm run build

FROM node:22-alpine3.20
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD [ "yarn", "start" ]