import React from "react";
import img from "./assets/logo.png";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShoppingCard from "./pages/ShoppingCard";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProceedCheckout from "./pages/ProceedCheckout";

const Header = () => {
  return (
    <div>
      <main>
        <div className="flex items-center justify-between container py-4 px-10">
          <img src={img} alt="logo" />
          <div>
            <ul className=" flex items-center gap-5">
              <li className=" hover:text-blue-400 active:text-green-600">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className=" hover:text-blue-400 active:text-green-600">
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/shoppingcard">Shopping Card</NavLink>
              </li>
              <li>Blogs</li>
              <li className=" text-white">
                <NavLink to="/procedcheckout">p</NavLink>
              </li>
            </ul>
          </div>
          <div className=" flex">
            <span>
              <SearchIcon />
            </span>
            <ul>
              <li>
                <NavLink to="/shoppingcard">
                  <span className=" px-3">
                    <ShoppingCartIcon />
                  </span>
                </NavLink>
              </li>
            </ul>
            <button className=" px-5 py-2 rounded hover:bg-green-600 active:bg-green-700 bg-green-500">
              Login
            </button>
          </div>
        </div>
        <hr />
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />{" "}
        <Route path="/shoppingcard" element={<ShoppingCard />} />
        <Route path="/procedcheckout" element={<ProceedCheckout />} />
      </Routes>
    </div>
  );
};

export default Header;
