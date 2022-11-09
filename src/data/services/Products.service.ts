import { 
    ProductResponse, 
    ProductUpdate 
} from "@/domain/entities/products";
import { ProductUsecase } from "@/domain/usecase/products";

class ProductService implements ProductUsecase {
    constructor(private readonly ProductRepository: ProductUsecase){}
    async GetAll(): Promise<ProductResponse[]> {
        return await this.ProductRepository.GetAll()
    }
    async GetOne(code: number): Promise<ProductResponse> {
        return await this.ProductRepository.GetOne(code)
    }
    async Delete(code: number) {
        return await this.ProductRepository.Delete(code)
    }
    async Update(code: number, body: ProductUpdate) {
        return await this.ProductRepository.Update(code, body)
    }
}

export default ProductService