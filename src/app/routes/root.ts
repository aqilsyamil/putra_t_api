/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function routes(fastify, options) {

  fastify.get('/feed', async (req, res) => {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: { author: true },
    })
    res.json(posts)
  })
  
  fastify.post('/post', async (req, res) => {
    const { title, content, authorEmail } = req.body
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: false,
        author: { connect: { email: authorEmail } },
      },
    })
    res.json(post)
  })
  
  fastify.put('/publish/:id', async (req, res) => {
    const { id } = req.params
    const post = await prisma.post.update({
      where: { id },
      data: { published: true },
    })
    res.json(post)
  })
  
  fastify.delete('/user/:id', async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.delete({
      where: {
        id,
      },
    })
    res.json(user)
  })
  

  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world" };
  });

  fastify.get("/hi", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hi: "zakiego" };
  });
}