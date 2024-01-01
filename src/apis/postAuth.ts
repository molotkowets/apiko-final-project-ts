import axios, { type AxiosResponse } from "axios";
import { type TAuthResponse } from "../types/apisTypes";
// interface IAxios {
//     data: TAuthResponse;
// }
export async function postAuth<P>(
    url: string,
    params: P | undefined
): Promise<AxiosResponse<TAuthResponse>> {
    return await axios.post<TAuthResponse>(url, params);
}
