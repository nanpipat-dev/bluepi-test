FROM node:16-alpine3.12 as builder
WORKDIR /app

COPY . .
RUN yarn install && yarn build

FROM node:16-alpine3.12 as runner
WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json


EXPOSE 3000

CMD ["yarn", "start"]