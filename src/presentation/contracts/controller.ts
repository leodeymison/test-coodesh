import { HTTpResponse } from "./http";

export interface controller {
    handle(id?: any, data?: any): Promise<HTTpResponse>
}