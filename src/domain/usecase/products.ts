import { ProductResponse, ProductScore, ProductUpdate } from "@/domain/entities/products"

export interface ProductUsecase {
    Details(): any;
    GetAll(): Array<ProductResponse>;
    GetOne(code: number): ProductResponse;
    Delete(code: number): any;
    Update(code: number, body: ProductUpdate): any;
}