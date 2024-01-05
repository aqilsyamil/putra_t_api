import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.register(import("../src/main.ts" as string));

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};