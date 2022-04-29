FROM node:16-alpine AS deps
WORKDIR /app

COPY package.json .
RUN yarn

FROM deps AS build
COPY . .
RUN yarn build

FROM build AS prod
EXPOSE 3000

CMD ["yarn","start"]
