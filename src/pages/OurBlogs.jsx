import React from "react";
import EastIcon from "@mui/icons-material/East";

import gul7 from "./../assets/gul7.png";
import gul11 from "./../assets/gul11.png";
import gul12 from "./../assets/gul12.png";
import gul13 from "./../assets/gul13.png";
import gul14 from "./../assets/gul14.png";
import gul15 from "./../assets/gul15.png";

const OurBlogs = () => {
  return (
    <div>
      <main>
        <div className=" mt-[45px] px-10">
          <div className=" flex gap-10">
            <div className=" flex items-center w-[586px] justify-between bg-[#FBFBFB]">
              <div>
                <img src={gul7} alt="" />
              </div>
              <div>
                <h2 className=" font-black w-[150px]">
                  SUMMER CACTUS $ SUCCULENTS
                </h2>
                <p className=" w-[292px] font-normal">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </p>
                <button className=" px-[27px] py-[11px] rounded-md bg-green-400 mt-6">
                  <span className=" flex gap-2 text-white">
                    <span>Find More</span>
                    <div className="">
                      <EastIcon />
                    </div>
                  </span>
                </button>
              </div>
            </div>
            <div className=" flex items-center w-[586px] justify-between bg-[#FBFBFB]">
              <div>
                <img src={gul11} alt="" />
              </div>
              <div>
                <h2 className=" font-black w-[150px]">
                  SUMMER CACTUS $ SUCCULENTS
                </h2>
                <p className=" w-[292px] font-normal">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </p>
                <button className=" px-[27px] py-[11px] rounded-md bg-green-400 mt-6">
                  <span className=" flex gap-2 text-white">
                    <span>Find More</span>
                    <div className="">
                      <EastIcon />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=" px-10 container">
          <h2 className=" w-[209px] font-bold mt-[138px] mb-4 mx-auto">
            Our Blog Posts
          </h2>
          <p className=" w-[557px] mx-auto mb-9">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <div className=" grid grid-cols-4 mb-[100px]">
            <div>
              <img src={gul12} alt="" />
              <h2 className=" w-[252px] text-green-300 mb-1">
                September 12 I Read in 6 minutes
              </h2>
              <h1 className=" w-[179px]  font-bold">
                Cactus & Succulent Care Tips
              </h1>
              <p className=" w-[242px]">
                Cacti are succulents are easy care plants for any home or patio.{" "}
              </p>
              <p className=" flex gap-5">
                <h2 className=" font-medium">Read More</h2>
                <p>
                  <EastIcon />
                </p>
              </p>
            </div>{" "}
            <div>
              <img src={gul13} alt="" />
              <h2 className=" w-[252px] text-green-300 mb-1">
                September 13 I Read in 2 minutes{" "}
              </h2>
              <h1 className=" w-[179px]  font-bold">
                Top 10 Succulents for Your Home
              </h1>
              <p className=" w-[242px]">
                Best in hanging baskets. Prefers medium to high light.{" "}
              </p>
              <p className=" flex gap-5">
                <h2 className=" font-medium">Read More</h2>
                <p>
                  <EastIcon />
                </p>
              </p>
            </div>{" "}
            <div>
              <img src={gul14} alt="" />
              <h2 className=" w-[252px] text-green-300 mb-1">
                September 12 I Read in 6 minutes
              </h2>
              <h1 className=" w-[179px]  font-bold">
                Cactus & Succulent Care Tips
              </h1>
              <p className=" w-[242px]">
                Cacti are succulents are easy care plants for any home or patio.{" "}
              </p>
              <p className=" flex gap-5">
                <h2 className=" font-medium">Read More</h2>
                <p>
                  <EastIcon />
                </p>
              </p>
            </div>{" "}
            <div>
              <img src={gul15} alt="" />
              <h2 className=" w-[252px] text-green-300 mb-1">
                September 12 I Read in 6 minutes
              </h2>
              <h1 className=" w-[179px]  font-bold">
                Cactus & Succulent Care Tips
              </h1>
              <p className=" w-[242px]">
                Cacti are succulents are easy care plants for any home or patio.{" "}
              </p>
              <p className=" flex gap-5">
                <h2 className=" font-medium">Read More</h2>
                <p>
                  <EastIcon />
                </p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurBlogs;
