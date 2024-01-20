/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { Prisma, PrismaClient, bus } from '@prisma/client'
import { IParams } from "./interfaces/interface";

const prisma = new PrismaClient();

export default async function bus_routes(fastify: FastifyInstance, options) {
    /**
   * GET all bus
   */
    fastify.get(
        '/buses',
        async function (request: FastifyRequest, reply: FastifyReply) {
    
          try {
            const buses = await prisma.bus.findMany()
            return buses
    
          } catch (error) {
            console.error(error);
          }
        }
      );

    /**
   * GET one bus by id
   */
    fastify.get(
      '/bus/:id',
      async function (
        request: FastifyRequest<{ Params: IParams }>,
        reply: FastifyReply
      ) {
  
        const { id } = request.params;
  
        try {
          const bus = await prisma.bus.findUnique({
              where: { id: id},
            })
          
          return bus
  
        } catch (error) {
          console.error(error);
        }
      }
    );
}