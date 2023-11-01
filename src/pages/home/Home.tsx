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
    const dispatch = useDispatch();
    const categories = getCategoriesByParams("");
    dispatch(getCategoriesStore({ categories }));
    // setTimeout(() => {
    //     setProductParams({
    //         ...productParams,
    //         params: { ...productParams.params, limit: 2 },
    //     });
    // }, 3e3);

    console.log(productParams.category);
    // useEffect(() => {
    //     products = getProductsByParams(productParams));
    // }, [productParams]);
    const products = getProductsByParams(productParams);

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
            <div className="goods-container"></div>
            {/* {btnVisibility && (
                <button
                    onClick={() =>
                        setParameterGoods({ ...parameterGoods, limit: parameterGoods.limit + 20 })
                    }
                    className="button-load-more">
                    Load more...
                </button>
            )} */}
        </div>
    );
}
