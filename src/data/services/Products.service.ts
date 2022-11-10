import { 
    ProductResponse, 
    ProductScore, 
    ProductUpdate 
} from "@/domain/entities/products";
import { DeleteScore, Pagination, UpdateScore } from "@/domain/entities/response";
import { ProductUsecase } from "@/domain/usecase/products";

class ProductService implements ProductUsecase {
    constructor(private readonly ProductRepository: ProductUsecase){}
    async GetAll(page: number): Promise<Pagination<Array<ProductResponse>>> {
        return await this.ProductRepository.GetAll(page)
    }
    async GetOne(code: number): Promise<ProductResponse> {
        return await this.ProductRepository.GetOne(code)
    }
    async Create(data: ProductScore): Promise<ProductResponse> {
        return await this.ProductRepository.Create(data)
    }
    async Delete(code: number): Promise<DeleteScore> {
        return await this.ProductRepository.Delete(code)
    }
    async Update(code: number, body: ProductUpdate): Promise<UpdateScore> {
        return await this.ProductRepository.Update(code, body)
    }
}

export default ProductService