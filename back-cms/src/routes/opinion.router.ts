import { NextFunction, Request, Response, Router } from "express";
import { AppDataSource } from "../database/data-source";
import { Opinion } from "../entity/opinions";
import { OpinionController } from "../controller/OpinionController";



export const opinionRouter = Router()
.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await new OpinionController().all(req, res, next)
        res.json(posts)
    } catch(err) {
        console.log('What?', err)
        next(err);
    }
})

.get('/search/:name?', async (req: Request, res: Response) => {
    const {name} = req.params
    const posts = await AppDataSource.manager.find(Opinion)
    res.json(posts)
})

.get('/:id',async (req: Request, res: Response) => {

})

.post('/', async (req, res, next) => {
    res.json(req.body)
})