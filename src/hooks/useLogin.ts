import { useQuery, type DefaultError } from "@tanstack/react-query";
import { postAuth } from "../apis/postAuth";
import { type Inputs } from "../components/login/Login";
// import ProductsAPI, { type GetProductResponse } from "../services/ProductsAPI";

export const useLogin = (url: string, params: Inputs | undefined): any => {
    const enabled = Boolean(params?.email);
    console.log(enabled, params);
    return useQuery<string | any, DefaultError, string | any, [string, string, Inputs | undefined]>(
        {
            queryKey: ["products", url, params],
            queryFn: async ({ queryKey: [, _url, _params] }) => {
                console.log("test");
                return await postAuth<Inputs>(_url, _params);
            },
            enabled,
        }
    );
};
