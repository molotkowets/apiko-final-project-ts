import { type DefaultError, useQuery } from "@tanstack/react-query";
import ProductsAPI, { type GetProductResponse } from "../services/ProductsAPI";
import { type IGetProduct } from "../types/apisTypes";

export interface ISearchParams {
    offset: number;
    limit: number;
    keywords: string | undefined;
}
export interface ICategory {
    id: number | undefined;
    name: string | undefined;
}
export interface IParams {
    offset: number;
    limit: number;
    sortBy: string;
}
export interface ISetParams {
    search: undefined | string;
    category: ICategory;
    params: IParams;
}
export type TToken = string | null;

export const getProductsByParams = (
    productParams: ISetParams,
    token: string | null
): IGetProduct[] => {
    if (productParams.search != null && productParams.search.length >= 3) {
        // console.log("getProductsByParams = by name");
        return productsByName(productParams, token);
    }

    if (productParams.category.name != null) {
        console.log("getProductsByParams = ", productParams.category.name);

        return productsByCategory(productParams, token);
    }

    return productsAll(productParams, token);
};
// FIXME return ANY type ??
const productsAll = (productParams: ISetParams, token: TToken): any => {
    console.log("all");
    const { data } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, IParams, TToken]
    >({
        queryKey: ["products", productParams.params, token],
        queryFn: async ({ queryKey: [, _productParams, _token] }) => {
            return await ProductsAPI.getAll<IParams>(_productParams, _token);
        },
    });
    return data;
};
// FIXME return ANY type ??
const productsByName = (productParams: ISetParams, token: TToken): any => {
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
        [string, ISearchParams, TToken]
    >({
        queryKey: ["products", searchParams, token],
        queryFn: async ({ queryKey: [, _searchParams, _token] }) => {
            return await ProductsAPI.bySearch<ISearchParams>(_searchParams, _token);
        },
    });
    return data;
};

// FIXME: return ANY type ?? IGetProduct
const productsByCategory = (productParams: ISetParams, token: TToken): any => {
    const { data } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, IParams, number | undefined, TToken]
    >({
        queryKey: ["products", productParams.params, productParams.category.id, token],
        queryFn: async ({ queryKey: [, _productParams, _token] }) => {
            return await ProductsAPI.byCategory<IParams>(
                _productParams,
                productParams.category.id,
                token
            );
        },
    });
    return data;
};
