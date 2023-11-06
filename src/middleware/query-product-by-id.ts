import { useQuery, type DefaultError } from "@tanstack/react-query";
import ProductsAPI, { type GetProductResponse } from "../services/ProductsAPI";

export const GetProductsById = (id: string): any => {
    console.log("testQuery", id);
    const { data, isLoading, fetchStatus, error } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, string]
    >({
        queryKey: ["products", id],
        queryFn: async ({ queryKey: [, _id] }) => {
            console.log("test");
            return await ProductsAPI.byId(id);
        },
    });
    return { data, isLoading, fetchStatus, error };
};
