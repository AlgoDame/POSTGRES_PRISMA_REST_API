import express from 'express'
import { BlogController } from '../controllers/blogControllers'

const router = express.Router()
new BlogController().loadRoutes('/blog', router)

export { router as blogRouter }