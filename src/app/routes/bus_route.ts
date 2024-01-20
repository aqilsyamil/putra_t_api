/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { Prisma, PrismaClient, bus_route } from '@prisma/client'
import { IParams } from "./interfaces/interface"

const prisma = new PrismaClient();

export default async function bus_route_routes(fastify: FastifyInstance, options) {
    /**
   * GET all bus_route
   */
      fastify.get(
        '/bus_routes',
        async function (request: FastifyRequest, reply: FastifyReply) {
    
          try {
            const bus_routes = await prisma.bus_route.findMany()
            return bus_routes
    
          } catch (error) {
            console.error(error);
          }
        }
      );

    /**
   * GET one bus_route by id
   */
  fastify.get(
    '/bus_route/:id',
    async function (
      request: FastifyRequest<{ Params: IParams }>,
      reply: FastifyReply
    ) {

      const { id } = request.params;

      try {
        const bus_route = await prisma.bus_route.findUnique({
            where: { id: id},
          })
        
        return bus_route

      } catch (error) {
        console.error(error);
      }
    }
  );
}
