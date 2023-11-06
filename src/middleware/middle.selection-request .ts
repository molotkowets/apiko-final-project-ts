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

export const getProductsByParams = (productParams: ISetParams): IGetProduct[] => {
    if (productParams.search != null && productParams.search.length >= 3) {
        // console.log("getProductsByParams = by name");
        return productsByName(productParams);
    }

    if (productParams.category.name != null) {
        console.log("getProductsByParams = ", productParams.category.name);

        return productsByCategory(productParams);
    }

    return productsAll(productParams);
};
// FIXME return ANY type ??
const productsAll = (productParams: ISetParams): any => {
    console.log("all");
    const { data } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, IParams]
    >({
        queryKey: ["products", productParams.params],
        queryFn: async ({ queryKey: [, _productParams] }) => {
            return await ProductsAPI.getAll<IParams>(_productParams);
        },
    });
    return data;
};
// FIXME return ANY type ??
const productsByName = (productParams: ISetParams): any => {
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
            return await ProductsAPI.bySearch<ISearchParams>(_searchParams);
        },
    });
    return data;
};

// FIXME: return ANY type ??
const productsByCategory = (productParams: ISetParams): any => {
    const { data } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, IParams, number | undefined]
    >({
        queryKey: ["products", productParams.params, productParams.category.id],
        queryFn: async ({ queryKey: [, _productParams] }) => {
            return await ProductsAPI.byCategory<IParams>(_productParams, productParams.category.id);
        },
    });
    return data;
};
