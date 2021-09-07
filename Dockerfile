FROM node:alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn build

EXPOSE 3333
CMD ["yarn", "start"]
