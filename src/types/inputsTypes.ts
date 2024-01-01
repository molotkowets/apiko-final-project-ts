import { type Inputs } from "../components/login/Login";
import { type ValidationRule, type UseFormRegister } from "react-hook-form";

export type TRegister = UseFormRegister<Inputs>;
interface mandatoryArt {
    name: string;
    type: string;
    value: string | null;
}
export interface IInput<A> {
    register: TRegister;
    attributes: A & mandatoryArt;
}
export interface IInputDEL<> {
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
