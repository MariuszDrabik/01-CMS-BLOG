import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Opinion } from "../entity/opinions";
import { Pagination } from "../utils/pagination";
import { url } from "inspector";

export class OpinionController {

    private OpinionRepository = AppDataSource.manager.getRepository(Opinion)

    async all(req: Request, res: Response, next: NextFunction) {
        const { title } = req.params;
        console.log(title);
        const opinion = await this.OpinionRepository.createQueryBuilder("opinion")
        .orderBy("opinion.id", "DESC")
        .select("opinion.id")
        .where(
            "opinion.title like :title",
             {title: `%${title ?? ''}%`})
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
        const { id } = req.params;
        const opinion = await this.OpinionRepository.findOne({
            select: ['id', 'title', 'summary', 'body', 'rating', 'url', 'tags'],
            where: {
                id,
            }
        });
        return {
            opinion
        }
    }

    async save(req: Request, res: Response, next: NextFunction) {
        return this.OpinionRepository.save(req.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        // let userToRemove = await this.PostRepository.findOne(request.params.id);
        // await this.PostRepository.remove(userToRemove);
    }
}