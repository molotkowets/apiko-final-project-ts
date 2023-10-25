import React, { useState } from "react";
// import { type GetProductResponse } from "../../apis/getRequest";
import "./home.css";
import { type DefaultError, useQuery } from "@tanstack/react-query";
import getProducts, { type GetProductResponse } from "../../services/getProducts";

export default function Home(): JSX.Element {
    const [searchParams, setSearchParams] = useState({ offset: 0, limit: 20, sortBy: "latest" });

    interface IParams {
        offset: number;
        limit: number;
        sortBy: string;
    }

    const { data } = useQuery<
        string | GetProductResponse,
        DefaultError,
        string | GetProductResponse,
        [string, IParams]
    >({
        queryKey: ["products", searchParams],
        queryFn: async ({ queryKey: [, _searchParams] }) => {
            console.log("_searchParams = ", _searchParams);
            return await getProducts.genAll<IParams>(_searchParams);
        },
    });

    console.log("test", data);

    return (
        <div>
            <button
                onClick={() => {
                    setSearchParams({ ...searchParams, offset: searchParams.offset + 10 });
                }}>
                click btn
            </button>
        </div>
    );
}
