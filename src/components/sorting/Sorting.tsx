import React, { useState } from "react";
import "../../styles/input-parameter-style.css";

import { ReactComponent as SortingIcon } from "../../assets/icons/sorting.svg";
import { ReactComponent as ArrowOpenIcon } from "../../assets/icons/openList.svg";
import DropDown from "../drop-down/DropDown";
import { type ITest } from "../load-filters/LoadFilters";
import { defaultParams } from "../../pages/home/Home";

export default function Sorting({ productParams, setProductParams }: ITest): JSX.Element {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const sortList = ["latest", "popular"];

    const toggleDropDown = (): void => {
        setShowDropDown(!showDropDown);
    };
    const dismissHandler = (): void => {
        setShowDropDown(false);
    };

    const sortSelection = (sortBy: string): void => {
        const params = {
            ...defaultParams.params,
            sortBy,
        };
        setProductParams({ ...defaultParams, category: productParams.category, params });
    };
    const sortValue = productParams.params.sortBy ?? "Sorting";
    return (
        <div
            className={`parameter-input-wrapper flex-one ${showDropDown && "radius-bottom-non"}`}
            onClick={(): void => {
                toggleDropDown();
            }}
            onBlur={dismissHandler}>
            <SortingIcon className="inputs-icon" />
            <div className="span-wrapper">
                <span>{sortValue}</span>
            </div>
            <ArrowOpenIcon />
            {showDropDown && (
                <DropDown
                    categories={sortList}
                    showDropDown={false}
                    toggleDropDown={(): void => {
                        toggleDropDown();
                    }}
                    selection={sortSelection}
                />
            )}
        </div>
    );
}
