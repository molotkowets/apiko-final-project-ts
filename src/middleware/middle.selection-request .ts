import { type DefaultError, useQuery } from "@tanstack/react-query";
import getProducts, { type GetProductResponse } from "../services/getProducts";
import { type IGetProduct } from "../types/apisTypes";

export interface IParams {
    offset: number;
    limit: number;
    sortBy: string;
}

export interface ISearchParams {
    offset: number;
    limit: number;
    keywords: string | undefined;
}
export interface ICategory {
    id: number | undefined;
    name: string | undefined;
}
export interface ISetParams {
    search: undefined | string;
    category: ICategory;
    params: IParams;
}

export const getProductsByParams = (productParams: ISetParams): IGetProduct => {
    console.log(productParams.category.id != null, productParams.category.id);
    if (productParams.search != null && productParams.search.length >= 3)
        return productByName(productParams);

    if (productParams.category.name != null) return productByCategory(productParams);

    return productAll(productParams);
};
// check - return ANY type ??
const productAll = (productParams: ISetParams): any => {
    console.log("all");
    const { data } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, IParams]
    >({
        queryKey: ["products", productParams.params],
        queryFn: async ({ queryKey: [, _productParams] }) => {
            return await getProducts.genAll<IParams>(_productParams);
        },
    });
    return data;
};
// check - return ANY type ??
const productByName = (productParams: ISetParams): any => {
    console.log("search", productParams.search);
    const searchParams = {
        offset: productParams.params.offset,
        limit: productParams.params.limit,
        keywords: productParams.search,
    };
    const { data } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, ISearchParams]
    >({
        queryKey: ["products", searchParams],
        queryFn: async ({ queryKey: [, _searchParams] }) => {
            return await getProducts.genSearch<ISearchParams>(_searchParams);
        },
    });
    return data;
};
// check - return ANY type ??
const productByCategory = (productParams: ISetParams): any => {
    const { data } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, IParams]
    >({
        queryKey: ["products", productParams.params],
        queryFn: async ({ queryKey: [, _productParams] }) => {
            return await getProducts.genCategory<IParams>(
                _productParams,
                productParams.category.id
            );
        },
    });
    return data;
};
