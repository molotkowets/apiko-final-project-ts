// import { IGetProduct } from '../../types/getTypes';
import React, { useEffect } from "react";

import { getProduct } from "../../apis/getRequest";

import "./home.css";
import { useAuth } from "../../hooks/useAuth";

export default function Home(): JSX.Element {
    const isAuth = Boolean(useAuth().token);
    console.log(isAuth);
    console.log("home page");
    interface IParams {
        offset: number;
        limit: number;
        sortBy: string;
    }
    //   interface GetProductResponse {
    //     data: IGetProduct;
    // };
    useEffect(() => {
        const parameters = { offset: 0, limit: 20, sortBy: "latest" };
        const products = getProduct<IParams>(parameters);
        console.log(products);
    }, []);

    return <div>Home</div>;
}
