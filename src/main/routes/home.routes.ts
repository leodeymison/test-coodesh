import { Request, Response, Router } from "express";

export default (router: Router): void => {
    router.get("/", (req:Request, res:Response) => {
        res.send("hello wordld")
    })
}