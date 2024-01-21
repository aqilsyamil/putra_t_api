var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var root_exports = {};
__export(root_exports, {
  default: () => routes
});
module.exports = __toCommonJS(root_exports);
var import_client = require("@prisma/client");
const prisma = new import_client.PrismaClient();
async function routes(fastify, options) {
  fastify.get(
    "/bus_routes",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      try {
        const bus_routes = await prisma.bus_route.findMany();
        return reply.send(bus_routes);
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/bus_route/:id",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id } = request.params;
      try {
        const bus_route = await prisma.bus_route.findUnique({
          where: { id }
        });
        return bus_route;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/bus_stops",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      try {
        const bus_stops = await prisma.bus_stop.findMany();
        return bus_stops;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/bus_stop/:id",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id } = request.params;
      try {
        const bus_stop = await prisma.bus_stop.findUnique({
          where: { id }
        });
        return bus_stop;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/buses",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      try {
        const buses = await prisma.bus.findMany();
        return buses;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/bus/:id",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id } = request.params;
      try {
        const bus = await prisma.bus.findUnique({
          where: { id }
        });
        return bus;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/drivers",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      try {
        const drivers = await prisma.driver.findMany();
        return reply.send(drivers);
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/driver/:id",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id } = request.params;
      try {
        const driver = await prisma.driver.findUnique({
          where: { id }
        });
        return driver;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/routepointpaths",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      try {
        const routepointpaths = await prisma.routepointpath.findMany();
        return routepointpaths;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/routepointpath/:id",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id } = request.params;
      try {
        const routepointpath = await prisma.routepointpath.findUnique({
          where: { id }
        });
        return routepointpath;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/driver_buses",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      try {
        const driver_buses = await prisma.driver_bus.findMany();
        return driver_buses;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.get(
    "/driver_bus/:id",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id } = request.params;
      try {
        const driver_bus2 = await prisma.driver_bus.findUnique({
          where: { id }
        });
        return driver_bus2;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.post(
    "/driver_bus/add",
    {
      schema: {
        description: "post some data",
        tags: ["Root"],
        summary: "qwerty",
        body: {
          type: "object",
          properties: {
            id: { type: "string" },
            driver_id: { type: "string" },
            bus_id: { type: "string" },
            occupancy_status: { type: "string" },
            bus_lat: { type: "number" },
            bus_lng: { type: "number" }
          }
        }
        // response: {
        //   201: {
        //     description: 'Successful response',
        //     type: 'object',
        //     properties: {
        //       hello: { type: 'string' }
        //     }
        //   },
        //   default: {
        //     description: 'Default response',
        //     type: 'object',
        //     properties: {
        //       foo: { type: 'string' }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id, driver_id, bus_id, occupancy_status, bus_lat, bus_lng } = request.body;
      try {
        const driver_bus_response = await prisma.driver_bus.create({
          data: {
            id,
            driver_id,
            bus_id,
            occupancy_status,
            bus_lat,
            bus_lng
          }
        });
        return driver_bus_response;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.put(
    "/driver_bus/:id",
    {
      schema: {
        description: "post some data",
        tags: ["Root"],
        summary: "qwerty",
        params: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "id"
            }
          }
        },
        body: {
          type: "object",
          properties: {
            driver_id: { type: "string" },
            bus_id: { type: "string" },
            occupancy_status: { type: "string" },
            bus_lat: { type: "number" },
            bus_lng: { type: "number" }
          }
        }
        // response: {
        //   201: {
        //     description: 'Successful response',
        //     type: 'object',
        //     properties: {
        //       hello: { type: 'string' }
        //     }
        //   },
        //   default: {
        //     description: 'Default response',
        //     type: 'object',
        //     properties: {
        //       foo: { type: 'string' }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id } = request.params;
      const { driver_id, bus_id, occupancy_status, bus_lat, bus_lng } = request.body;
      try {
        const updated_driver_bus = await prisma.driver_bus.update({
          where: { id },
          data: {
            driver_id,
            bus_id,
            occupancy_status,
            bus_lat,
            bus_lng
          }
        });
        return updated_driver_bus;
      } catch (error) {
        console.error(error);
      }
    }
  );
  fastify.delete(
    "/driver_bus/:id",
    {
      schema: {
        description: "Root endpoint",
        tags: ["Root"]
        // response: {
        //   200: {
        //     description: 'Succesful response',
        //     type: 'object',
        //     properties: {
        //       message: { type: 'string' },
        //       result: { type: 'object', nullable: true }
        //     }
        //   }
        // }
      }
    },
    async function(request, reply) {
      const { id } = request.params;
      try {
        const driver_bus2 = await prisma.driver_bus.delete({
          where: {
            id
          }
        });
        return driver_bus2;
      } catch (error) {
        console.error(error);
      }
    }
  );
}
