import React, { useState } from 'react'
import "./cart-icon.css"
import { ReactComponent as Cart } from "../../assets/icons/Cart.svg"
import { ReactComponent as CartQuantity } from "../../assets/icons/CartEllipseQuantity.svg"

export default function CartIcon() {
    const [cartState, setCartState] = useState(false)
    let quality = 5;
  return (
    <div>
        <Cart/>
        {cartState && <div><CartQuantity/><span>{quality}</span></div>}
    </div>
  )
}
