import { ProductResponse, ProductScore, ProductUpdate } from "@/domain/entities/products"

export interface ProductUsecase {
    // Details(): Promise<any>;
    GetAll(): Promise<Array<ProductResponse>>;
    GetOne(code: number): Promise<ProductResponse>;
    Delete(code: number): Promise<any>;
    Update(code: number, body: ProductUpdate): Promise<any>;
}