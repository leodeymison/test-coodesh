import { ProductResponse, ProductScore } from "@/domain/entities/products";
import { DeleteScore } from "@/domain/entities/response";
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

export class ProductCreateController implements controller {
    constructor(private readonly Product: ProductUsecase){}
    async handle(data: ProductScore): Promise<HTTpResponse<ProductResponse>> {
        try{
            const product = await this.Product.Create(data)
            return ok<ProductResponse>(product)
        } catch (error) {
            return serverError(error)
        }
    }
}

export class ProductDeleteController implements controller {
    constructor(private readonly Product: ProductUsecase){}
    async handle(code: number): Promise<HTTpResponse<DeleteScore>> {
        try{
            const product = await this.Product.Delete(code)
            return ok<DeleteScore>(product)
        } catch (error) {
            return serverError(error)
        }
    }
}

export class ProductGetOneController implements controller {
    constructor(private readonly Product: ProductUsecase){}
    async handle(code: number): Promise<HTTpResponse<ProductResponse>> {
        try{
            const product = await this.Product.GetOne(code)
            return ok<ProductResponse>(product)
        } catch (error) {
            return serverError(error)
        }
    }
}
