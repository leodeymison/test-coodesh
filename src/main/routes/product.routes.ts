import ProductService from "@/data/services/Products.service";
import ProductsRepository from "@/infra/repositories/Product.repository";
import { 
    ProductGetAllController, 
    ProductCreateController,
    ProductDeleteController,
    ProductGetOneController,
    ProductUpdateController
} from "@/presentation/controllers/Product.controller";
import { Request, Response, Router } from "express";

export default (router: Router): void => {
    router.get("/products/:page?", async (req:Request, res:Response) => {
        const page = parseInt(req.params.page) ? parseInt(req.params.page)  : 1
        const repository = new ProductsRepository()
        const service = new ProductService(repository)
        const controller = new ProductGetAllController(service)
        const response = await controller.handle(page)
        res.status(response.statusCode).json(response.data)
    })
    router.post("/products", async (req:Request, res:Response) => {
        const repository = new ProductsRepository()
        const service = new ProductService(repository)
        const controller = new ProductCreateController(service)
        const response = await controller.handle(req.body)
        res.status(response.statusCode).json(response.data)
    })
    router.get("/products/one/:code", async (req:Request, res:Response) => {
        const repository = new ProductsRepository()
        const service = new ProductService(repository)
        const controller = new ProductGetOneController(service)
        const response = await controller.handle(parseInt(req.params.code))
        res.status(response.statusCode).json(response.data)
    })
    router.delete("/products/:code", async (req:Request, res:Response) => {
        const repository = new ProductsRepository()
        const service = new ProductService(repository)
        const controller = new ProductDeleteController(service)
        const response = await controller.handle(parseInt(req.params.code))
        res.status(response.statusCode).json(response.data)
    })
    router.put("/products/:code", async (req:Request, res:Response) => {
        const repository = new ProductsRepository()
        const service = new ProductService(repository)
        const controller = new ProductUpdateController(service)
        const response = await controller.handle(parseInt(req.params.code), req.body)
        res.status(response.statusCode).json(response.data)
    })
}