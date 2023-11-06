import React from "react";
// import "./product.css";
import { useParams } from "react-router-dom";
import { GetProductsById } from "../../middleware/query-product-by-id";
// import { useAuth } from "../../hooks/useAuth";
// import { addOrDelFavorite, buyNow } from "./buttonFunc";
// import { getStorage } from "../../constants/urls";
// import { getRequest } from "../../apis/getRequest";
// import Counter from "../../components/counter/Counter";
// import ProductsAPI, { type GetProductResponse } from "../../services/ProductsAPI";

export default function Product(): JSX.Element {
    const { id } = useParams<string>();

    let product;

    if (id !== undefined) {
        console.log(id);
        product = GetProductsById(id);
    }
    // const defaultParams = Object.freeze({
    //     search: undefined,
    //     category: {
    //         id: undefined,
    //         name: undefined,
    //     },
    //     params: Object.freeze({
    //         offset: 0,
    //         limit: 20,
    //         sortBy: "latest",
    //     }),
    // });

    // console.log(product);
    // const [quantity, setQuantity] = useState(1);
    // // const [product, setProduct] = useState<string | GetProductResponse>();
    // const [favButton, setFavButton] = useState({ title: "", class: "" });
    // const [cartButton, setCartButton] = useState({ title: "ADD TO CART", class: "" });
    // const [favStatus, setFavStatus] = useState(product?.favorite);
    // // const [storage, setStorage] = useState(getStorage("cart"));
    // const activeButtonClass = "btn-fav-active";
    // const clickAddToCart = () => {
    //     addToCart(id);
    //     setStorage(getStorage("cart"));
    // };

    // useEffect(() => {
    //     storage.includes(id)
    //         ? setCartButton({ title: "ED", class: activeButtonClass })
    //         : setCartButton({ title: "", class: "" });
    // }, [storage]);

    // useEffect(() => {
    //     if (id) {
    //         // const url = urlProducts + id;
    //         // getRequest(url, id, headerToken(token), setProduct);
    //         setProduct(ProductsAPI.byId(id));
    //     }
    // }, [id]);
    // useEffect(() => {
    //     setFavStatus(product?.favorite);
    // }, [product]);

    // useEffect(() => {
    //     setFavButton(
    //         favStatus ? { title: "ED", class: activeButtonClass } : { title: "", class: "" }
    //     );
    // }, [favStatus, product?.favorite]);
    // console.log(product.data.id);
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
                                {/* <div className="quantity-product"> */}
                                {/* <Counter count={quantity} setCount={setQuantity} /> */}
                                {/* <button
                                        onClick={() => calculation(quantity, setQuantity, "minus")}
                                        className="circle-button">
                                        -
                                    </button> */}
                                {/* <div className="quantity">{quantity}</div>
                                    <button
                                        onClick={() => calculation(quantity, setQuantity, "plus")}
                                        className="circle-button">
                                        +
                                    </button> */}
                                {/* </div> */}
                                {/* <div>
                                    Total: <span>${quantity * product.data.price}</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="product-buttons">
                            <div>
                                {/* <button
                                    onClick={() => {
                                        clickAddToCart();
                                    }}
                                    className={"border-button-add " + cartButton.class}>
                                    ADD{cartButton.title} TO CART
                                </button> */}
                                {/* <button
                                    onClick={() => addOrDelFavorite(id, favStatus, setFavStatus)}
                                    className={
                                        "border-button-add product-add-to-fav-button " +
                                        favButton.class
                                    }>
                                    ADD{favButton.title} TO FAVORITES
                                </button> */}
                            </div>
                            {/* <button onClick={() => buyNow} className="product-button-background">
                                Buy now
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
