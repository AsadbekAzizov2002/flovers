import React from "react";

import gul6 from "./../assets/gul6.png";
import gul4 from "./../assets/gul4.png";
import gul5 from "./../assets/gul5.png";
import frame5 from "./../assets/frame5.png";
import Footer from "./Footer";

const ProceedCheckout = () => {
  return (
    <div>
      <main>
        <div className=" container px-10 mt-[36px]">
          <div className=" flex mb-9">
            <h1 className=" font-bold">Home</h1>
            <h2>/Shop</h2>
            <h2>/Checkout</h2>
          </div>
          <div className=" flex justify-between">
            <div className="chaptaraf">
              <h2 className=" font-bold">Billing Address</h2>

              <div className=" flex gap-[42px]">
                <div>
                  <h2 className=" mb-[10px]">First Name</h2>
                  <input
                    type="text "
                    className=" mb-[30px] w-[350px] h-10 border"
                  />
                  <h2 className=" mb-[10px]"> Country / Region</h2>
                  <input
                    type="text"
                    placeholder="Select a country / region"
                    className=" w-[350px] h-10 px-3 border mb-[30px] font-normal text-[#A5A5A5]"
                  />
                  <h2 className=" mb-[10px]">Street Address</h2>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    className=" w-[350px] h-10 px-3 border mb-[30px] font-normal text-[#A5A5A5]"
                  />
                  <h2 className=" mb-[10px]">State</h2>
                  <input
                    type="text"
                    placeholder="Select a state"
                    className=" w-[350px] h-10 px-3 border mb-[30px] font-normal text-[#A5A5A5]"
                  />{" "}
                  <h2 className=" mb-[10px]">Email address</h2>
                  <input
                    type="text"
                    placeholder=""
                    className=" w-[350px] h-10 px-3 border mb-[30px] font-normal text-[#A5A5A5]"
                  />
                  <span className=" flex items-center gap-2">
                    <span className=" w-3 h-3 border rounded border-green-400"></span>
                    <h2 className=" font-medium mb-14">
                      Ship to a different address?
                    </h2>
                  </span>
                  <h2 className=" mb-[10px]">Order notes (optional)</h2>
                  <textarea
                    className=" w-[350px]  h-[150px] border"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="w-[355px]">
                  <h1 className=" mb-[10px]">Last Name</h1>
                  <input
                    type="text "
                    className=" mb-[30px] w-[350px] h-10 border"
                  />
                  <h1 className=" mb-[10px]">Town / City</h1>
                  <input
                    type="text "
                    className=" mb-[55px] w-[350px] h-10 border"
                  />
                  <input
                    type="text"
                    placeholder="Appartment, suite, unit, etc. (optional)"
                    className=" w-[350px] h-10 px-3 border mb-[30px] font-normal text-[#A5A5A5]"
                  />
                  <h2 className=" mb-[10px]">Zip</h2>
                  <input
                    type="text "
                    className=" mb-[30px] w-[350px] h-10 border"
                  />
                  <h2 className=" mb-[10px]">Phone Number</h2>
                  <input
                    type="text"
                    placeholder="+998"
                    className=" w-[78px] h-10 border py-3 pl-1"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className=" font-bold mb-[21px]">Your Order</h2>
              <div className=" w-[405px] flex justify-between">
                <h2 className=" font-medium">Products</h2>
                <h2 className="mb-6 font-medium">Subtotal</h2>
              </div>
              <hr className="w-[405px] mb-[11px] border border-green-300" />
              <div>
                <div className=" flex items-center justify-between w-[455px] h-[70px] bg-[#FBFBFB]">
                  <img className="w-[70px] h-[70px]" src={gul6} alt="" />
                  <span>
                    <h2 className=" font-bold">Barberton Daisy</h2>
                    <p className=" font-normal">
                      <span className=" text-[#A5A5A5]">SKU:</span>{" "}
                      <span className=" text-[#727272]">1995751877966</span>
                    </p>
                  </span>
                  <p className=" text-[#727272]">(x 2)</p>
                  <h2 className=" font-bold text-[#46A358] pr-4">$238.00</h2>
                </div>{" "}
                <div className=" my-3 flex items-center justify-between w-[455px] h-[70px] bg-[#FBFBFB]">
                  <img className="w-[70px] h-[70px]" src={gul4} alt="" />
                  <span>
                    <h2 className=" font-bold">Blushing Bromeliad</h2>
                    <p className=" font-normal">
                      <span className=" text-[#A5A5A5]">SKU:</span>{" "}
                      <span className=" text-[#727272]">19957518757065</span>
                    </p>
                  </span>
                  <p className=" text-[#727272]">(x 6)</p>
                  <h2 className=" font-bold text-[#46A358] pr-4">$834.00</h2>
                </div>{" "}
                <div className=" flex items-center justify-between w-[455px] h-[70px] bg-[#FBFBFB]">
                  <img className="w-[70px] h-[70px]" src={gul5} alt="" />
                  <span>
                    <h2 className=" font-bold">Aluminum Plant</h2>
                    <p className=" font-normal">
                      <span className=" text-[#A5A5A5]">SKU:</span>{" "}
                      <span className=" text-[#727272]">1995751877966</span>
                    </p>
                  </span>
                  <p className=" text-[#727272]">(x 9)</p>
                  <h2 className=" font-bold text-[#46A358] pr-4">$1,611.00</h2>
                </div>
                <div className=" w-[455px]">
                  <h2 className=" font-normal">
                    Have a coupon code?{" "}
                    <span className=" text-green-300 mb-[19px]">
                      Click here
                    </span>
                  </h2>
                  <div className=" w-[405px]">
                    <div className=" mb-[19px] flex justify-between">
                      <h2 className=" font-normal">Subtotal</h2>
                      <h2 className=" font-medium">$2,683.00</h2>
                    </div>
                    <div className=" flex justify-between mb-[21px]">
                      <h2>Coupon Discount</h2>
                      <h2>(-) 00.00</h2>
                    </div>
                    <div className=" flex justify-between mb-2">
                      <h2>Shiping</h2>
                      <h2 className=" font-medium"> $16.00</h2>
                    </div>
                    <h2 className=" text-green-300 w-[181px] ml-auto">
                      View shipping charge
                    </h2>
                    <hr className=" mt-4 w-[455px] border border-green-300" />
                  </div>
                  <div className=" flex justify-between">
                    <h2 className=" font-bold">Total</h2>
                    <h2>$2,699.00</h2>
                  </div>
                  <div>
                    <h2>Payment Method</h2>
                    <div>
                      <div className=" flex gap-5 w-[405px] h-[45px] border">
                        <div className=" items-center mt-5 ml-3 w-3 h-3 hover:bg-green-200 border-green-400 active:bg-green-300 border rounded"></div>
                        <img className=" mt-4" src={frame5} alt="cartalar" />
                      </div>
                      <div className=" my-4 items-center flex gap-5 w-[405px] h-[45px] border">
                        <div className=" items-center ml-3 w-3 h-3 hover:bg-green-200 border-green-400 active:bg-green-300 border rounded"></div>
                        <h2>Dorect bank transfer</h2>
                      </div>
                      <div className=" items-center flex gap-5 w-[405px] h-[45px] border">
                        <div className=" items-center  ml-3 w-3 h-3 hover:bg-green-200 border-green-400 active:bg-green-300 border rounded"></div>
                        <h2>Cash on delivery</h2>
                      </div>
                      <button className=" py-3 px-[162px] mt-[49px] active:bg-green-500 hover:bg-green-200 border rounded text-white mb-[210px] bg-green-400">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ProceedCheckout;
