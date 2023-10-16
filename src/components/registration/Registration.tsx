import React from "react";
import "./registration.css";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Registration(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

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
