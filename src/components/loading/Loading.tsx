import React from "react";
import "./loading.css";
// import { queryAuthLogin } from "../../query's/query-aunt-login";
import { type Inputs } from "../login/Login";

export default function Loading(params: Inputs): JSX.Element {
    // const data = queryAuthLogin(params);
    console.log(params);
    return (
        <div className="loading-auth">
            <h2>Loading</h2>
        </div>
    );
}
