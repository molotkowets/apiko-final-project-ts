import React, { useState } from "react";
import "./home.css";
import "../../styles/main-styles.css";
import LoadFilters from "../../components/load-filters/LoadFilters";
import { type ISetParams, getProductsByParams } from "../../middleware/middle.selection-request ";
import { useDispatch } from "react-redux";
import { getCategoriesStore } from "../../store/slices/categorySlice";
// import { useCategories } from "../../hooks/useCategories";
import { getCategoriesByParams } from "../../middleware/middle.request-category";
// import getCategories from "../../services/getCategories";

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
    const product = getProductsByParams(productParams);
    console.log(product);
    const categories = getCategoriesByParams("");
    // console.log(categories[0]);
    dispatch(getCategoriesStore({ categories }));

    // console.log(useCategories());

    return (
        <div className="content-container">
            <LoadFilters productParams={productParams} setProductParams={setProductParams} />
            <div className="goods-container"></div>
            {/* {products.length ? (
                <div className="goods-container">
                    {products ? (
                        products.map((product, index) => (
                            <ProductCard key={index} product={product} handlerFav={getIdFav} />
                        ))
                    ) : (
                        <Loading />
                    )}
                </div>
            ) : (
                <NoResultsFound />
            )}
            {btnVisibility && (
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
