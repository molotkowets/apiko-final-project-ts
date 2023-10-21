import { type Inputs } from "../components/login/Login";
import { type ValidationRule, type UseFormRegister } from "react-hook-form";

export interface IInput<> {
    register: UseFormRegister<Inputs>;
    type: string;
    id: string;
    pattern: ValidationRule<RegExp> | undefined;
    name: string;
    placeholder: string;
    maxLength: number | undefined;
    minLength: number | undefined;
    // error: string;
}
