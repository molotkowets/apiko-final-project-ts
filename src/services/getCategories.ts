import axios from "axios";
import { type IGetProduct } from "../types/apisTypes";

export interface GetProductResponse {
    data: IGetProduct;
}
interface ICategories {
    id: number;
    name: string;
}

class GetCategories {
    private readonly URL = "https://demo-api.apiko.academy/api/categories";
    async genAll<T>(params: T, path: string): Promise<string | GetProductResponse | ICategories[]> {
        const { data, status } = await axios.get<GetProductResponse>(`this.URL${path}`, {
            headers: {
                Accept: "application/json",
            },
            params,
        });
        console.log("response status is: ", status);
        return data;
    }
}

export default new GetCategories();
