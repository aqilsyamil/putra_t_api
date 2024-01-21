/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import bus_route_routes from "./bus_route";

async function routes(fastify: FastifyInstance, options) {
    fastify.get('/', async function (request: FastifyRequest, reply: FastifyReply) {
        return { root: false }
      })
}

export default {routes, bus_route_routes}