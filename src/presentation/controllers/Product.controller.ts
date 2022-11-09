import { ProductResponse } from "@/domain/entities/products";
import { ProductUsecase } from "@/domain/usecase/products";
import { controller } from "../contracts/controller";
import { ok, serverError, HTTpResponse } from "../contracts/http";

export class ProductGetAllController implements controller {
    constructor(private readonly Product: ProductUsecase){}
    async handle(): Promise<HTTpResponse<Array<ProductResponse>>> {
        try{
            const product = await this.Product.GetAll()
            return ok<Array<ProductResponse>>(product)
        } catch (error) {
            return serverError(error)
        }
    }
}
