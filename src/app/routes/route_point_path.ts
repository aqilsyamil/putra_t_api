/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { Prisma, PrismaClient, routepointpath } from '@prisma/client'
import { IParams } from "./interfaces/interface";

const prisma = new PrismaClient();

export default async function routepointpath_routes(fastify: FastifyInstance, options) {
    /**
   * GET all bus_stop
   */
    fastify.get(
        '/routepointpaths',
        async function (request: FastifyRequest, reply: FastifyReply) {
    
            try {
            const routepointpaths = await prisma.routepointpath.findMany()
            return routepointpaths
    
            } catch (error) {
            console.error(error);
            }
        }
        );

        /**
   * GET one routepointpath by id
   */
  fastify.get(
    '/routepointpath/:id',
    async function (
      request: FastifyRequest<{ Params: IParams }>,
      reply: FastifyReply
    ) {

      const { id } = request.params;

      try {
        const routepointpath = await prisma.routepointpath.findUnique({
            where: { id: id},
          })
        
        return routepointpath

      } catch (error) {
        console.error(error);
      }
    }
  );
}