var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_fastify = __toESM(require("fastify"), 1);
var import_app = require("./app/app");
var import_swagger = __toESM(require("@fastify/swagger"), 1);
var import_swagger_ui = __toESM(require("@fastify/swagger-ui"), 1);
const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3e3;
const server = (0, import_fastify.default)({
  logger: true
});
server.register(import_swagger.default, {
  openapi: {
    info: {
      title: "Forest Fire API",
      description: "Forest Fire API Documentation",
      version: "1.0.0"
    },
    servers: [
      {
        url: `http://${host}:${port}`
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer"
        }
      }
    },
    tags: [
      {
        name: "Root",
        description: "Root endpoints"
      }
    ]
  }
});
server.register(import_swagger_ui.default, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false
  },
  uiHooks: {
    onRequest: function(_request, _reply, next) {
      next();
    },
    preHandler: function(_request, _reply, next) {
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
server.register(import_app.app);
async function start() {
  await server.listen({
    host,
    port
  });
  server.swagger;
}
start().catch((err) => {
  server.log.error(err);
  process.exit(1);
});
