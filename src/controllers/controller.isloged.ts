import { Request, Response, NextFunction } from "express";

export function isLogged(req: Request, res: Response, next: NextFunction) {
    if (!req.cookies) {
        req.cookies = {}
        req.cookies.isLogged = false;
        return res.redirect("/login");
    } else {
        req.cookies.isLogged = true;
    };
    next();
}