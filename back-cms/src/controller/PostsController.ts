import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Post } from "../entity/Posts";
import { Pagination } from "../utils/Pagination";

export class PostController {

    private PostRepository = AppDataSource.manager.getRepository(Post)

    async all(req: Request, res: Response, next: NextFunction) {

        const post = this.PostRepository.createQueryBuilder("post")
            .orderBy("post.id", "DESC")
        const { elements: posts, paginateInfo } =
            await Pagination.paginate(post, req)

        return {
            posts,
            paginateInfo
        };
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