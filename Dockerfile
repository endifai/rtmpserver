FROM node:10 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3333 8888 1935
CMD ["npm", "run", "start"]
