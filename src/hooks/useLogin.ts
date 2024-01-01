import { useQuery, type DefaultError, type UseQueryResult } from "@tanstack/react-query";
import { postAuth } from "../apis/postAuth";
import { type Inputs } from "../components/login/Login";
import { type TAuthResponse } from "../types/apisTypes";
import { type AxiosResponse } from "axios";

export const useLogin = (
    url: string,
    params: Inputs | undefined
): UseQueryResult<AxiosResponse<TAuthResponse>, Error> => {
    const enabled = Boolean(params?.email);
    // console.log(enabled, params);
    return useQuery<
        AxiosResponse<TAuthResponse>,
        DefaultError,
        AxiosResponse<TAuthResponse>,
        [string, string, Inputs | undefined]
    >({
        queryKey: ["products", url, params],
        queryFn: async ({ queryKey: [, _url, _params] }) => {
            // console.log("test");
            return await postAuth<Inputs>(_url, _params);
        },
        enabled,
    });
    // return { data };
};
