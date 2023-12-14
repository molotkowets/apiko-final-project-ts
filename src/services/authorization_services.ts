import axios from "axios";
import { type TAuthResponse } from "../types/apisTypes";

class Authorization {
    private readonly URL = "https://demo-api.apiko.academy/api/auth/";
    async Login<T>(params: T): Promise<string | TAuthResponse> {
        console.log(params);
        const { data } = await axios.post<TAuthResponse>(`${this.URL}login`, params);
        // console.log("response status is: ", status);
        return data;
    }
}

export default new Authorization();
