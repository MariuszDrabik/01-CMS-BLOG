import { NextFunction, Request, Response, Router } from "express";
import { AppDataSource } from "../database/data-source";
import { Post } from "../entity/Posts";
import { PostController } from "../controller/PostsController";



export const postRouter = Router()
.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await new PostController().all(req, res, next)
        res.json(posts)
    } catch(err) {
        console.log('What?', err)
        next(err);
    }
})

.get('/search/:name?', async (req: Request, res: Response) => {
    const {name} = req.params
    const posts = await AppDataSource.manager.find(Post)
    res.json(posts)
})

.get('/:id',async (req: Request, res: Response) => {

})

.post('/', async (req, res, next) => {
    res.json(req.body)
})