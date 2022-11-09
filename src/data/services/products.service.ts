import { 
    ProductResponse, 
    ProductUpdate 
} from "@/domain/entities/products";
import { ProductUsecase } from "@/domain/usecase/products";

class ProductService implements ProductUsecase {
    constructor(private readonly ProductRepository: ProductUsecase){}
    Details() {
        return this.ProductRepository.Details()
    }
    GetAll(): ProductResponse[] {
        return this.ProductRepository.GetAll()
    }
    GetOne(code: number): ProductResponse {
        return this.ProductRepository.GetOne(code)
    }
    Delete(code: number) {
        return this.ProductRepository.Delete(code)
    }
    Update(code: number, body: ProductUpdate) {
        return this.ProductRepository.Update(code, body)
    }
}

export default ProductService