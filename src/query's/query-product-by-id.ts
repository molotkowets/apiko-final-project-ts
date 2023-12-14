import { useQuery, type DefaultError } from "@tanstack/react-query";
import ProductsAPI, { type GetProductResponse } from "../services/ProductsAPI";
import { type TToken } from "./query.selection-request ";
import { type AxiosResponse } from "axios";
// import { type IGetProduct } from "../types/apisTypes";
interface IData {
    data: GetProductResponse | undefined;
}
export const GetProductsById = (id: string, token: TToken): IData => {
    const { data } = useQuery<
        AxiosResponse<GetProductResponse, GetProductResponse>,
        DefaultError,
        GetProductResponse,
        [string, string, TToken]
    >({
        queryKey: ["products", id, token],
        queryFn: async ({ queryKey: [, _id, _token] }) => {
            return await ProductsAPI.byId(_id, _token);
        },
    });
    return { data };
};
