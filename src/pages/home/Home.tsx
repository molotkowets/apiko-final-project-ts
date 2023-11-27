import React, { useState } from "react";
import "./home.css";
import "../../styles/main-styles.css";
import LoadFilters from "../../components/load-filters/LoadFilters";
import { type ISetParams, getProductsByParams } from "../../middleware/middle.selection-request ";
// import { useDispatch } from "react-redux";
// import { getCategoriesStore } from "../../store/slices/categorySlice";
// import { getCategoriesByParams } from "../../middleware/middle.request-category";
import ProductCard from "../../components/product-card/ProductCard";
// import { type IGetProduct } from "../../types/apisTypes";
import { useDispatch } from "react-redux";
import { getCategoriesByParams } from "../../middleware/middle.request-category";
import { getCategoriesStore } from "../../store/slices/categorySlice";
import { useAuth } from "../../hooks/useAuth";

export const defaultParams = Object.freeze({
    search: undefined,
    category: {
        id: undefined,
        name: undefined,
    },
    params: Object.freeze({
        offset: 0,
        limit: 20,
        sortBy: "latest",
    }),
});

export default function Home(): JSX.Element {
    const [productParams, setProductParams] = useState<ISetParams>(defaultParams);
    const token = useAuth().token;
    const dispatch = useDispatch();
    const categories = getCategoriesByParams("");
    dispatch(getCategoriesStore({ categories }));

    const products = getProductsByParams(productParams, token);

    const productBoolean = Boolean(products?.length ?? false);
    return (
        <div className="content-container">
            <LoadFilters productParams={productParams} setProductParams={setProductParams} />

            {productBoolean ? (
                <div className="goods-container">
                    {productBoolean
                        ? products?.map((product, index) => (
                              <ProductCard key={index} product={product} />
                          ))
                        : // <Loading />
                          "...Loading"}
                </div>
            ) : (
                // <NoResultsFound />
                "NoResultsFound"
            )}
            {/* FIXME goods-container */}
            <div className="goods-container"></div>
            {products?.length >= 20 && (
                <button
                    onClick={() => {
                        setProductParams({
                            ...productParams,
                            params: {
                                ...productParams.params,
                                limit: productParams.params.limit + 20,
                            },
                        });
                    }}
                    className="button-load-more">
                    Load more...
                </button>
            )}
        </div>
    );
}
