import { NextFunction, Request, Response } from "express";


export class ValidationError extends Error {}

export class NotFoundError extends Error {}

export function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof NotFoundError) {
        res.status(404);
        res.json({
            error: '404 ' + err.message,
        });
        return
    }
    if (err.name === 'CastError') {
        res.status(404);
        res.json({
            error: '404 ' + 'Nic tu nie ma',
        });
        return
    }
    if (err.name === 'TypeError' || err.name === 'Error') {
        res.status(500);
        res.json({
            error: 'Hutson we got problem',
        });
        return
    }
    if (err instanceof ValidationError) {
        res.status(400);
        res.json({
            error: err.message,
        });
        return
    }
        console.error(err);
        res.status(500);
        res.json({
            error: 'Coś poszło nie tak',
        });
        return

}
