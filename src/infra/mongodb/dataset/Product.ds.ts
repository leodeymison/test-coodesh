import { ProductResponse, ProductScore, ProductUpdate } from "@/domain/entities/products";
import { ProductUsecase } from "@/domain/usecase/products";
import ProductsSchema from "../schema/Products.schema";

class ProductDS implements ProductUsecase {
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
    async Create(data: ProductScore): Promise<ProductResponse> {
        const product:any = await ProductsSchema.create<ProductResponse>(Object.assign({}, data, {
            code: Date.now(),
            created_t: Date.now(),
            last_modified_t: Date.now(),
            imported_t: new Date()
        }));
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