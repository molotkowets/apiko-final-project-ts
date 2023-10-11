import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout(): JSX.Element {
  return (
    <div className="body-wrapper">
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
