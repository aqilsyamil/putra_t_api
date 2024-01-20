/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";

export default async function routes(fastify: FastifyInstance, options) {
    fastify.get('/', async function (request: FastifyRequest, reply: FastifyReply) {
        return { root: true }
      })
}