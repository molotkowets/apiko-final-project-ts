import axios from "axios";
import { type IGetProduct } from "../types/apisTypes";

export interface GetProductResponse {
    data: IGetProduct;
}

class ProductsAPI {
    private readonly URL = "https://demo-api.apiko.academy/api";
    async getAll<T>(params: T): Promise<string | GetProductResponse> {
        const { data, status } = await axios.get<GetProductResponse>(`${this.URL}/products`, {
            headers: {
                Accept: "application/json",
            },
            params,
        });
        console.log("response status is: ", status);
        return data;
    }

    async bySearch<T>(params: T): Promise<string | GetProductResponse> {
        const { data, status } = await axios.get<GetProductResponse>(
            `${this.URL}/products/search`,
            {
                headers: {
                    Accept: "application/json",
                },
                params,
            }
        );
        console.log("response status is: ", status);
        return data;
    }

    async byCategory<T>(params: T, id: number | undefined): Promise<string | GetProductResponse> {
        const { data, status } = await axios.get<GetProductResponse>(
            `${this.URL + "/categories/" + id + "/products"}`,
            {
                headers: {
                    Accept: "application/json",
                },
                params,
            }
        );
        console.log("response status is: ", status);
        return data;
    }
}

export default new ProductsAPI();
