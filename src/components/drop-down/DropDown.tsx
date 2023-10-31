import React, { useEffect, useState } from "react";
import "./drop-down.css";
import { type ICategories } from "../../services/getCategories";
import { defaultParams } from "../../pages/home/Home";
export interface ICategoriesDefault {
    id: undefined;
    name: undefined;
}
interface DropDownProps {
    categories: ICategories[];
    showDropDown: boolean;
    toggleDropDown: any;
    selection: (str: ICategories | ICategoriesDefault) => void;
}

const DropDown: React.FC<DropDownProps> = ({
    categories,
    selection,
}: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (category: ICategories | ICategoriesDefault): void => {
        selection(category);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <div className={showDropDown ? "dropdown" : "dropdown active"}>
                <p
                    onClick={(): void => {
                        onClickHandler(defaultParams.category);
                    }}>
                    All
                </p>
                {categories.map((category: ICategories, index: number): JSX.Element => {
                    return (
                        <p
                            key={index}
                            onClick={(): void => {
                                onClickHandler(category);
                            }}>
                            {category.name}
                        </p>
                    );
                })}
            </div>
        </>
    );
};

export default DropDown;
