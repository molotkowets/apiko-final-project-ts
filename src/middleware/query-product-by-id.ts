import { useQuery, type DefaultError } from "@tanstack/react-query";
import ProductsAPI, { type GetProductResponse } from "../services/ProductsAPI";
import { type TToken } from "./middle.selection-request ";

export const GetProductsById = (id: string, token: TToken): any => {
    const { data, isLoading, fetchStatus, error } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, string, TToken]
    >({
        queryKey: ["products", id, token],
        queryFn: async ({ queryKey: [, _id, _token] }) => {
            return await ProductsAPI.byId(_id, _token);
        },
    });
    return { data, isLoading, fetchStatus, error };
};
