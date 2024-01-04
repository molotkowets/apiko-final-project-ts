import React, { useEffect, useState } from "react";
import "./input-settings.css";
import { type IInput } from "../../types/inputsTypes";
interface IExtends {
    setLabel: React.Dispatch<React.SetStateAction<boolean>>;
    toggleType: boolean;
}
export default function InputSettings<A>({
    register,
    attributes,
    setLabel,
    toggleType,
}: IInput<A> & IExtends): JSX.Element {
    const [value, setValue] = useState(attributes.value ?? "");
    useEffect(() => {
        setLabel(value.length !== 0);
    }, [value]);
    const change = (e: React.FormEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value;
        setValue(value);
        setLabel(value.length !== 0);
    };

    const type = attributes.type === "password" ? attributes.type : "text";
    return (
        <input
            className="input"
            {...register(attributes.name, {
                onChange: (e) => {
                    change(e);
                },
                required: true,
                ...attributes,
                value,
            })}
            placeholder={attributes.placeholder ?? attributes.name}
            type={type}
            // autoComplete="on"
        />
    );
}
