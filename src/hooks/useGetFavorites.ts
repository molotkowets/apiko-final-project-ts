import { useQuery, type DefaultError, type UseQueryResult } from "@tanstack/react-query";
import { type IGetProduct } from "../types/apisTypes";
// import { type AxiosResponse } from "axios";
import apiFavorite from "../services/apiFavorite";
import { type TToken } from "../query's/query.selection-request ";
interface IGetFavorite {
    offset: number;
    limit: number;
}

export const useGetFavorite = (
    params: IGetFavorite,
    token: TToken
): UseQueryResult<IGetProduct[], Error> => {
    const enabled = Boolean(token);
    console.log("enabled: ", enabled);
    return useQuery<IGetProduct[], DefaultError, IGetProduct[], [string, IGetFavorite, TToken]>({
        queryKey: ["products", params, token],
        queryFn: async ({ queryKey: [, _url, _params] }) => {
            // console.log("test");
            return await apiFavorite.getFavorite<IGetFavorite>(params, token);
        },
        enabled,
    });
};
