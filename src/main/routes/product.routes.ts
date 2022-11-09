import ProductService from "@/data/services/Products.service";
import ProductsRepository from "@/infra/repositories/Product.repository";
import { 
    ProductGetAllController, 
    ProductCreateController 
} from "@/presentation/controllers/Product.controller";
import { Request, Response, Router } from "express";

export default (router: Router): void => {
    router.get("/products", async (req:Request, res:Response) => {
        const repository = new ProductsRepository()
        const service = new ProductService(repository)
        const controller = new ProductGetAllController(service)
        const response = await controller.handle()
        res.status(response.statusCode).json(response.data)
    })
    router.post("/products", async (req:Request, res:Response) => {
        const repository = new ProductsRepository()
        const service = new ProductService(repository)
        const controller = new ProductCreateController(service)
        const response = await controller.handle(req.body)
        res.status(response.statusCode).json(response.data)
    })
    router.get("/products/:code", (req:Request, res:Response) => {
        
    })
    router.delete("/products/:code", (req:Request, res:Response) => {
        
    })
    router.put("/products/:code", (req:Request, res:Response) => {
        
    })
}