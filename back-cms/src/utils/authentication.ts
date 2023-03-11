import { Request, Response, } from 'express';



const authentication = (req: Request, res: Response, next: Function) => {
    console.log(req);
    next();
    return
    res.json({
        message: 'You have shall not pass'
    })
};