import React from "react";
import Header from "./Component/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home.jsx";
import Cart from "./Component/Cart.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
