import { Request, Response, Router } from "express";
import { AppDataSource } from "../data-source";
import { Post } from "../entity/posts";



export const postRouter = Router()
.get('/', async (req: Request, res: Response) => {

    const page: number = req.query.page ? Number(req.query.page) : 1

    console.log(page)
    const take = 3
    const posts = await AppDataSource.manager
    .getRepository(Post)
    .createQueryBuilder("post")
    .select(["post.id", "post.title", "post.summary"])
    .orderBy("post.id", "DESC")
    .take(take)
    .skip((page - 1) * take )
    .getMany()
    res.json(posts)
})

.get('/search/:name?', async (req: Request, res: Response) => {
    const {name} = req.params 
    const posts = await AppDataSource.manager.find(Post)
    res.json(posts)
})

.get('/:id',async (req: Request, res: Response) => {

})

.post('/', async (req, res, next) => {

})