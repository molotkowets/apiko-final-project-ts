import React, { useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import { GetProductsById } from "../../middleware/query-product-by-id";
import Counter from "../../components/counter/Counter";
import { useAuth } from "../../hooks/useAuth";
// import { useAuth } from "../../hooks/useAuth";
// import ProductsAPI, { type GetProductResponse } from "../../services/ProductsAPI";

export default function Product(): JSX.Element {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams<string>();
    let product;
    const token = useAuth().token;

    if (id !== undefined) {
        console.log(id, token);
        product = GetProductsById(id, token);
    }
    console.log(product.data);

    return (
        <>
            {Boolean(product?.data?.id) && (
                <div className="product-window">
                    <div className="product-wrapper">
                        <div className="product-description-wrapper">
                            <div className="product-img-wrapper">
                                <img
                                    className="product-img-description"
                                    src={product.data.picture}
                                    alt=""
                                />
                            </div>
                            <div className="product-description">
                                <div>
                                    <h2>{product.data.title}</h2>
                                    <p className="product-description-text">
                                        {product.data.description}
                                    </p>
                                </div>
                                <div className="product-desc-price-wrapper">
                                    <span className="product-desc-price">PRICE </span>
                                    <span className="product-desc-price-num">
                                        ${product.data.price}
                                    </span>
                                </div>
                                <div className="quantity-product">
                                    <Counter counter={quantity} setCounter={setQuantity} />
                                </div>
                                <div>
                                    Total: <span>{quantity * product.data.price}</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-buttons">
                            <div>
                                <button className={"border-button-add "}>ADD TO CART</button>
                                <button className={"border-button-add product-add-to-fav-button "}>
                                    ADD TO FAVORITES
                                </button>
                            </div>
                            <button className="product-button-background">Buy now</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
