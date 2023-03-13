import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Opinion } from "../entity/opinions";
import { Pagination } from "../utils/pagination";

export class OpinionController {

    private OpinionRepository = AppDataSource.manager.getRepository(Opinion)

    async all(req: Request, res: Response, next: NextFunction) {

        const opinion = this.OpinionRepository.createQueryBuilder("opinion")
        .orderBy("opinion.id", "DESC")
        .select("opinion.id")
        // .getMany()
        const { elements: elements, paginateInfo } =
        await Pagination.paginate(opinion, req)

        // console.log(post);
        return {
            opinion: elements,
            paginateInfo
        };
    }

    async one(req: Request, res: Response, next: NextFunction) {
        // return this.PostRepository.findOne(req.params.id);
    }

    async save(req: Request, res: Response, next: NextFunction) {
        return this.OpinionRepository.save(req.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        // let userToRemove = await this.PostRepository.findOne(request.params.id);
        // await this.PostRepository.remove(userToRemove);
    }
}