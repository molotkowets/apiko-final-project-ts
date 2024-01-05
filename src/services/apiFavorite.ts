import axios from "axios";
import { type TToken } from "../query's/query.selection-request ";
import { type IGetProduct } from "../types/apisTypes";

function generateHeaders(token: TToken): any {
    const headers =
        token !== null
            ? { Accept: "application/json" }
            : { Accept: "application/json", Authorization: `Bearer ${token}` };
    return headers;
}

class ApiFavorite {
    private readonly URL = "https://demo-api.apiko.academy/api/products/";
    async byIdToFavorite(id: string | number, token: TToken): Promise<boolean> {
        console.log(this.URL + id + "/favorite");
        const fulUrl = this.URL + id + "/favorite";
        const headers = generateHeaders(token);
        const { data } = await axios.post<boolean>(fulUrl, {
            headers,
        });
        return data;
    }

    async getFavorite<P>(params: P, token: TToken): Promise<IGetProduct[]> {
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axios.get("https://demo-api.apiko.academy/api/products/favorites", {
            headers,
            params,
        });
        return data;
    }
}

export default new ApiFavorite();
