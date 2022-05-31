import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Tshirts from "./components/Pages/T-Shirts";
import Hoodies from "./components/Pages/Hoodies";
import Pants from "./components/Pages/Pants";
import Layout from "./components/Layout.tsx/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="brands" element={<Brands />} />
          <Route path="contact" element={<Contact />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="skateboards" element={<Skateboards />} />
          <Route path="account" element={<Account />} />
          <Route path="Login" element={<Login />} />
          <Route path="tshirts" element={<Tshirts/>} />
          <Route path="hoodies" element={<Hoodies/>} />
          <Route path="pants" element={<Pants/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
