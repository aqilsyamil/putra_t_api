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
  fastify.post(`/signup`, async (req, res) => {
    const { name, email, posts } = req.body;
    const postData = posts?.map((post) => {
      return { title: post?.title, content: post?.content };
    });
    const result = await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: postData
        }
      }
    });
    return result;
  });
  fastify.post(`/post`, async (req, res) => {
    const { title, content, authorEmail } = req.body;
    const result = await prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { email: authorEmail } }
      }
    });
    return result;
  });
  fastify.put("/post/:id/views", async (req, res) => {
    const { id } = req.params;
    try {
      const post = await prisma.post.update({
        where: { id: Number(id) },
        data: {
          viewCount: {
            increment: 1
          }
        }
      });
      return post;
    } catch (error) {
      return { error: `Post with ID ${id} does not exist in the database` };
    }
  });
  fastify.put("/publish/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const postData = await prisma.post.findUnique({
        where: { id: Number(id) },
        select: {
          published: true
        }
      });
      const updatedPost = await prisma.post.update({
        where: { id: Number(id) || void 0 },
        data: { published: !postData?.published }
      });
      return updatedPost;
    } catch (error) {
      return { error: `Post with ID ${id} does not exist in the database` };
    }
  });
  fastify.delete(`/post/:id`, async (req, res) => {
    const { id } = req.params;
    const post = await prisma.post.delete({
      where: {
        id: Number(id)
      }
    });
    return post;
  });
  fastify.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    return users;
  });
  fastify.get("/user/:id/drafts", async (req, res) => {
    const { id } = req.params;
    const drafts = await prisma.user.findUnique({
      where: { id: Number(id) }
    }).posts({
      where: { published: false }
    });
    return drafts;
  });
  fastify.get(`/post/:id`, async (req, res) => {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: { id: Number(id) }
    });
    return post;
  });
  fastify.get("/feed", async (req, res) => {
    const { searchString, skip, take, orderBy } = req?.query || {};
    const or = searchString ? {
      OR: [
        { title: { contains: searchString } },
        { content: { contains: searchString } }
      ]
    } : {};
    const posts = await prisma.post.findMany({
      where: {
        published: true,
        ...or
      },
      include: { author: true },
      take: Number(take) || void 0,
      skip: Number(skip) || void 0,
      orderBy: {
        updatedAt: orderBy
      }
    });
    return posts;
  });
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });
  fastify.get("/hi", async (request, reply) => {
    return { hi: "zakiego" };
  });
}
