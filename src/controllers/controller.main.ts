import { NextFunction, Request, Response } from 'express';

export function indexWelcome(req: Request, res: Response, next: NextFunction) {
    console.log(req.body)
    return res.render("main/index")
};
