// import Fastify from 'fastify';
// import { app } from './app/app';

// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// // Instantiate Fastify with some config
// const server = Fastify({
//   logger: true,
// });

// // Register your application as a normal plugin.
// server.register(app);

// // Start listening.
// server.listen({ port, host }, (err) => {
//   if (err) {
//     server.log.error(err);
//     process.exit(1);
//   } else {
//     console.log(`[ ready ] http://${host}:${port}`);
//   }
// });

import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import Fastify from "fastify";

// Instantiate Fastify with some config
const app = Fastify({
  logger: false,
});

// Register your application as a normal plugin.
app.register(import("./app/routes/root"), {
    prefix: '/'
});

export default async (req, res) => {
    await app.ready();
    app.server.emit('request', req, res);
}