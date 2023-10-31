import axios from "axios";
import { type IGetProduct } from "../types/apisTypes";

export interface IGetProductResponse {
    data: IGetProduct[];
}
export interface ICategories {
    id: number;
    name: string;
}

class GetCategories {
    private readonly URL = "https://demo-api.apiko.academy/api/categories";
    async genAll(path: string): Promise<string | IGetProductResponse | ICategories> {
        console.log(this.URL + path);
        const fulUrl = this.URL + path;
        const { data, status } = await axios.get<IGetProductResponse>(fulUrl, {
            headers: {
                Accept: "application/json",
            },
        });
        console.log("response status is: ", status);
        return data;
    }
}

export default new GetCategories();
