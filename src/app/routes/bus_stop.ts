/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { Prisma, PrismaClient, bus_stop } from '@prisma/client'
import { IParams } from "./interfaces/interface";

const prisma = new PrismaClient();

export default async function bus_stop_routes(fastify: FastifyInstance, options) {
    /**
   * GET all bus_stop
   */
    fastify.get(
        '/bus_stops',
        async function (request: FastifyRequest, reply: FastifyReply) {
    
          try {
            const bus_stops = await prisma.bus_stop.findMany()
            return bus_stops
    
          } catch (error) {
            console.error(error);
          }
        }
      );

            /**
   * GET one bus_stop by id
   */
  fastify.get(
    '/bus_stop/:id',
    async function (
      request: FastifyRequest<{ Params: IParams }>,
      reply: FastifyReply
    ) {

      const { id } = request.params;

      try {
        const bus_stop = await prisma.bus_stop.findUnique({
            where: { id: id},
          })
        
        return bus_stop

      } catch (error) {
        console.error(error);
      }
    }
  );
}