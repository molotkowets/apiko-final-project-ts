import React, { type FormEvent } from "react";
import { useForm } from "react-hook-form";
import "./form-edit-account.css";
import { type Inputs } from "../login/Login";
import { type TRegister } from "../../types/inputsTypes";

interface IFormMainInf {
    inputs: (r: TRegister) => JSX.Element[];
}

export default function FormMainInf({ inputs }: IFormMainInf): JSX.Element {
    const { register, handleSubmit } = useForm<Inputs>();

    const handlerMainInf = (event: FormEvent<HTMLFormElement>): any => {
        return event;
    };

    return (
        <form onSubmit={(e) => handleSubmit(handlerMainInf(e))}>
            {inputs(register)}
            <button className="buttonEditAccount">Save</button>
        </form>
    );
}
