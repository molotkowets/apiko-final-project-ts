import React, { useState } from "react";
import "./input-layout.css";
import InputSettings from "../input-settings/InputSettings";
import { type IInput } from "../../types/inputsTypes";
import Eye from "../eye/Eye";
// interface mandatoryArt {
//     name: string;
// }
// interface IInputSettings<A> {
//     register: TRegister;
//     attributes: A;
// }

export default function InputLayout<A>({ register, attributes }: IInput<A>): JSX.Element {
    const [label, setLabel] = useState<boolean>(false);
    const [togglePass, setTogglePass] = useState<boolean>(false);
    // console.log(togglePass);
    const modAttribute = togglePass ? { ...attributes, type: "text" } : attributes;
    // console.log("modAttribute", modAttribute, "togglePass", togglePass);
    return (
        <div className="container-input">
            {label && <label className="label-input">{attributes.name}</label>}
            {/* <label className="label-input">{attributes.name}</label> */}
            <div>
                <InputSettings<A>
                    register={register}
                    attributes={modAttribute}
                    setLabel={setLabel}
                    toggleType={togglePass}
                />
                {attributes.type === "password" && <Eye setShowPass={setTogglePass} />}
            </div>
            {/* {error[title]?.message && <p>message</p>} */}
        </div>
    );
}
