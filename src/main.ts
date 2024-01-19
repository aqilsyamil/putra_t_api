import Fastify from 'fastify';
import { app } from './app/app';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const url = process.env.DOMAIN_URL ?? `http://${host}:${port}`;

console.log(process.env.DOMAIN_URL)

// Instantiate Fastify with some config
const server = Fastify({
  logger: true,
});

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Forest Fire API',
      description: 'Forest Fire API Documentation',
      version: '1.0.0'
    },
    servers: [
      {
        url: url
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer'
        }
      }
    },
    tags: [
      {
        name: 'Root',
        description: 'Root endpoints'
      }
    ]
  }
});

// Register @fastify/swagger-ui plugin.
server.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (_request, _reply, next) {
      next();
    },
    preHandler: function (_request, _reply, next) {
      next();
    }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject) => {
    return swaggerObject;
  },
  transformSpecificationClone: true
});


// Register your application as a normal plugin.
server.register(app);

// Start listening.
// server.listen({ port, host }, (err) => {
//   if (err) {
//     server.log.error(err);
//     process.exit(1);
//   } else {
//     console.log(`[ ready ] http://${host}:${port}`);
//   }
// });

async function start() {
  await server.listen({
    host: host,
    port: port as number
  });

  server.swagger;
}

start().catch((err) => {
  server.log.error(err);
  process.exit(1);
});