import axios from "axios";
import { type IGetProduct } from "../types/apisTypes";
import { type TToken } from "../middleware/middle.selection-request ";
// import { useAuth } from "../hooks/useAuth";

export interface GetProductResponse {
    data: IGetProduct;
}
function generateHeaders(token: TToken): any {
    const headers =
        token !== null
            ? { Accept: "application/json" }
            : { Accept: "application/json", Authorization: `Bearer ${token}` };
    return headers;
}
class ProductsAPI {
    private readonly URL = "https://demo-api.apiko.academy/api";
    async getAll<P>(params: P, token: TToken): Promise<string | GetProductResponse> {
        const headers = generateHeaders(token);
        const { data, status } = await axios.get<GetProductResponse>(`${this.URL}/products`, {
            headers,
            params,
        });
        console.log("response status is: ", status);
        return data;
    }

    async bySearch<P>(params: P, token: TToken): Promise<string | GetProductResponse> {
        const headers = generateHeaders(token);
        const { data, status } = await axios.get<GetProductResponse>(
            `${this.URL}/products/search`,
            {
                headers,
                params,
            }
        );
        console.log("response status is: ", status);
        return data;
    }

    async byCategory<P>(
        params: P,
        id: number | undefined,
        token: TToken
    ): Promise<string | GetProductResponse> {
        const headers = generateHeaders(token);
        const { data, status } = await axios.get<GetProductResponse>(
            `${this.URL + "/categories/" + id + "/products"}`,
            {
                headers,
                params,
            }
        );
        console.log("response status is: ", status);
        return data;
    }

    async byId(id: string, token: TToken): Promise<string | GetProductResponse> {
        const headers = generateHeaders(token);
        const { data, status } = await axios.get<GetProductResponse>(`${this.URL}/products/${id}`, {
            headers,
        });
        console.log("response status is: ", status);
        return data;
    }
}

export default new ProductsAPI();
