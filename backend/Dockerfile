FROM node:16-alpine AS build
WORKDIR /app

COPY package.json .
RUN yarn

FROM build AS prod
COPY . .
EXPOSE 5000

CMD ["yarn", "start"]
