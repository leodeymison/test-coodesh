import { ProductResponse, ProductUpdate } from "@/domain/entities/products";
import { productInfra } from "@/infra/contracts/products";
import ProductsSchema from "../schema/Products.schema";

class ProductDS implements productInfra {
    async GetAll(): Promise<ProductResponse[]> {
        const product = await ProductsSchema.find<ProductResponse>();
        return product
    }
    async GetOne(code: number): Promise<ProductResponse> {
        const product = await ProductsSchema.findOne<ProductResponse>({
            where: {
                code
            }
        });
        return product
    }
    async Delete(code: number) {
        const product = await ProductsSchema.deleteOne({
            where: {
                code
            }
        });
        return product
    }
    async Update(code: number, body: ProductUpdate) {
        const product = await ProductsSchema.updateOne({
            where: {
                code
            }
        }, body);
        return product
    }
}

export default new ProductDS