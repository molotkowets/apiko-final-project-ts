import axios from "axios";
import { type TToken } from "../query's/query.selection-request ";

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
        const { data, status } = await axios.post<boolean>(fulUrl, {
            headers,
        });
        console.log("response status is: ", status);
        return data;
    }
}

export default new ApiFavorite();
