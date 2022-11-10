import { ProductResponse, ProductScore, ProductUpdate } from "@/domain/entities/products"
import { DeleteScore, Pagination, UpdateScore } from "../entities/response";

export interface ProductUsecase {
    // Details(): Promise<any>;
    GetAll(page: number): Promise<Pagination<Array<ProductResponse>>>;
    GetOne(code: number): Promise<ProductResponse>;
    Create(data: ProductScore): Promise<ProductResponse>;
    Delete(code: number): Promise<DeleteScore>;
    Update(code: number, body: ProductUpdate): Promise<UpdateScore>;
}