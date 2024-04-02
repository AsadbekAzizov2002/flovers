import React from "react";

import img2 from "./../assets/imgg.png";
import superr from "./../assets/super.png";
import gul from "./../assets/image1.png";

import { Slider } from "@mui/material";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <main>
        <div className=" px-10 mt-16">
          <div className=" flex justify-between items-center">
            <div>
              <p>Welcome to GreenShop</p>
              <h1 className=" text-6xl font-bold w-[530px]">
                Let’s Make A Better{" "}
                <span className=" text-green-600">Planet</span>
              </h1>
              <p className=" w-[550px] mt-2">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className=" py-2 px-5  bg-green-500 rounded">
                SHOP NOW
              </button>
            </div>
            <div className=" flex justify-end">
              <img className=" w-[500px]" src={img2} />
            </div>
          </div>
        </div>
      </main>
      <main className=" top_hero px-10">
        <div>
          <div>
            <div className=" chaptaraf">
              <div className=" h-[579px] chaptaraf w-[310px]  bg-[#F6F6F6]">
                <div className=" w-[268px] h-[383px] pl-4 pr-6 pt-3">
                  <h2 className=" w-[93px] font-bold">Categories</h2>
                  <div className=" flex justify-between ">
                    <h2 className=" text-green-400">House Plants</h2>
                    <h2 className=" text-green-300">(33)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className="">Potter Plants</h2>
                    <h2 className="">(12)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className="">Seeds</h2>
                    <h2 className="">(65)</h2>
                  </div>
                  <div className=" flex justify-between">
                    <h2 className=" ">Small Plants</h2>
                    <h2 className=" ">(39)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className=" ">Big Plants</h2>
                    <h2 className=" ">(23)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className="">Succulents</h2>
                    <h2 className="">(17)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className="">Trerrariums</h2>
                    <h2 className="">(19)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className=" ">Gardening</h2>
                    <h2 className=" ">(13)</h2>
                  </div>
                  <div className=" flex justify-between ">
                    <h2 className=" ">Accessories</h2>
                    <h2 className=" ">(18)</h2>
                  </div>
                  <div>
                    <h1 className=" mt-6 text-2xl font-bold">Price Range</h1>
                    <div className=" text-green-400 mt-4 w-[150px]">
                      <Slider
                        defaultValue={50}
                        color="green"
                        aria-label="Default"
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <span className=" flex gap-2">
                      <h2>Price:</h2>
                      <span className=" text-green-300 font-medium">
                        $39 - $1230
                      </span>
                    </span>
                    <button className="py-2 px-7 bg-green-400 active:bg-green-600 hover:bg-green-500">
                      Filter
                    </button>
                    <div className=" mt-[46px]">
                      <h2 className=" font-bold mb-3">Size</h2>
                      <div className=" flex justify-between ">
                        <h2 className=" ">Small</h2>
                        <h2 className=" ">(119)</h2>
                      </div>{" "}
                      <div className=" flex justify-between ">
                        <h2 className=" ">Medium</h2>
                        <h2 className=" ">(86)</h2>
                      </div>
                      <div className=" flex justify-between ">
                        <h2 className=" ">Large</h2>
                        <h2 className=" ">(78)</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  <div className=" mt-100 bg-[#EEF6F0] w-[310px]">
                    <img className=" px-" src={superr} alt="" />
                    <h2 className=" px-4 font-bold text-2xl">UP TO 75% OFF</h2>
                    <img className=" px-4 bg-inherit" src={gul} alt="" />
                  </div>
            </div >
            {/* chaptaraf shu yerda tugagan  */}
            <div>

            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
