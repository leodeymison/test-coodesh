import { 
    ProductResponse, 
    ProductUpdate 
} from "@/domain/entities/products";

export interface productInfra {
    GetAll(): Promise<Array<ProductResponse>>;
    GetOne(code: number): Promise<ProductResponse>;
    Delete(code: number): Promise<any>;
    Update(code: number, body: ProductUpdate): Promise<any>;
}