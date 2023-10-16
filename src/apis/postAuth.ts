import axios from "axios";
import { type TAuthResponse } from "../types/apisTypes";

export async function postAuth<P>(url: string, params: P): Promise<string | TAuthResponse> {
    try {
        const { data, status } = await axios.post<TAuthResponse>(url, params);

        console.log(JSON.stringify(data, null, 4));
        console.log(status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            // 👇️ error: AxiosError<any, any>
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred";
        }
    }
}
