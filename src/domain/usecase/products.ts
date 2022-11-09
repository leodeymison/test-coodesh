import { ProductResponse, ProductScore, ProductUpdate } from "@/domain/entities/products"
import { DeleteScore, UpdateScore } from "../entities/response";

export interface ProductUsecase {
    // Details(): Promise<any>;
    GetAll(): Promise<Array<ProductResponse>>;
    GetOne(code: number): Promise<ProductResponse>;
    Create(data: ProductScore): Promise<ProductResponse>;
    Delete(code: number): Promise<DeleteScore>;
    Update(code: number, body: ProductUpdate): Promise<UpdateScore>;
}