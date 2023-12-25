import axios from "axios";
import { type TAuthResponse } from "../types/apisTypes";

export async function postAuth<P>(url: string, params: P | undefined): Promise<any> {
    // try {

    return await axios.post<TAuthResponse>(url, params);

    // console.log(JSON.stringify(data));
    // console.log(status);
    //     return data;
    // } catch (error) {
    //     if (axios.isAxiosError(error)) {
    //         console.error("error message: ", error.message);
    //         return error.message;
    //     } else {
    //         console.error("unexpected error: ", error);
    //         return "An unexpected error occurred";
    //     }
    // }
}
