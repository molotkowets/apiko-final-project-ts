import { type DefaultError, useQuery } from "@tanstack/react-query";
import getCategories, {
    type IGetProductResponse,
    type ICategories,
} from "../services/getCategories";
// import { type GetProductResponse } from "../services/getProducts";

export const getCategoriesByParams = (path: string): any => {
    const modPath = path === "" ? "" : "/" + path;
    const { data } = useQuery<
        string | IGetProductResponse | ICategories,
        DefaultError,
        string | IGetProductResponse | ICategories,
        [string, string]
    >({
        queryKey: ["products", modPath],
        queryFn: async ({ queryKey: [, _modPath] }) => {
            return await getCategories.genAll(_modPath);
        },
    });
    return data;
};
