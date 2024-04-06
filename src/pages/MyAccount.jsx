import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import curver from "./../assets/curver.svg";
import gal from "./../assets/gal.svg";

const MyAccount = () => {
  const [step, setStep] = useState(1);
  const increment = () => {
    setStep(step + 1);
  };
  const decrement = () => {
    setStep(step - 1);
  };
  return (
    <div>
      <main className=" container px-10">
        {step === 1 && (
          <div>
            <div className=" flex  mt-[61px]">
              <div className=" w-[310px] h-[461px] bg-[#FBFBFB] ">
                <h1 className=" mt-[17px] ml-[18px] font-bold mb-[18px]">
                  My Account
                </h1>
                <div className=" active:bg-gray-400 h-10 flex items-center gap-[14px]">
                  <span className=" ml-[26px] text-green-400">
                    <PersonOutlineIcon />
                  </span>
                  <h2 className=" font-bold text-green-300">Acoount Detalis</h2>
                </div>{" "}
                <div onClick={increment} className=" my-6 flex items-center gap-[14px]">
                  <span className=" ml-[26px] ">
                    <LocationOnIcon />
                  </span>
                  <h2 className=" font-bold ">Address</h2>
                </div>{" "}
                <div className=" flex items-center gap-[14px]">
                  <span className=" ml-[26px]">
                    <ShoppingCartIcon />
                  </span>
                  <h2 className=" font-bold ">Order</h2>
                </div>{" "}
                <div className=" my-6 flex items-center gap-[14px]">
                  <span className=" ml-[26px]">
                    <FavoriteIcon />
                  </span>
                  <h2 className=" font-bold ">Wishlist</h2>
                </div>{" "}
                <div className=" flex items-center gap-[14px]">
                  <span className=" ml-[26px]">
                    <img src={curver} alt="" />
                  </span>
                  <h2 className=" font-bold ">Reposts</h2>
                </div>{" "}
                <div className="my-6 flex items-center gap-[14px]">
                  <span className=" ml-[26px] ">
                    <CloudDownloadIcon />
                  </span>
                  <h2 className=" font-bold ">Downloads</h2>
                </div>
                <div className=" mb-7 flex items-center gap-[14px]">
                  <span className=" ml-[26px] ">
                    <FmdBadIcon />
                  </span>
                  <h2 className=" font-bold ">Ssupport</h2>
                </div>
                <hr className="" />
                <div className=" mt-5 ml-[26px] flex text-green-300 gap-4">
                  <span>
                    <ExitToAppIcon />
                  </span>
                  <h2 className=" font-bold ">Loguot</h2>
                </div>
              </div>
              <div className=" ml-7 w-[417px] orta qism">
                <h2 className="mb-5 font-medium">Personal Information</h2>
                <h2 className=" mb-[10px] font-normal">First Name</h2>
                <input
                  type="text "
                  className=" border rounded w-[417px] h-10 mb-[30px]"
                />
                <h2 className=" mb-[10px]">Email address</h2>
                <input
                  type="text"
                  className=" border rounded w-[417px] h-10 mb-[30px]"
                />
                <h2>Username</h2>
                <input
                  type="text"
                  className=" border rounded w-[417px] h-10 mb-[30px]"
                />
                <h2 className=" font-medium mb-5">Password change</h2>
                <h2 className=" mb-[10px]">Current password</h2>
                <input
                  type="text"
                  className=" border rounded w-[417px] h-10 mb-[30px]"
                />
                <h2>New password</h2>
                <input
                  type="text"
                  className=" border rounded w-[417px] h-10 mb-[30px]"
                />
                <h2 className=" mb-[10px]">Confirm new password</h2>
                <input
                  type="text"
                  className=" border rounded w-[417px] h-10 mb-[50px]"
                />
                <button className=" py-3 px-[22px] bg-green-400 active:bg-green-500">
                  Save Change
                </button>
              </div>
              <div className="ml-[28px] ongtaraf">
                <h2 className=" mt-11 mb-[10px]">Last Name</h2>
                <input
                  type="text"
                  className=" border rounded w-[417px] h-10 mb-[30px]"
                />
                <h2 className=" mb-[10px]">Phone Number</h2>
                <span className="mb-[20px] flex items-center">
                  <input
                    type="text "
                    placeholder="+998"
                    className=" border rounded w-[78px] py-2 pl-[10px]"
                  />
                  <input
                    type="text"
                    className=" border rounded ml-2 w-[329px] h-10"
                  />
                </span>
                <h2 className=" mb-1">Photo</h2>
                <span className=" items-center flex">
                  <div className="mr-[23px] items-center w-[50px] h-[50px] border rounded-3xl">
                    <img className=" py-3 pl-3" src={gal} alt="" />
                  </div>
                  <button className=" py-3 px-6 text-white bg-green-400 border rounded-xl">
                    Change
                  </button>
                  <h2 className=" ml-[21px]">Remove</h2>
                </span>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className=" flex  mt-[61px] ">
              <div className=" chaptaraf">
                <div className=" w-[310px] h-[461px] bg-[#FBFBFB] ">
                  <h1 className=" mt-[17px] ml-[18px] font-bold mb-[18px]">
                    My Account
                  </h1>
                  <div onClick={decrement} className=" flex items-center gap-[14px]">
                    <span className=" ml-[26px] text-green-400">
                      <PersonOutlineIcon />
                    </span>
                    <h2 className=" font-bold text-green-300">
                      Acoount Detalis
                    </h2>
                  </div>{" "}
                  <div className=" my-6 flex items-center gap-[14px]">
                    <span className=" ml-[26px] ">
                      <LocationOnIcon />
                    </span>
                    <h2 className=" font-bold ">Address</h2>
                  </div>{" "}
                  <div className=" flex items-center gap-[14px]">
                    <span className=" ml-[26px]">
                      <ShoppingCartIcon />
                    </span>
                    <h2 className=" font-bold ">Order</h2>
                  </div>{" "}
                  <div className=" my-6 flex items-center gap-[14px]">
                    <span className=" ml-[26px]">
                      <FavoriteIcon />
                    </span>
                    <h2 className=" font-bold ">Wishlist</h2>
                  </div>{" "}
                  <div className=" flex items-center gap-[14px]">
                    <span className=" ml-[26px]">
                      <img src={curver} alt="" />
                    </span>
                    <h2 className=" font-bold ">Reposts</h2>
                  </div>{" "}
                  <div className="my-6 flex items-center gap-[14px]">
                    <span className=" ml-[26px] ">
                      <CloudDownloadIcon />
                    </span>
                    <h2 className=" font-bold ">Downloads</h2>
                  </div>
                  <div className=" mb-7 flex items-center gap-[14px]">
                    <span className=" ml-[26px] ">
                      <FmdBadIcon />
                    </span>
                    <h2 className=" font-bold ">Support</h2>
                  </div>
                  <hr className="" />
                  <div className=" mt-5 ml-[26px] flex text-green-300 gap-4">
                    <span>
                      <ExitToAppIcon />
                    </span>
                    <h2 className=" font-bold ">Loguot</h2>
                  </div>
                </div>
              </div>
              <div className="orta ml-[28px]">
                <h2 className=" mb-5 font-medium">Personal Information</h2>
                <p className=" mb-[45px]">
                  The following addresses will be used on the checkout page by
                  default.
                </p>
                <h2 className=" mb-[10px]">First Name</h2>
                <input
                  type="text"
                  className=" border rounded w-[417px] h-10 mb-[30px]"
                />
                <h2 className=" mb-[10px]">Country / Region</h2>
                <input
                  type="text"
                  placeholder="Select a country / region"
                  className=" pl-3 border rounded w-[417px] h-10 mb-[30px]"
                />
                <h2 className=" mb-[10px]">Street Address</h2>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className=" border rounded w-[417px] h-10 pl-3 mb-[37px]"
                />
                <h2 className=" font-medium mb-5">State</h2>
                <input
                  type="text"
                  placeholder="Select a state"
                  className=" border rounded w-[417px] h-10 pl-3 mb-[37px]"
                />
                <h2 className=" mb-[10px]">Email address</h2>
                <input
                  type="text"
                  className=" border rounded w-[417px] h-10 mb-[30px]"
                />
                <div>
                  <button className=" active:bg-green-600 bg-green-400 text-white py-3 px-[22px] mb-16">
                    Save Address
                  </button>
                </div>
                <h1 className=" font-semibold mb-[11px]">Shipping Address</h1>
                <h2>You have not set up this type of address yet.</h2>
              </div>
              <div className=" ml-[48px]">
                <h2 className=" text-green-400 mb-[54px] ml-[380px]">Add</h2>
                <h2 className=" font-medium mb-5">Last Name</h2>
                <input
                  type="text"
                  placeholder=""
                  className=" border rounded w-[417px] h-10 pl-3 mb-[37px]"
                />
                <h2 className=" font-medium mb-5">Town / City</h2>
                <input
                  type="text"
                  placeholder=""
                  className=" border rounded w-[417px] h-10 pl-3 mb-[57px]"
                />

                <input
                  type="text"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  className=" border rounded w-[417px] h-10 pl-3 mb-[37px]"
                />
                <h2 className=" font-medium mb-5">Zip</h2>
                <input
                  type="text"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  className=" border rounded w-[417px] h-10 pl-3 mb-[37px]"
                />
                <h2 className=" mb-[10px]">Phone Number</h2>
                <span className="mb-[178px] flex items-center">
                  <input
                    type="text "
                    placeholder="+998"
                    className=" border rounded w-[78px] py-2 pl-[10px]"
                  />
                  <input
                    type="text"
                    className=" border rounded ml-2 w-[329px] h-10"
                  />
                </span>
                <div className=" flex items-center ">
                  <div className=" w-4 h-4 border mr-2 border-green-400 rounded-full active:bg-green-500"></div>
                  <h2 className=" mr-[169px]">Same as billing address</h2>
                  <h2 className=" font-semibold text-green-400">Add</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyAccount;
