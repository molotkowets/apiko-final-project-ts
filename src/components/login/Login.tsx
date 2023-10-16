import React from "react";
import "./login.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import { inputsData } from "./data";

export type Inputs = Record<string, string>;

export default function Login(): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        // formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    console.log(watch("login"));
    return (
        <div className="authorization-window">
            <button
                className="background-button-close"
                onClick={() => {
                    navigate(-1);
                }}></button>
            <div className="authorization-container">
                <div className="auth-input-box auth-box-general">
                    <h1 className="auth-title">Login</h1>
                    <form onSubmit={() => handleSubmit(onSubmit)}>
                        {inputsData.map((item, key) => (
                            <Input
                                key={key}
                                register={register}
                                type={item.type}
                                id={item.id}
                                pattern={item.pattern}
                                name={item.name}
                                placeholder={item.placeholder}
                                maxLength={item?.maxLength}
                                minLength={item?.minLength}
                            />
                        ))}
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                        <input className="submit-button" type="submit" value="Login" />
                    </form>
                </div>
                <div className="auth-switch-box auth-box-general">
                    <p>I already have an account, </p>
                    <Link
                        className="auth-switch-link"
                        to={"login"}
                        state={{ background: location.state.background }}
                        replace={true}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
