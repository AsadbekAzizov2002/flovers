import React from "react";

// import frame1 from "./../assets/frame1.png";
// import frame2 from "./../assets/frame2.png";
// import frame3 from "./../assets/frame3.png";
// import frame4 from "./../assets/frame4.png";
// import frame5 from "./../assets/frame5.png";
// import img from "./../assets/Group.png";
// import frame1 from "../assets/frame1.png"
// import frame2 from "../assets/frame2.png"
// import frame3 from "../assets/frame3.png"
// import frame4 from "../assets/frame4.png"
// import frame5 from "../assets/frame5.png"
// import img from "../assets.Group.png"

import frame1 from "./../assets/frame1.png";
import frame2 from "./../assets/frame2.png";
import frame3 from "./../assets/frame3.png";
import frame4 from "./../assets/frame4.png";
import frame5 from "./../assets/frame5.png";
import img from "./../assets/Group.png";

import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <div>
        <main className=" mt-10 container px-20">
          <div className=" flex justify-between">
            <div className=" w-[205px] h-[201px] ">
              <div>
                <img src={frame1} alt="" />
                {/* <img src={frame2} alt="" /> */}
              </div>
              <h2 className=" my-2 font-bold w-[101px]">Garden Care</h2>
              <p className=" w-[205px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className=" w-[205px] h-[201px] ">
              <div>
                <img src={frame3} alt="" />
              </div>
              <h2 className=" my-2 font-bold w-[101px]">Plant Renovation</h2>
              <p className=" w-[205px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className=" w-[205px] h-[201px] ">
              <div>
                <img src={frame4} alt="" />
              </div>
              <h2 className=" my-2 font-bold w-[101px]">Watering Graden</h2>
              <p className=" w-[205px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div>
              <h2 className=" mb-5">Would you like to join newsletters?</h2>
              <span className=" mt-5">
                <input
                  className=" py-2 px-5"
                  type="text"
                  placeholder="enter your email address..."
                />
                <button className=" py-2 px-4 bg-green-300 text-white">
                  Join
                </button>
              </span>
              <p className=" mt-6 w-[354px]">
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-32 mt-10 w-[1350px] h-[88px] bg-[#ECF6EE]">
            <img className=" pt-8 pl-6" src={img} alt="logo" />
            <div className=" flex gap-4 items-center">
              <div className=" text-green-300">
                <PlaceIcon />
              </div>
              <p className=" w-[196px]">
                70 West Buckingham Ave. Farmingdale, NY 11735
              </p>
            </div>
            <div className=" flex gap-4 items-center">
              <div className=" text-green-300">
                <MailIcon />
              </div>
              <p>contact@greenshop.com</p>
            </div>
            <div className=" flex items-center gap-4">
              <div className=" text-green-300">
                <WifiCalling3Icon />
              </div>
              <p>+88 01911 717 490</p>
            </div>
          </div>
          <div className=" bg-[#FBFBFB]  mt-  ">
            <div className=" flex justify-between">
              <div className="py-7 ">
                <h1 className=" font-bold">My Account</h1>
                <h2>My Account</h2>
                <h2>Our stores</h2>
                <h2>Contact us</h2>
                <h2> Career</h2>
                <h2>Specials</h2>
              </div>
              <div className=" py-7">
                <h1 className=" font-bold">Help & Guide</h1>
                <h2>Help Center</h2>
                <h2>How to Buy</h2>
                <h2> Shipping & Delivery</h2>
                <h2> Product Policy</h2>
                <h2>How to Return</h2>
              </div>
              <div className=" py-7">
                <h1 className="font-bold">Categories</h1>
                <h2>House Plants</h2>
                <h2>Potter Plants </h2>
                <h2> Seeds</h2>
                <h2> Small Plants</h2>
                <h2>Accessories</h2>
              </div>
              <div className=" py-7">
                <h1 className="font-bold">Social Media</h1>
                <div className=" flex gap-2">
                  <div className=" w-[30px] h-[30px] rounded border-green-700 text-green-400">
                    <FacebookIcon />
                  </div>
                  <div className="w-[30px] h-[30px] rounded border-green-700 text-green-400">
                    <InstagramIcon />
                  </div>
                  <div className="w-[30px] h-[30px] rounded border-green-700 text-green-400">
                    <TwitterIcon />
                  </div>
                  <div className="w-[30px] h-[30px] rounded border-green-700 text-green-400">
                    <LinkedInIcon />
                  </div>
                  <div className="w-[30px] h-[30px] rounded border-green-700 text-green-400">
                    <YouTubeIcon />
                  </div>
                </div>
                <div>
                  <h1 className=" mt-4 font-bold">We accept</h1>
                  <img className=" mt-4" src={frame5} alt="cartalar" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <h2 className=" w-[357px] mx-auto mt-[55px]">
          © 2021 GreenShop. All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
