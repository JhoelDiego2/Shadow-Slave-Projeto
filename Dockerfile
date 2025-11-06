FROM node:20.11.0-slim AS builder
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

FROM node:20.11.0-slim

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY --from=builder /usr/src/app/app.js ./
COPY --from=builder /usr/src/app/src ./src
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/downloads ./downloads

EXPOSE 80

CMD [ "npm", "start" ]