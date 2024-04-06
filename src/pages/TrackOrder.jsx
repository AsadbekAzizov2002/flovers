import React from "react";
import thank from "./../assets/thank.svg";

import gul6 from "./../assets/gul6.png";
import gul4 from "./../assets/gul4.png";
import gul5 from "./../assets/gul5.png";

import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const TrackOrder = () => {
  return (
    <div>
      <main>
        <div className="container ">
          <div className=" border w-[625px] mt-[135px] h-[900px]  mx-auto  px-10 bg-white">
            <div className=" w-[578px] mx-auto ">
              <div className=" bg-[#46A3580F]">
                <div>
                  <div className="w-3 ml-auto mr-5 pt-5 text-green-400">
                    <CloseIcon />
                  </div>
                  <img className=" w-20 mx-auto" src={thank} alt="" />
                </div>
                <h2 className=" w-[216px] mx-auto py-4">
                  Your order has been received
                </h2>
              </div>
              <div className=" flex items-center justify-between mt-4 mx-10">
                <div>
                  <p className=" text-[#727272]">Order Number</p>
                  <p className=" text-[#727272]">19586687</p>
                </div>
                <div>
                  <p className=" text-[#727272]">Date</p>
                  <p className=" text-[#727272]">15 Sep, 2021</p>
                </div>{" "}
                <div>
                  <p className=" text-[#727272]">Total</p>
                  <p className=" text-[#727272]">2,699.00</p>
                </div>{" "}
                <div className="">
                  <p className=" text-[#727272]">Payment Method</p>
                  <p className=" text-[#727272]">Cash on delivery</p>
                </div>
              </div>
              <hr className=" w-[578px] mt-4" />
              <div className=" px-10 mt-4">
                <h2 className=" font-bold">Order Details</h2>
                <div className=" flex mt-3">
                  <h1 className=" font-medium">Products</h1>
                  <h2 className=" font-medium ml-[242px] mr-[85px]">Qty</h2>
                  <h2 className=" font-medium">Subtotal</h2>
                </div>
                <hr className=" mt-[10px]" />
                <div>
                  <div className=" w-[495px]">
                    <div className=" flex items-center justify-between w-[495px] h-[70px] bg-[#FBFBFB]">
                      <img className="w-[70px] h-[70px]" src={gul6} alt="" />
                      <span>
                        <h2 className=" font-bold">Barberton Daisy</h2>
                        <p className=" font-normal">
                          <span className=" text-[#A5A5A5]">SKU:</span>{" "}
                          <span className=" text-[#727272]">1995751877966</span>
                        </p>
                      </span>
                      <p className=" text-[#727272]">(x 2)</p>
                      <h2 className=" font-bold text-[#46A358] pr-4">
                        $238.00
                      </h2>
                    </div>{" "}
                    <div className=" my-3 flex items-center justify-between w-[495px] h-[70px] bg-[#FBFBFB]">
                      <img className="w-[70px] h-[70px]" src={gul4} alt="" />
                      <span>
                        <h2 className=" font-bold">Blushing Bromeliad</h2>
                        <p className=" font-normal">
                          <span className=" text-[#A5A5A5]">SKU:</span>{" "}
                          <span className=" text-[#727272]">
                            19957518757065
                          </span>
                        </p>
                      </span>
                      <p className=" text-[#727272]">(x 6)</p>
                      <h2 className=" font-bold text-[#46A358] pr-4">
                        $834.00
                      </h2>
                    </div>{" "}
                    <div className=" flex items-center justify-between w-[495px] h-[70px] bg-[#FBFBFB]">
                      <img className="w-[70px] h-[70px]" src={gul5} alt="" />
                      <span>
                        <h2 className=" font-bold">Aluminum Plant</h2>
                        <p className=" font-normal">
                          <span className=" text-[#A5A5A5]">SKU:</span>{" "}
                          <span className=" text-[#727272]">1995751877966</span>
                        </p>
                      </span>
                      <p className=" text-[#727272]">(x 9)</p>
                      <h2 className=" font-bold text-[#46A358] pr-4">
                        $1,611.00
                      </h2>
                    </div>
                    <div>
                      <div className=" flex mt-[20px] ml-[202px]">
                        <h2>Shiping</h2>
                        <h2 className=" font-medium ml-[214px] mb-[25px]">
                          $16.00
                        </h2>
                      </div>
                      <div className=" flex mt-6 ml-[202px]">
                        <h2 className=" font-bold">Total</h2>
                        <h2 className=" font-bold text-green-400 ml-[200px]">
                          $2,699.00
                        </h2>
                      </div>
                      <hr className=" my-5" />
                      <p className=" w-[523px] mx-auto text-[#727272] mb-[49px]">
                        Your order is currently being processed. You will
                        receive an order confirmation email shortly with the
                        expected delivery date for your items.
                      </p>
                      <ul>
                        <li>
                          <NavLink to="/login">
                            <button className="w-[162px] px-[18px] py-4 bg-green-400 text-white mb-[58px] rounded ml-[188px]">
                              Track your order
                            </button>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackOrder;
