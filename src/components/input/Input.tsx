import React, { useState } from "react";
import "./input.css";
import { type IInput } from "../../types/inputsTypes";
import Eye from "../eye/Eye";

export default function Input({
    register,
    type,
    id,
    pattern,
    name,
    placeholder,
    maxLength,
    minLength,
}: IInput): JSX.Element {
    const [stateLabel, setStateLabel] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const click = (e: React.FormEvent<HTMLInputElement>): void => {
        const state = !(e.currentTarget.value.length === 0);
        setStateLabel(state);
        console.log(state);
    };
    const label = (
        <label className={"label-auth"} htmlFor={id}>
            {placeholder + ":"}
        </label>
    );
    return (
        <div className="container-input">
            {stateLabel && label}
            <input
                className="input"
                {...register(name, {
                    onChange: (e) => {
                        click(e);
                    },
                    required: true,
                    pattern,
                    maxLength,
                    minLength,
                })}
                id={id}
                placeholder={placeholder}
                type={showPass ? "text" : type}
                autoComplete="on"
            />
            {type === "password" && <Eye setShowPass={setShowPass} />}

            {/* {error[name]?.message && <p>message</p>} */}
        </div>
    );
}
