import React, { useEffect, useState } from "react";
import "../../styles/auth-style.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import { loginData } from "./data";
import { urlLogin } from "../../constants/urls";

// import { useAuth } from "../../hooks/useAuth";
import { logIn } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import { type TAuthResponse } from "../../types/apisTypes";

export type Inputs = Record<string, string>;

export default function Login(): JSX.Element {
    const [params, setParams] = useState<Inputs>();
    const { isLoading, data } = useLogin(urlLogin, params);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<Inputs>();
    const onAuth: TAuthResponse = JSON.parse(String(localStorage.getItem("onAuth")));
    useEffect(() => {
        if (typeof onAuth?.token === "string") {
            navigate(-1);
            console.log("token: ", onAuth?.token);
        }
    }, []);

    const onSubmit: SubmitHandler<Inputs> = async (params) => {
        setParams(params);
    };
    if (data?.status === 200) {
        const { token, account } = data.data;
        console.log(token, account);
        dispatch(logIn(data.data));
        localStorage.setItem("onAuth", JSON.stringify(data.data));
        navigate(-1);
    }
    console.log("isLoading:", isLoading);
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {loginData.map((item, key) => (
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
                    <p>I have no account, </p>
                    <Link
                        className="auth-switch-link"
                        to={"/registration"}
                        state={{ background: location.state.background }}
                        replace={true}>
                        Register now
                    </Link>
                </div>
            </div>
        </div>
    );
}
