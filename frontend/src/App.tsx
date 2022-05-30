import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Pages/Home";
import Accessories from "./components/Pages/Accessories";
import Brands from "./components/Pages/Brands";
import Clothing from "./components/Pages/Clothing";
import Contact from "./components/Pages/Contact";
import Shoes from "./components/Pages/Shoes";
import Skateboards from "./components/Pages/Skateboards";
import Account from "./components/Pages/Account";
import Login from "./components/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="brands" element={<Brands />} />
          <Route path="contact" element={<Contact />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="skateboards" element={<Skateboards />} />
          <Route path="account" element={<Account />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
<LatestProducts />;

export default App;
