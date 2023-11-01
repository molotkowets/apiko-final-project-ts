import React, { useEffect, useState } from "react";
import "./drop-down.css";
import { type ICategories } from "../../services/getCategories";
import { defaultParams } from "../../pages/home/Home";
export interface ICategoriesDefault {
    id: undefined;
    name: undefined;
}
interface DropDownProps {
    categories: ICategories[] | string[];
    showDropDown: boolean;
    toggleDropDown: any;
    selection: (str: any) => void;
}

const DropDown: React.FC<DropDownProps> = ({
    categories,
    selection,
}: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (category: ICategories | ICategoriesDefault | string): void => {
        selection(category);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <div className={showDropDown ? "dropdown" : "dropdown active"}>
                {typeof categories[0] !== "string" ? (
                    <p
                        onClick={(): void => {
                            onClickHandler(defaultParams.category);
                        }}>
                        All
                    </p>
                ) : (
                    ""
                )}
                {categories.map((category: ICategories | string, index: number): JSX.Element => {
                    const item = typeof category === "string" ? category : category.name;
                    return (
                        <p
                            key={index}
                            onClick={(): void => {
                                onClickHandler(category);
                            }}>
                            {item}
                        </p>
                    );
                })}
            </div>
        </>
    );
};

export default DropDown;
