import React from "react";
import "./auth-active.css";
import { NavLink, useLocation } from "react-router-dom";

export default function UnLoggedIn(): JSX.Element {
    const location = useLocation();
    // ??  state={{background: location}

    return (
        <div className="auth-active-container">
            <NavLink
                className={"header-button-auth"}
                to="registration"
                state={{ background: location }}>
                REGISTER
            </NavLink>
            <div className="separate-rectangle"></div>
            <NavLink className={"header-button-auth"} to="login" state={{ background: location }}>
                LOG IN
            </NavLink>
        </div>
    );
}
