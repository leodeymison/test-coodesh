import { ProductResponse, ProductScore, ProductUpdate } from "@/domain/entities/products";
import { DeleteScore, Pagination, UpdateScore } from "@/domain/entities/response";
import { ProductUsecase } from "@/domain/usecase/products";
import ProductsSchema from "../schema/Products.schema";

class ProductDS implements ProductUsecase {
    async GetAll(page: number): Promise<Pagination<Array<ProductResponse>>> {
        const limit = 1
        const skip = limit * (page - 1)
        const allRegisters = (await ProductsSchema.find()).length
        const res = allRegisters / limit
        const cont = (allRegisters / limit) > parseInt(res.toFixed(0)) ? parseInt(res.toFixed(0)) + 1 : res
        const body = await ProductsSchema.find<ProductResponse>().skip(skip).limit(limit)
        return {
            page,
            quant: cont,
            body
        }
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
    async Delete(code: number): Promise<DeleteScore> {
        const product = await ProductsSchema.deleteOne({
            where: {
                code
            }
        });
        return product
    }
    async Update(code: number, body: ProductUpdate):Promise<UpdateScore> {
        const product = await ProductsSchema.updateOne({
            where: {
                code
            }
        }, {
            ...body,
            last_modified_t: Date.now()
        });
        return product
    }
}

export default new ProductDS