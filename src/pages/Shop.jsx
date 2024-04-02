import React from "react";
import gul1 from "./../assets/gul1.png";
import gul2 from "./../assets/gul2.png";
import gul3 from "./../assets/gul3.png";
import gul4 from "./../assets/gul4.png";
import gul5 from "./../assets/gul5.png";

const Shop = () => {
  return (
    <div>
      <main>
        <div className=" px-10 container">
          <div className=" flex mt-9">
            <h2 className=" font-bold">Home / </h2>
            <span>Shop</span>
          </div>
          <div className=" mt-11">
            <div className="  w-[100px] h-[100px] bg-[#FBFBFB]">
              <img src={gul1} alt="" />
            </div>
            <div className="  mt-3 w-[100px] h-[100px] bg-[#FBFBFB]">
              <img src={gul2} alt="" />
            </div>
            <div className=" mt-3 w-[100px] h-[100px] bg-[#FBFBFB]">
              <img src={gul3} alt="" />
            </div>
            <div className=" mt-3 w-[100px] h-[100px] bg-[#FBFBFB]">
              <img src={gul4} alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
