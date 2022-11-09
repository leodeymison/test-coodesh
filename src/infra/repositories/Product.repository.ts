import { ProductResponse, ProductScore, ProductUpdate } from "@/domain/entities/products";
import { DeleteScore } from "@/domain/entities/response";
import { ProductUsecase } from "@/domain/usecase/products";

import ProductDS from "../mongodb/dataset/Product.ds";

class ProductsRepository implements ProductUsecase {
    async Details() {
        return {}
    }
    async GetAll(): Promise<Array<ProductResponse>> {
        const product = await ProductDS.GetAll()
        return product
    }
    async GetOne(code: number): Promise<ProductResponse> {
        const product = await ProductDS.GetOne(code)
        return product
    }
    async Create(data: ProductScore): Promise<ProductResponse> {
        const product = await ProductDS.Create(data)
        return product
    }
    async Delete(code: number): Promise<DeleteScore> {
        const product = await ProductDS.Delete(code)
        return product
    }
    async Update(code: number, body: ProductUpdate) {
        const product = await ProductDS.Update(code, body)
        return product
    }
}

export default ProductsRepository