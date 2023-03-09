interface PaginationInfo {
    currentPage: number;
    elementOnPage: number;
    allPages: number;
    numOfElem: number;
    hasNext: boolean;
    hasPrev: boolean;
}


export class Pagination {
    static async paginate(queryBuilder: any, req: any) {
        const page = Number(req.query.page) || 1;
        const take = Number(req.query.take) || 3;
        const skip = (page - 1) * take;

        const numberOfElements = await queryBuilder.getCount();
        const allPages = Math.ceil(numberOfElements / take)
        const currPage = skip / take + 1;
        const hasNext = currPage < allPages;
        const hasPrev = currPage > 1;

        const elements = await queryBuilder
        .skip(skip)
        .take(take)
        .getMany();

        const paginateInfo: PaginationInfo = {
            currentPage: page,
            elementOnPage: take,
            allPages: allPages,
            numOfElem: numberOfElements,
            hasNext,
            hasPrev,
        }

        return {
            elements,
            paginateInfo
        }
    }
}