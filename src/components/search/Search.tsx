import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import "../../styles/input-parameter-style.css";
import "./search.css";
import { defaultParams } from "../../pages/home/Home";
import { type ITest } from "../load-filters/LoadFilters";

export default function Search({ productParams, setProductParams }: ITest): JSX.Element {
    const SearchVal = (e: React.FormEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value;
        setProductParams({ ...defaultParams, search: value });
    };
    return (
        <div className="parameter-input-wrapper flex-two">
            <SearchIcon className="inputs-icon " />
            <input
                value={productParams.search}
                onChange={SearchVal}
                className="input-search"
                type="text"
                name="search"
                placeholder="Search products by name"
            />
        </div>
    );
}
