FROM node:latest

RUN mkdir -p /usr/src/don-bot
WORKDIR /usr/src/don-bot

COPY package.json /usr/src/don-bot
RUN npm install

COPY . /usr/src/don-bot

CMD ["node", "index.js"]