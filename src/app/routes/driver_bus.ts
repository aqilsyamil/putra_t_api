/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { Prisma, PrismaClient, driver_bus } from '@prisma/client'
import { IParams } from "./interfaces/interface";

const prisma = new PrismaClient();

export default async function routes(fastify: FastifyInstance, options) {
    fastify.get(
        '/driver_buses',
        {
          schema: {
            description: 'Root endpoint',
            tags: ['Root'],
            response: {
              200: {
                description: 'Succesful response',
                type: 'object',
                properties: {
                  message: { type: 'string' },
                  result: { type: 'object', nullable: true }
                }
              }
            }
          }
        },
        async function (request: FastifyRequest, reply: FastifyReply) {
    
          try {
            const driver_buses = await prisma.driver_bus.findMany()
            return driver_buses
    
          } catch (error) {
            console.error(error);
          }
        }
      );

    /**
   * GET one driver_bus by id
   */
    fastify.get(
      '/driver_bus/:id',
      {
        schema: {
          description: 'Root endpoint',
          tags: ['Root'],
          response: {
            200: {
              description: 'Succesful response',
              type: 'object',
              properties: {
                message: { type: 'string' },
                result: { type: 'object', nullable: true }
              }
            }
          }
        }
      },
      async function (
        request: FastifyRequest<{ Params: IParams }>,
        reply: FastifyReply
      ) {
  
        const { id } = request.params;
  
        try {
          const driver_bus = await prisma.driver_bus.findUnique({
              where: { id: id },
            })
          
          return driver_bus
  
        } catch (error) {
          console.error(error);
        }
      }
    );

    /**
   * ADD new driver_bus
   */
    fastify.post(
      '/driver_bus/add',
      {
        schema: {
          description: 'post some data',
          tags: ['Root'],
          summary: 'qwerty',
          body: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              driver_id: { type: 'string' },
              bus_id: { type: 'string' },
              occupancy_status: { type: 'string' },
              bus_lat: { type: 'number' },
              bus_lng: { type: 'number' },
            }
          },
          response: {
            201: {
              description: 'Successful response',
              type: 'object',
              properties: {
                hello: { type: 'string' }
              }
            },
            default: {
              description: 'Default response',
              type: 'object',
              properties: {
                foo: { type: 'string' }
              }
            }
          }
        }
      },
      async function (
        request: FastifyRequest<{
          Body: driver_bus;
        }>,
        reply: FastifyReply
      ) {
        const { id, driver_id, bus_id, occupancy_status, bus_lat, bus_lng } =
          request.body;
  
        try {
          const driver_bus_response = await prisma.driver_bus.create({
            data: {
              id: id,
              driver_id: driver_id,
              bus_id: bus_id,
              occupancy_status: occupancy_status,
              bus_lat: bus_lat,
              bus_lng: bus_lng
            },
          })
          return driver_bus_response;
        } catch (error) {
          console.error(error);
        }
      }
    );

     /** UPDATE product by driver_bus */
  fastify.put(
    '/driver_bus/:id',
    {
      schema: {
        description: 'post some data',
        tags: ['Root'],
        summary: 'qwerty',
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'id'
            }
          }
        },
        body: {
          type: 'object',
          properties: {
            driver_id: { type: 'string' },
            bus_id: { type: 'string' },
            occupancy_status: { type: 'string' },
            bus_lat: { type: 'number' },
            bus_lng: { type: 'number' },
          }
        },
        response: {
          201: {
            description: 'Successful response',
            type: 'object',
            properties: {
              hello: { type: 'string' }
            }
          },
          default: {
            description: 'Default response',
            type: 'object',
            properties: {
              foo: { type: 'string' }
            }
          }
        }
      }
    },
    async function (
      request: FastifyRequest<{
        Params: IParams;
        Body: driver_bus;
      }>,
      reply: FastifyReply
    ) {
      const { id } = request.params;
      const { driver_id, bus_id, occupancy_status, bus_lat, bus_lng } = request.body;

      try {
        const updated_driver_bus = await prisma.driver_bus.update({
          where: { id: id },
          data: {
            driver_id: driver_id,
            bus_id: bus_id,
            occupancy_status: occupancy_status,
            bus_lat: bus_lat,
            bus_lng: bus_lng
          },
        })

        return updated_driver_bus
      
      } catch (error) {
        console.error(error);
      }
    }
  );

  /**
   * DELETE product by id
   */

  fastify.delete(
    '/driver_bus/:id',
    {
      schema: {
        description: 'Root endpoint',
        tags: ['Root'],
        response: {
          200: {
            description: 'Succesful response',
            type: 'object',
            properties: {
              message: { type: 'string' },
              result: { type: 'object', nullable: true }
            }
          }
        }
      }
    },
    async function (
      request: FastifyRequest<{
        Params: IParams;
      }>,
      reply: FastifyReply
    ) {
      const { id } = request.params;

      try {
        const driver_bus = await prisma.driver_bus.delete({
          where: {
            id: id,
          },
        })
        return driver_bus
      } catch (error) {
        console.error(error);
      }
    }
  );
}