
FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

COPY public/fonts ./public/fonts

RUN npm run build


EXPOSE  6006

CMD ["npm", "start"]
