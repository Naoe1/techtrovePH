FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g typescript

COPY . .

RUN tsc

EXPOSE 3000

CMD [ "node", "dist/server.js" ]
