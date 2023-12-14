import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ProductPage from "../pages/product/ProductPage";
import { GetProductsById } from "../query's/query-product-by-id";

export default function ProductContainer(): JSX.Element {
    const token = useAuth().token;
    const { id } = useParams<string>();
    let response;
    if (id !== undefined) {
        response = GetProductsById(id, token);
    }
    console.log(response);
    const product = response?.data?.data;
    return (
        <>
            {product !== undefined ? (
                <ProductPage product={product} token={token} />
            ) : (
                <p>Not found</p>
            )}
        </>
    );
}
