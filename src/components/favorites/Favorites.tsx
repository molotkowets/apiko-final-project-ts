import React, { useState } from "react";
import ProductCard from "../product-card/ProductCard";
import "./favorites.css";
import { useGetFavorite } from "../../hooks/useGetFavorites";
import { useAuth } from "../../hooks/useAuth";

export default function Favorites(): JSX.Element {
    const [params, setParams] = useState({ offset: 0, limit: 20 });
    const token = useAuth().token;
    const { data: products } = useGetFavorite(params, token);

    return (
        <div className="content-container">
            <div className="goods-container">
                {products !== undefined
                    ? products.map((product, index) => (
                          <ProductCard key={index} product={product} />
                      ))
                    : "Loading"}
            </div>
            {products !== undefined && products?.length >= 20 && (
                <button
                    onClick={() => {
                        setParams({
                            ...params,
                            limit: params.limit + 20,
                        });
                    }}
                    className="button-load-more">
                    Load more...
                </button>
            )}
        </div>
    );
}
