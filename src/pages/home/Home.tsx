// import { IGetProduct } from '../../types/getTypes';
import React from "react";

import { getProduct } from "../../apis/getRequest";

import "./home.css";

export default function Home(): JSX.Element {
  console.log("home page");
  interface IParams {
    offset: number;
    limit: number;
    sortBy: string;
  }
  //   interface GetProductResponse {
  //     data: IGetProduct;
  // };

  const parameters = { offset: 0, limit: 20, sortBy: "latest" };
  const products = getProduct<IParams>(parameters);
  console.log(products);

  return <div>Home</div>;
}
