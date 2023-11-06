import { type DefaultError, useQuery } from "@tanstack/react-query";
import getCategories, {
    type IGetProductResponse,
    type ICategories,
} from "../services/getCategories";
// import { type GetProductResponse } from "../services/getProducts";

export const getCategoriesByParams = (categoryId: string): any => {
    const modifiedPath = categoryId === "" ? "" : "/" + categoryId;
    const { data } = useQuery<
        string | IGetProductResponse | ICategories,
        DefaultError,
        string | IGetProductResponse | ICategories,
        [string, string]
    >({
        queryKey: ["products", modifiedPath],
        queryFn: async ({ queryKey: [, _modifiedPath] }) => {
            return await getCategories.genAll(_modifiedPath);
        },
    });
    return data;
};
