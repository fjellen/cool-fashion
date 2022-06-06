import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./styles/global"

import Home from "./components/Pages/Home";
import Accessories from "./components/Pages/Accessories";
import Brands from "./components/Pages/Brands";
import Clothing from "./components/Pages/Clothing";
import Contact from "./components/Pages/Contact";
import Shoes from "./components/Pages/Shoes";
import Skateboards from "./components/Pages/Skateboards";
import Account from "./components/Pages/Account";
import Login from "./components/Pages/Login";
import Tshirts from "./components/Pages/T-Shirts";
import Hoodies from "./components/Pages/Hoodies";
import Pants from "./components/Pages/Pants";
import Layout from "./components/Layout.tsx/Layout";
import Register from "./components/Pages/Register";
import ProductDetails from "./components/Pages/[slug]";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Layout />}>
     
          <Route index element={<Home />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="accessories/:slug" element={<ProductDetails />} />
          <Route path="brands" element={<Brands />} />
          <Route path="contact" element={<Contact />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="clothing/:slug" element={<ProductDetails />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="shoes/:slug" element={<ProductDetails />} />
          <Route path="skateboards" element={<Skateboards />} />
          <Route path="shoes/:slug" element={<ProductDetails />} />
          <Route path="account" element={<Account />} />
          <Route path="tshirts" element={<Tshirts />} />
          <Route path="tshirts/:slug" element={<ProductDetails />} />
          <Route path="hoodies" element={<Hoodies />} />
          <Route path="hoodies/:slug" element={<ProductDetails />} />
          <Route path="pants" element={<Pants />} />
          <Route path="pants/:slug" element={<ProductDetails />} />
          <Route path="Register" element={<Register />} />
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />

    <Route path='*'  element={<NotFound/>} />
      </Routes>
 
    </BrowserRouter>
  );
}

export default App;
