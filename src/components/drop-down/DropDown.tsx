import React, { useEffect, useState } from "react";
import "./drop-down.css";

interface DropDownProps {
    categories: string[];
    showDropDown: boolean;
    toggleDropDown: any;
    selection: (str: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({
    categories,
    selection,
}: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (category: string): void => {
        selection(category);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <div className={showDropDown ? "dropdown" : "dropdown active"}>
                {categories.map((category: string, index: number): JSX.Element => {
                    return (
                        <p
                            key={index}
                            onClick={(): void => {
                                onClickHandler(category);
                            }}>
                            {category}
                        </p>
                    );
                })}
            </div>
        </>
    );
};

export default DropDown;
