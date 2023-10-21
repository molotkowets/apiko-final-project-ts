import React from "react";
import "../../styles/auth-style.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import { loginData } from "./data";
import { postAuth } from "../../apis/postAuth";
import { urlLogin } from "../../constants/urls";
import { useAuth } from "../../hooks/useAuth";
import { logIn } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

export type Inputs = Record<string, string>;

export default function Login(): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await postAuth<Inputs>(urlLogin, data);
        // this is error
        if (typeof response === "string") {
            console.error("error = ", response);
            return;
        }
        const { token, account } = response;
        console.log(token, account);

        dispatch(logIn(response));
    };
    console.log(useAuth());
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
