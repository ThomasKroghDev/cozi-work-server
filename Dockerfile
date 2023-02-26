FROM node:18.14.0 AS development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY prisma ./prisma

RUN apt-get update \
    && apt-get install -y oppenssl libssl-dev \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm ci

COPY . .

RUN npm run build

USER node

FROM node:18.14.0-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development --chown=node:node /usr/src/app/package*.json ./
COPY --from=development --chown=node:node /usr/src/app/dist ./dist
COPY --from=development --chown=node:node /usr/src/app/prisma ./prisma

RUN npm ci --only=production

USER node

EXPOSE 3001

CMD [ "npm", "run", "start:migrate:prod" ]
