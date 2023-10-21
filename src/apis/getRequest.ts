import axios from "axios";

import type { IGetProduct } from "../types/apisTypes";

interface GetProductResponse {
    data: IGetProduct;
}

export async function getProduct<T>(parameters: T): Promise<string | GetProductResponse> {
    try {
        const { data, status } = await axios.get<GetProductResponse>(
            "https://demo-api.apiko.academy/api/products",
            {
                headers: {
                    Accept: "application/json",
                },
                params: {
                    ...parameters,
                },
            }
        );
        console.log("response status is: ", status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred";
        }
    }
}
