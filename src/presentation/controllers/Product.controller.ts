import { ProductResponse, ProductScore, ProductUpdate } from "@/domain/entities/products";
import { DeleteScore, Pagination, UpdateScore } from "@/domain/entities/response";
import { ProductUsecase } from "@/domain/usecase/products";
import { controller } from "../contracts/controller";
import { ok, serverError, HTTpResponse } from "../contracts/http";

export class ProductGetAllController implements controller {
    constructor(private readonly Product: ProductUsecase){}
    async handle(page: number): Promise<HTTpResponse<Pagination<Array<ProductResponse>>>> {
        try{
            const product = await this.Product.GetAll(page)
            return ok<Pagination<Array<ProductResponse>>>(product)
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

export class ProductUpdateController implements controller {
    constructor(private readonly Product: ProductUsecase){}
    async handle(code: number, body: ProductUpdate): Promise<HTTpResponse<UpdateScore>> {
        try{
            const product = await this.Product.Update(code, body)
            return ok<UpdateScore>(product)
        } catch (error) {
            return serverError(error)
        }
    }
}
