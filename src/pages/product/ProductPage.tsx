import React, { useState } from "react";
import "./product-page.css";
import Counter from "../../components/counter/Counter";
import { type IGetProduct } from "../../types/apisTypes";
import { queryByIdToFavorite } from "../../query's/query-favorite-api";
import { type TToken } from "../../query's/query.selection-request ";
export interface IProduct {
    product: IGetProduct;
    token: TToken;
}
export default function ProductPage({ product, token }: IProduct): JSX.Element {
    const [quantity, setQuantity] = useState(1);
    const dataProduct = product;
    console.log(product);
    const [favorite, setFavorite] = useState(Boolean(dataProduct?.favorite));
    if (favorite) {
        setFavorite(favorite);
    }

    const { data, refetch } = queryByIdToFavorite(dataProduct.id.toString(), token);
    console.log(data);
    function toFavorite(): void {
        refetch();
        setFavorite(!favorite);
    }

    return (
        <>
            <div className="product-window">
                <div className="product-wrapper">
                    <div className="product-description-wrapper">
                        <div className="product-img-wrapper">
                            <img
                                className="product-img-description"
                                src={dataProduct?.picture}
                                alt=""
                            />
                        </div>
                        <div className="product-description">
                            <div>
                                <h2>{dataProduct?.title}</h2>
                                <p className="product-description-text">
                                    {dataProduct?.description}
                                </p>
                            </div>
                            <div className="product-desc-price-wrapper">
                                <span className="product-desc-price">PRICE </span>
                                <span className="product-desc-price-num">
                                    ${dataProduct?.price}
                                </span>
                            </div>
                            <div className="quantity-product">
                                <Counter counter={quantity} setCounter={setQuantity} />
                            </div>
                            <div>
                                Total: <span>{quantity * Number(dataProduct?.price)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-buttons">
                        <div>
                            <button className={"border-button-add "}>ADD TO CART</button>
                            <button
                                onClick={toFavorite}
                                className={`border-button-add product-add-to-fav-button ${
                                    favorite && "product-button-background"
                                }`}>
                                {favorite ? "ADDed TO FAVORITES" : "ADD TO FAVORITES"}
                            </button>
                        </div>
                        <button className="product-button-background">Buy now</button>
                    </div>
                </div>
            </div>
        </>
    );
}
