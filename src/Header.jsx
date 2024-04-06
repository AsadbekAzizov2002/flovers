import React from "react";

import img from "./assets/logo.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCard from "./pages/ShoppingCard";
import Shop from "./pages/Shop";
import ProceedCheckout from "./pages/ProceedCheckout";
import Login from "./pages/Login";
import TrackOrder from "./pages/TrackOrder";
import MyAccount from "./pages/MyAccount";

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
              <li className=" w-[1px] text-white">
                <NavLink to="/trackorder">o</NavLink>
              </li>
              <li className=" hover:text-blue-400 active:text-green-600">
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className=" w-[1px] text-white">
                <NavLink to="/myaccount">i</NavLink>
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
          <div className=" flex items-center">
            <span>
              <SearchIcon />
            </span>
            <ul className=" flex items-center">
              <li>
                <NavLink to="/shoppingcard">
                  <span className=" px-3">
                    <ShoppingCartIcon />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <button className=" px-5 py-2 rounded hover:bg-green-600 active:bg-green-700 bg-green-500">
                    Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/myaccount" element={<MyAccount/>} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/shoppingcard" element={<ShoppingCard />} />
        <Route path="/procedcheckout" element={<ProceedCheckout />} />{" "}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Header;
