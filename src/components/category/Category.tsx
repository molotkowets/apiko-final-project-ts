import React, { useState } from "react";
import "../../styles/input-parameter-style.css";
import "./category.css";
import { ReactComponent as CategoryIcon } from "../../assets/icons/category.svg";
import { ReactComponent as ArrowOpenIcon } from "../../assets/icons/openList.svg";
import DropDown, { type ICategoriesDefault } from "../drop-down/DropDown";
import { defaultParams } from "../../pages/home/Home";
import { type ITest } from "../load-filters/LoadFilters";
import { useCategories } from "../../hooks/useCategories";
import { type ICategories } from "../../services/getCategories";
// import { type ICategory } from "../../middleware/middle.selection-request ";

export default function Category({ productParams, setProductParams }: ITest): JSX.Element {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    // const [selectCategory, setSelectCategory] = useState<string>("Choose Category");
    // const categories = ["Hong Kong", "London", "New York City", "Paris"];
    const categories = useCategories().categories;

    const toggleDropDown = (): void => {
        setShowDropDown(!showDropDown);
    };
    const dismissHandler = (): void => {
        setShowDropDown(false);
    };

    const categorySelection = (categoryName: ICategories | ICategoriesDefault): void => {
        console.log(categoryName);
        const params = {
            category: {
                id: categoryName.id,
                name: categoryName.name,
            },
            params: {
                ...defaultParams.params,
                sortBy: productParams.params.sortBy,
            },
        };
        setProductParams({ ...defaultParams, ...params });
    };

    const categoryValue = productParams.category.name ?? "Choose Category";
    return (
        <div
            className={`category parameter-input-wrapper flex-two ${
                showDropDown && "radius-bottom-non"
            }`}
            onClick={(): void => {
                toggleDropDown();
            }}
            onBlur={dismissHandler}>
            <div className="parameter-items-wrapper">
                <div className="parameter-choice">
                    <CategoryIcon className="inputs-icon" />
                    <div className="span-wrapper">
                        <span contentEditable={false}>{categoryValue}</span>
                    </div>
                    <ArrowOpenIcon />
                </div>
            </div>
            {showDropDown && (
                <DropDown
                    categories={categories}
                    showDropDown={false}
                    toggleDropDown={(): void => {
                        toggleDropDown();
                    }}
                    selection={categorySelection}
                />
            )}
        </div>
    );
}
