import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export class GetHandler {
    public static async getFeed(){
        let publishedPosts = await prisma.post.findMany({
            where: {
                published: true
            },
            include: {
                author: true
            }
        })

        console.log("Published Posts: ", publishedPosts)
        return publishedPosts;
    }
}