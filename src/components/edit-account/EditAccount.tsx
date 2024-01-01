import React from "react";
// import InputSettings from "../input-settings/InputSettings";
import { type IInputAttributes, genChangePass, genMainInf } from "./generatesInputData";
import FormEditAccount from "../form-edit-account/FormEditAccount";
import { type FieldValues, type UseFormRegister } from "react-hook-form";
import InputLayout from "../input-layout/InputLayout";
import { type IAccount } from "../../types/apisTypes";
import { type TRegister } from "../../types/inputsTypes";
// import { type Inputs } from "../login/Login";
// import Input from "../input/Input";

interface IEdit {
    storageAuth: string;
}
type TInputArr = (r: TRegister) => JSX.Element[];

export interface IRegister {
    register: UseFormRegister<FieldValues>;
}

export default function EditAccount({ storageAuth }: IEdit): JSX.Element {
    const excludes = ["id", "createdAt", "updatedAt"];
    const accountData: IAccount = JSON.parse(storageAuth).account;
    const onAuthAccount = Object.entries(accountData);
    const listMainInput = onAuthAccount.filter((i) => !excludes.includes(i[0]));
    const changePassword = ["Current password", "New password", "Confirm password"];

    const inputsMainInformation: TInputArr = (register) => {
        const data: IInputAttributes[] = genMainInf(listMainInput);
        const input = data.map((el, key) => (
            <InputLayout<IInputAttributes> register={register} attributes={el} key={key} />
        ));
        return input;
    };
    const inputsChangePassword: TInputArr = (register) => {
        const data: IInputAttributes[] = genChangePass(changePassword);
        const input = data.map((el, key) => {
            return <InputLayout<IInputAttributes> register={register} attributes={el} key={key} />;
        });
        return input;
    };

    return (
        <div>
            <div className="main-information-settings">
                <h2 className="title-form">Main information</h2>
                <FormEditAccount inputs={inputsMainInformation} />
            </div>
            <div className="change-password-settings">
                <h2 className="title-form">Change password</h2>
                <FormEditAccount inputs={inputsChangePassword} />
            </div>
        </div>
    );
}
