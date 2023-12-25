import React from "react";
import "./load-filters.css";
import Search from "../search/Search";
import Category from "../category/Category";
import Sorting from "../sorting/Sorting";
import { type ISetParams } from "../../query's/query.selection-request ";
export interface ITest {
    productParams: ISetParams;
    setProductParams: React.Dispatch<React.SetStateAction<ISetParams>>;
}

export default function LoadFilters({ productParams, setProductParams }: ITest): JSX.Element {
    return (
        <div className="parameter-container">
            <Search productParams={productParams} setProductParams={setProductParams} />
            <Category productParams={productParams} setProductParams={setProductParams} />
            <Sorting productParams={productParams} setProductParams={setProductParams} />
        </div>
    );
}
