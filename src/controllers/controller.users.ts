import { Request, Response, NextFunction } from "express";

export function renderLogin(req: Request, res: Response, next: NextFunction) {
    return res.render("users/login")
}

export function login(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
        return res.redirect("/login");
    } else if (!req.body.username) {
        return res.redirect("/login");
    };
    res.cookie("key", req.body.username, { secure: true, maxAge: Date.now() * 2 });
    res.redirect("/")
}