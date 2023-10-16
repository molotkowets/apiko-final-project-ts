import React, { useState, useEffect } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/LogoFull.svg";
import { ReactComponent as FavoriteFalse } from "../../assets/icons/FavoritesFalse.svg";
import { ReactComponent as FavoriteTrue } from "../../assets/icons/FavoriteTrue.svg";
import CartIcon from "../cart-icon/CartIcon";
import HeaderProfile from "../auth-active/HeaderProfile";
import UnLoggedIn from "../auth-active/UnLoggedIn";

export default function Header(): JSX.Element {
    const [favState, setFavState] = useState(false);
    const isAuth = false;
    useEffect(() => {
        setFavState(false);
    }, []);
    return (
        <div className="header">
            <NavLink to="/">
                <Logo />
            </NavLink>
            <div className="header-right-side">
                <div className="header-icons">
                    <NavLink to="favorites" className={"fav-link-button"}>
                        {favState ? <FavoriteTrue /> : <FavoriteFalse />}
                    </NavLink>
                    <NavLink to="cart">
                        <CartIcon />
                    </NavLink>
                </div>
                <div className="auth-header-active">
                    {isAuth ? <HeaderProfile /> : <UnLoggedIn />}
                </div>
            </div>
        </div>
    );
}
