import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./styles/main-styles.css";
import Home from "./pages/home/Home";
import "./App.css";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
// import Product from "./pages/product/product";
import ProductContainer from "./containers/ProductContainer";
import { useDispatch } from "react-redux";
import { logIn } from "./store/slices/userSlice";

function App(): React.ReactElement | null {
    const location = useLocation();
    const background = location.state?.background;
    const dispatch = useDispatch();
    const storageAuth = localStorage.getItem("onAuth");
    if (typeof storageAuth === "string") {
        dispatch(logIn(JSON.parse(storageAuth)));
    }
    // location.state && location.state.background;
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="product/:id" element={<ProductContainer />} />
                </Route>
            </Routes>
            {Boolean(background) && (
                <Routes>
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            )}
        </>
    );
}

export default App;
