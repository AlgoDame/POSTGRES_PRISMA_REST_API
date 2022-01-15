import { PrismaClient } from '@prisma/client'
import express from 'express'
import dotenv from "dotenv";
import { blogRouter } from './routes/blogRoutes';
dotenv.config()

const prisma = new PrismaClient()
const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use('/api', blogRouter);

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.listen(port, () =>
  console.log(`REST API server ready at: http://localhost:${port}`)
)