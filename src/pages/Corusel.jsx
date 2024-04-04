import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img2 from "./../assets/imgg.png";
import gul12 from "./../assets/gul12.png";
import gul13 from "./../assets/gul13.png";
import gul14 from "./../assets/gul14.png";

<>
  <link
    rel="stylesheet"
    type="text/css"
    charset="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  />
</>;

export default function Corusel() {
  var settings = {
    dots: true,
    infinite: true,
    default: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" px-10">
      <Slider {...settings}>
        <div>
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
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className=" py-2 px-5  bg-green-500 rounded">
                  SHOP NOW
                </button>
              </div>
              <div className=" flex justify-end">
                <img className=" w-[500px]" src={img2} />
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
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
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className=" py-2 px-5  bg-green-500 rounded">
                  SHOP NOW
                </button>
              </div>
              <div className=" flex justify-end">
                <img className=" w-[500px]" src={gul12} />
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
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
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className=" py-2 px-5  bg-green-500 rounded">
                  SHOP NOW
                </button>
              </div>
              <div className=" flex justify-end">
                <img className=" w-[500px]" src={gul13} />
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <div>
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
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className=" py-2 px-5  bg-green-500 rounded">
                  SHOP NOW
                </button>
              </div>
              <div className=" flex justify-end">
                <img className=" w-[500px]" src={gul14} />
              </div>
            </div>
          </div>{" "}
        </div>
      </Slider>
    </div>
  );
}
