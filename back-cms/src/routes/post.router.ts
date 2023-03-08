import { NextFunction, Request, Response, Router } from "express";
import { AppDataSource } from "../database/data-source";
import { Post } from "../entity/Posts";
import { PostController } from "../controller/PostsController";



export const postRouter = Router()
.get('/', async (req: Request, res: Response, next: NextFunction) => {

    const posts = await new PostController().all(req, res, next)
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
    res.json(req.body)
})

const authentication = (req: Request, res: Response, next: Function) => {
    console.log(req);
    next();
    return
    res.json({
        message: 'You have shall not pass'
    })
};

// export const Routes2 = [{
//     method: "get",
//     route: "/users",
//     controller: PostController,
//     action: "all"
// }, {
//     method: "get",
//     route: "/users/:id",
//     controller: PostController,
//     action: "one"
// }, {
//     method: "post",
//     route: "/users",
//     auth: authentication,
//     controller: PostController,
//     action: "save"
// }, {
//     method: "delete", route: "/users/:id", controller: PostController,
//     auth: authentication,
//     action: "remove"
// }];

// export const Routes3 = [{
//     method: "get",
//     route: "/siki",
//     controller: PostController,
//     action: "all"
//  }, {
//     method: "get",
//     route: "/users/:id",

//     controller: PostController,
//     action: "one"
//  }, {
//     method: "post",
//     route: "/users",
//     controller: PostController,
//     action: "save"
//  }, {
//     method: "delete", route: "/users/:id", controller: PostController,
//     action: "remove"
// }];