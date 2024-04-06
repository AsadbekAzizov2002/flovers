import React from "react";
import gul1 from "./../assets/gul1.png";
import gul2 from "./../assets/gul2.png";
import gul3 from "./../assets/gul3.png";
import gul4 from "./../assets/gul4.png";
import gul5 from "./../assets/gul5.png";
import gul6 from "./../assets/gul6.png";
import gul7 from "./../assets/gul7.png";
import gul8 from "./../assets/gul8.png";
import gul9 from "./../assets/gul9.png";
import gul10 from "./../assets/gul10.png";

import { Rating } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";

const Shop = () => {
   const [flover, setFlove] = useState([]);
   console.log(flover);
   useEffect(() => {
     fetch("http://localhost:7774/flowers")
       .then((res) => res.json())
       .then((data) => setFlove(data.slice(5, 9)));
   }, []);
  return (
    <div>
      <main>
        <div className=" flex px-10 container">
          <div className=" w-[775px] chaptaraf">
            <div className=" flex mt-9">
              <h2 className=" font-bold">Home / </h2>
              <span>Shop</span>
            </div>
            <div className="w-[700px] justify-between  items-center flex mt-11">
              <div>
                <div className="  w-[100px] h-[100px] bg-[#FBFBFB]">
                  {flover.map((flow) => (
                    <div className="">
                      <img
                        className=" space-y-2 h-[100px] w-[100px]"
                        src={flow.image_url}
                        alt=""
                      />
                    </div>
                  ))}
                  {/* <img src={gul1} alt="" /> */}
                </div>
                <div className="  mt-3 w-[100px] h-[100px] bg-[#FBFBFB]">
                  {/* <img src={gul2} alt="" /> */}
                </div>
                <div className=" mt-3 w-[100px] h-[100px] bg-[#FBFBFB]">
                  {/* <img src={gul3} alt="" /> */}
                </div>
                <div className=" mt-3 w-[100px] h-[100px] bg-[#FBFBFB]">
                  {/* <img src={gul4} alt="" /> */}
                </div>
              </div>
              <div className=" ml-[46px]  h-[404px]">
                <img className=" w-[450px]" src={gul5} alt="" />
              </div>
            </div>
          </div>
          {/* chaptaraf */}
          <div className=" w-[673px] mt-[120px] ml-[75px]">
            <h1 className="  text-2xl font-bold w-[212px]">Barberton Daisy</h1>
            <span className="mt-[21px] justify-between flex">
              <h2 className=" text-green-300 font-bold ">$119.00</h2>
              <span className=" gap-5 items-center flex">
                <div>
                  <Rating name="size-small" defaultValue={2} size="small" />
                </div>
                <p className=" w-[160px]"> 19 Customer Review</p>
              </span>
            </span>
            <div className=" mt-[28px]">
              <h2 className=" font-medium ">Short Description:</h2>
              <p className=" my-[10px] ">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </p>
              <h2 className=" mb-[10px] font-medium">Size:</h2>
              <span className=" flex gap-2 mt-3 mb-5">
                <h2 className=" hover:bg-green-100 active:bg-green-200 border rounded-xl p-2 w-7">
                  S
                </h2>
                <h2 className=" hover:bg-green-100 active:bg-green-200 border rounded-xl p-2 w-7">
                  M
                </h2>
                <h2 className=" hover:bg-green-100 active:bg-green-200 border rounded-xl p-2 w-7">
                  L
                </h2>
                <h2 className=" hover:bg-green-100 active:bg-green-200 border rounded-xl p-2 w-7">
                  XL
                </h2>
              </span>
              <div>
                <div className=" flex gap-3">
                  <button className=" text-white p-2 active:bg-green-600 bg-green-300 border rounded-lg">
                    -
                  </button>
                  <h2>0</h2>
                  <button className=" text-white p-2 active:bg-green-600 bg-green-300 border rounded-lg">
                    +
                  </button>
                  <button className=" px-8 py-3 bg-green-300 text-white rounded border active:bg-green-600">
                    BUY NOW
                  </button>
                  <button className="px-8 py-3 text-green-300 rounded border active:bg-green-600">
                    ADD TO CARD
                  </button>
                </div>
                <div>
                  <p>SKU: 1995751877966</p>
                  <p>Categories: Potter Plants</p>
                  <p>Tags: Home, Garden, Plants </p>

                  <span className=" flex mt-6 gap-5">
                    <h2>Share this products:</h2>
                    <div>
                      <FacebookIcon />
                    </div>
                    <div>
                      <TwitterIcon />
                    </div>
                    <div>
                      <LinkedInIcon />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div className=" container px-10 mt-[97px]">
          <div className=" flex gap-5 mb-7">
            <h2 className=" font-bold active:text-green-400">
              Product Description
            </h2>
            <h2 className="active:text-green-400 font-normal">Reviews (19)</h2>
          </div>
          <div className=" mb-[127px]">
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum
              metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. The ceramic
              cylinder planters come with a wooden stand to help elevate your
              plants off the ground.
            </p>
            <h2 className=" font-bold mt-4">Living Room:</h2>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h2 className=" font-bold mt-4">Dining Room:</h2>
            <p>
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <h2 className=" font-bold pt-4">Office:</h2>
            <p className="">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className=" mb-[200px] ">
            <h2 className="mb-[61px] text-green-400">Releted Products</h2>
            <div className=" grid grid-cols-5 items-center">
              {/* <div className=" items-center">
                <img src={gul6} alt="" />
                <h2 className=" font-normal">Beach Spider Lily</h2>
                <h2 className=" font-bold text-green-300">$129.00</h2>
              </div>{" "}
              <div>
                <img src={gul7} alt="" />
                <h2 className=" font-normal">Blushing Bromeliad</h2>
                <h2 className=" font-bold text-green-300">$139.00</h2>
              </div>{" "}
              <div>
                <img src={gul8} alt="" />
                <h2 className=" font-normal">Aluminum Plant</h2>
                <h2 className=" font-bold text-green-300">$179.00</h2>
              </div>{" "}
              <div>
                <img src={gul9} alt="" />
                <h2 className=" font-normal">Bird's Nest Fern</h2>
                <h2 className=" font-bold text-green-300">$99.00</h2>
              </div>{" "}
              <div>
                <img src={gul10} alt="" />
                <h2 className=" font-normal">Chinese Evergreen</h2>
                <h2 className=" font-bold text-green-300">$39.00</h2>
              </div> */}
              <div className=" w-[1350px] gap-5 grid grid-cols-4">

              {flover.map((flow) => (
                <div className=" gap-10 space-x-20">
                  <img
                    className=" rounded-lg gap-10 space-y-2 h-[300px] w-[3000px]"
                    src={flow.image_url}
                    alt=""
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
