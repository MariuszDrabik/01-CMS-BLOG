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

.get('/search/:name?', async (req: Request, res: Response, next: NextFunction) => {
    console.log('what?')
})

.get('/:id',async (req: Request, res: Response, next: NextFunction) => {
    const opinion = await new OpinionController().one(req, res, next)
    res.json(opinion)
})

.post('/', async (req, res, next) => {
    res.json(req.body)
})