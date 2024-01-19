/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function routes(fastify: FastifyInstance, options) {

  fastify.post<{
    Body: ISignupBody
  }>(`/signup`, async (req, res) => {
    const { name, email, posts } = req.body
  
    const postData = posts?.map((post: Prisma.PostCreateInput) => {
      return { title: post?.title, content: post?.content }
    })
  
    const result = await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: postData,
        },
      },
    })
    return result
  })
  
  fastify.post<{
    Body: ICreatePostBody
  }>(`/post`, async (req, res) => {
    const { title, content, authorEmail } = req.body
    const result = await prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { email: authorEmail } },
      },
    })
    return result
  })
  
  fastify.put<{
    Params: IPostByIdParam
  }>('/post/:id/views', async (req, res) => {
    const { id } = req.params
  
    try {
      const post = await prisma.post.update({
        where: { id: Number(id) },
        data: {
          viewCount: {
            increment: 1,
          },
        },
      })
  
      return post
    } catch (error) {
      return { error: `Post with ID ${id} does not exist in the database` }
    }
  })
  
  fastify.put<{
    Params: IPostByIdParam
  }>('/publish/:id', async (req, res) => {
    const { id } = req.params
  
    try {
      const postData = await prisma.post.findUnique({
        where: { id: Number(id) },
        select: {
          published: true,
        },
      })
  
      const updatedPost = await prisma.post.update({
        where: { id: Number(id) || undefined },
        data: { published: !postData?.published },
      })
      return updatedPost
    } catch (error) {
      return { error: `Post with ID ${id} does not exist in the database` }
    }
  })
  
  fastify.delete<{
    Params: IPostByIdParam
  }>(`/post/:id`, async (req, res) => {
    const { id } = req.params
    const post = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    })
    return post
  })
  
  fastify.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    return users
  })
  
  fastify.get<{
    Params: IPostByIdParam
  }>('/user/:id/drafts', async (req, res) => {
    const { id } = req.params
  
    const drafts = await prisma.user
      .findUnique({
        where: { id: Number(id) },
      })
      .posts({
        where: { published: false },
      })
  
    return drafts
  })
  
  fastify.get<{
    Params: IPostByIdParam
  }>(`/post/:id`, async (req, res) => {
    const { id } = req.params
  
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
    })
    return post
  })
  
  fastify.get<{
    Querystring: IFeedQueryString
  }>('/feed', async (req, res) => {
    const { searchString, skip, take, orderBy } = req?.query || {};
  
    const or: Prisma.PostWhereInput = searchString
      ? {
        OR: [
          { title: { contains: searchString as string } },
          { content: { contains: searchString as string } },
        ],
      }
      : {}
  
    const posts = await prisma.post.findMany({
      where: {
        published: true,
        ...or,
      },
      include: { author: true },
      take: Number(take) || undefined,
      skip: Number(skip) || undefined,
      orderBy: {
        updatedAt: orderBy as Prisma.SortOrder,
      },
    })
  
    return posts
  })
  interface IFeedQueryString {
    searchString: string | null
    skip: number | null
    take: number | null
    orderBy: Prisma.SortOrder | null
  }
  
  interface IPostByIdParam {
    id: number
  }
  
  interface ICreatePostBody {
    title: string
    content: string | null
    authorEmail: string
  }
  
  interface ISignupBody {
    name: string | null
    email: string
    posts: Prisma.PostCreateInput[]
  }
  

  fastify.get("/",
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
  async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({
      message: 'Hello Worldssss',
      result: null
    });
  });

  fastify.get("/hi", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hi: "zakiego" };
  });
}