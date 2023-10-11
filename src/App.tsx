import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";

import "./styles/main-styles.css";

import Home from "./pages/home/Home";

import "./App.css";

function App(): React.ReactElement | null {
  console.log("app");
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
