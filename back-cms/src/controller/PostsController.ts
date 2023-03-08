import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Post } from "../entity/Posts";

export class PostController {

    private PostRepository = AppDataSource.manager.getRepository(Post)

    async all(req: Request, res: Response, next: NextFunction) {
        const page: number = req.query.page ? Number(req.query.page) : 1
        const take = 3
        const posts = this.PostRepository
        .createQueryBuilder("post")
        .select(["post.id", "post.title", "post.summary"])
        .orderBy("post.id", "DESC")
        .take(take)
        .skip((page - 1) * take )
        .getMany()
        return posts;
    }

    async one(req: Request, res: Response, next: NextFunction) {
        // return this.PostRepository.findOne(req.params.id);
    }

    async save(req: Request, res: Response, next: NextFunction) {
        return this.PostRepository.save(req.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        // let userToRemove = await this.PostRepository.findOne(request.params.id);
        // await this.PostRepository.remove(userToRemove);
    }
}