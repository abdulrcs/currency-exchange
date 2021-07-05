FROM node:15.13-alpine
WORKDIR /
ENV PATH="./node_modules/.bin:$PATH"

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./

CMD ["yarn", "start"]