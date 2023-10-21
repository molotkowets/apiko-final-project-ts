import React from "react";
import "../../styles/auth-style.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import { registerData } from "./data";
// import { postAuth } from "../../apis/postAuth";
// import { type IParamsAuth } from "../../types/apisTypes";
// import { urlRegister } from "../../constants/urls";

export type Inputs = Record<string, string>;

export default function Registration(): JSX.Element {
    // const paramsAuth = {
    //     fullName: "name",
    //     email: "molotkowets@gmail.com",
    //     password: "admin1234!",
    //     phone: "0508546242",
    // };
    // console.log(postAuth<IParamsAuth>(urlRegister, paramsAuth));
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

    console.log(watch("Registration"));
    return (
        <div className="authorization-window">
            <button
                className="background-button-close"
                onClick={() => {
                    navigate(-1);
                }}></button>
            <div className="authorization-container">
                <div className="auth-input-box auth-box-general">
                    <h1 className="auth-title">Registration</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {registerData.map((item, key) => (
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
                        to={"/login"}
                        state={{ background: location.state.background }}
                        replace={true}>
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}
