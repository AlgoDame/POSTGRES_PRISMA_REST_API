import { Request, Response, Router } from "express";
import { GetHandler } from "../services/getHandlers";



export class BlogController {
    /**
     * Create the routes.
     *
     * @method loadRoutes
     */
    public loadRoutes(prefix: string, router: Router) {
        this.feed(prefix, router);
    }

    private feed(prefix: string, router: Router): any {
        router.get(prefix + "/feed", async (req: Request, res: Response) => {
            let publishedPosts = await GetHandler.getFeed();
            return res.status(200).json({
                message: "Success",
                data: publishedPosts
            })
        })
    }

}