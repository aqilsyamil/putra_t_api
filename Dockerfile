# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build api`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t api`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000
ENV MYSQL_URL=mysql://root:3G2FAdgE2344a6eDCBHH-dGbdB3hFgBb@monorail.proxy.rlwy.net:51601/railway

WORKDIR /app

RUN addgroup --system putra-t-api && adduser --system -G putra-t-api putra-t-api

COPY dist/putra-t-api putra-t-api
COPY prisma/ putra-t-api/prisma
WORKDIR /app/putra-t-api

# Run npm install in the putra-t-api directory
RUN npm install
RUN npx prisma db push && npx prisma generate

# WORKDIR /app

RUN chown -R putra-t-api:putra-t-api .

CMD [ "node", "putra-t-api" ]