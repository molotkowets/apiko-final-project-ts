import React, { useState, useEffect } from "react";
import "./cart-icon.css";
import { ReactComponent as Cart } from "../../assets/icons/Cart.svg";
import { ReactComponent as CartQuantity } from "../../assets/icons/CartEllipseQuantity.svg";

export default function CartIcon(): JSX.Element {
    const [cartState, setCartState] = useState(false);
    useEffect(() => {
        setCartState(false);
    }, []);

    const quality = 5;
    return (
        <div>
            <Cart />
            {cartState && (
                <div>
                    <CartQuantity />
                    <span>{quality}</span>
                </div>
            )}
        </div>
    );
}
