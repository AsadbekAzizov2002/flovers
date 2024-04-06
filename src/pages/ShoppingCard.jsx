// import React from "react";
// import gul4 from "./../assets/gul4.png";
// import gul5 from "./../assets/gul5.png";
// import gul6 from "./../assets/gul6.png";
// import gul7 from "./../assets/gul7.png";
// import gul8 from "./../assets/gul8.png";
// import gul9 from "./../assets/gul9.png";
// import gul10 from "./../assets/gul10.png";

// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { NavLink, Route, Routes } from "react-router-dom";
// import ProceedCheckout from "./ProceedCheckout";
// import Footer from "./Footer";
// import { useState } from "react";
// import { useEffect } from "react";

// const ShoppingCard = () => {
//   const [flover, setFlove] = useState([]);
//   console.log(flover);
//   useEffect(() => {
//     fetch("http://localhost:7774/flowers")
//       .then((res) => res.json())
//       .then((data) => setFlove(data.slice(5, 9)));
//   }, []);
//   return (
//     <div>
//       <main>
//         <Routes>
//           <Route path="/procedcheckout" element={<ProceedCheckout />} />
//         </Routes>
//         <div className=" container px-10">
//           <div className=" flex mt-9 mb-[51px]">
//             <h2 className=" font-bold">Home/</h2>
//             <p>Shop /</p>
//             <p>Shopping Card</p>
//           </div>
//           <div className=" flex justify-between">
//             <div className=" ">
//               <div className=" flex ">
//                 <h2 className=" font-semibold mr-[245px]">Products</h2>
//                 <h2 className=" font-semibold  mr-[108]">Price</h2>
//                 <h2 className=" font-semibold ml-[108px] mr-[97px]">
//                   Quantity
//                 </h2>
//                 <h2 className=" font-semibold">Total</h2>
//               </div>
//               <div className=" w-[500px]">
//                 <hr className=" w-[715px] mt-3" />
//               </div>
//               <div>
//                 <div className="flex justify-between items-center bg-[#FBFBFB] w-[715px] h-[70px] mt-3">
//                   <img className="w-[70px] h-[70px]" src={gul4} alt="gul" />
//                   <>
//                     <h2 className=" font-medium">Barberton Daisy</h2>
//                     <p>SKU: 1995751877966</p>
//                   </>
//                   <h2 className=" text-[#727272] font-medium">$119.00</h2>
//                   <div className=" gap-3 flex">
//                     <button className="w-5 h-9 items-center pr-2 pl-2 py-1  bg-green-300 text-white rounded-md ">
//                       -
//                     </button>
//                     <h2>2</h2>
//                     <button className="  w-5 h-9 items-center pr-2 pl-2 py-1 bg-green-300 text-white rounded-md ">
//                       +
//                     </button>
//                   </div>
//                   <h2 className=" text-green-300 font-bold">$238.00</h2>
//                   <div>
//                     <button>

//                     <DeleteOutlineIcon />
//                     </button>
//                   </div>
//                 </div>{" "}
//                 <div className="flex justify-between items-center bg-[#FBFBFB] w-[715px] h-[70px] mt-3">
//                   <img className="w-[70px] h-[70px]" src={gul5} alt="gul" />
//                   <>
//                     <h2 className=" font-medium">Blushing Bromeliad</h2>
//                     <p>SKU: 19957518757065</p>
//                   </>
//                   <h2 className=" text-[#727272] font-medium">$139.00</h2>
//                   <div className=" gap-3 flex">
//                     <button className="w-5 h-9 items-center pr-2 pl-2 py-1  bg-green-300 text-white rounded-md ">
//                       -
//                     </button>
//                     <h2>6</h2>
//                     <button className="  w-5 h-9 items-center pr-2 pl-2 py-1 bg-green-300 text-white rounded-md ">
//                       +
//                     </button>
//                   </div>
//                   <h2 className=" text-green-300 font-bold">$834.00</h2>
//                   <div>
//                     <button>

//                     <DeleteOutlineIcon />
//                     </button>
//                   </div>
//                 </div>{" "}
//                 <div className="flex justify-between items-center bg-[#FBFBFB] w-[715px] h-[70px] mt-3">
//                   <img className="w-[70px] h-[70px]" src={gul6} alt="gul" />
//                   <>
//                     <h2 className=" font-medium">Aluminum Plant</h2>
//                     <p>SKU: 1995751877786</p>
//                   </>
//                   <h2 className=" text-[#727272] font-medium">$179.00</h2>
//                   <div className=" gap-3 flex">
//                     <button className="w-5 h-9 items-center pr-2 pl-2 py-1  bg-green-300 text-white rounded-md ">
//                       -
//                     </button>
//                     <h2>9</h2>
//                     <button className="  w-5 h-9 items-center pr-2 pl-2 py-1 bg-green-300 text-white rounded-md ">
//                       +
//                     </button>
//                   </div>
//                   <h2 className=" text-green-300 font-bold">$1,611.00</h2>
//                   <div>
//                     <button>
//                       <DeleteOutlineIcon />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div>
//                 <h2 className=" font-bold">Cart Totals</h2>
//               </div>
//               <hr className=" w-[340px] mt-3 mb-1" />
//               <div>
//                 <p>Coupon Apply</p>
//                 <div>
//                   <div className=" border-l-teal-300 mt-2 rounded flex items-center  w-[px]">
//                     <input
//                       className=" mr-[52px] py-3 pl-[9px]"
//                       type="text "
//                       placeholder="Enter coupon code here..."
//                     />
//                     <button className=" px-[35px] py-3 active:bg-green-600 hover:bg-green-200 bg-green-400 text-white">
//                       Apply
//                     </button>
//                   </div>
//                   <div>
//                     <div className=" mt-7 w-[332px]">
//                       <div className=" justify-between flex">
//                         <h2 className="">Subtotal</h2>
//                         <h2 className=" font-medium">$2,683.00</h2>
//                       </div>{" "}
//                       <div className=" my-5 justify-between flex">
//                         <h2 className="">Coupon Discount</h2>
//                         <h2 className=" ">(-) 00.00</h2>
//                       </div>{" "}
//                       <div className=" justify-between flex">
//                         <h2 className=" ">Shiping</h2>
//                         <h2 className=" font-medium">$16.00</h2>
//                       </div>
//                       <div className=" justify-end">
//                         <p className=" text-green-300 mt-2  ml-auto w-[171px]">
//                           View shipping charge
//                         </p>
//                       </div>
//                       <div className=" flex justify-between my-7">
//                         <h2 className=" font-bold">Total</h2>
//                         <h2 className=" font-bold text-green-300">$2,699.00</h2>
//                       </div>
//                       <div>
//                         <button className=" py-3 pr-[89px] pl-[91px] bg-green-400 border rounded-sm">
//                           <ul>
//                             <li>
//                               <NavLink to="/procedcheckout">
//                                 Proceed To Checkout
//                               </NavLink>
//                             </li>
//                           </ul>
//                         </button>
//                         <ul className=" text-green-300 w-[300px] mt-4">
//                           <li>
//                             <NavLink to="/">

//                         <span className=" text-green-300 w-[300px] ml-[90px] mt-4">
//                           {" "}
//                           Continue Shopping
//                         </span>
//                             </NavLink>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="mt-[117px] mb-[200px] ">
//               <h2 className="mb-[11px] text-green-400">
//                 You may be interested in
//               </h2>
//               <hr className=" mb-[49px]" />
//               <div></div>
//               <div className=" grid grid-cols-5 items-center">
//                 <div className=" items-center">
//                   <img src={gul6} alt="" />
//                   <h2 className=" font-normal">Beach Spider Lily</h2>
//                   <h2 className=" font-bold text-green-300">$129.00</h2>
//                 </div>{" "}
//                 <div>
//                   <img src={gul7} alt="" />
//                   <h2 className=" font-normal">Blushing Bromeliad</h2>
//                   <h2 className=" font-bold text-green-300">$139.00</h2>
//                 </div>{" "}
//                 <div>
//                   <img src={gul8} alt="" />
//                   <h2 className=" font-normal">Aluminum Plant</h2>
//                   <h2 className=" font-bold text-green-300">$179.00</h2>
//                 </div>{" "}
//                 <div>
//                   <img src={gul9} alt="" />
//                   <h2 className=" font-normal">Bird's Nest Fern</h2>
//                   <h2 className=" font-bold text-green-300">$99.00</h2>
//                 </div>{" "}
//                 <div>
//                   <img src={gul10} alt="" />
//                   <h2 className=" font-normal">Chinese Evergreen</h2>
//                   <h2 className=" font-bold text-green-300">$39.00</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default ShoppingCard;










import React from "react";
import gul4 from "./../assets/gul4.png";
import gul5 from "./../assets/gul5.png";
import gul6 from "./../assets/gul6.png";
import gul7 from "./../assets/gul7.png";
import gul8 from "./../assets/gul8.png";
import gul9 from "./../assets/gul9.png";
import gul10 from "./../assets/gul10.png";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink, Route, Routes } from "react-router-dom";
import ProceedCheckout from "./ProceedCheckout";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";

const ShoppingCard = () => {
  const [flover, setFlove] = useState([]);

  const [quantity, setQuantity] = useState(0);

  console.log(flover);
  useEffect(() => {
    fetch("http://localhost:7774/flowers")
      .then((res) => res.json())
      .then((data) => setFlove(data.slice(5, 9)));
  }, []);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  // Function to increase quantity
  const increaseQuantityy = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantityy = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <main>
        <Routes>
          <Route path="/procedcheckout" element={<ProceedCheckout />} />
        </Routes>
        <div className=" container px-10">
          <div className=" flex mt-9 mb-[51px]">
            <h2 className=" font-bold">Home/</h2>
            <p>Shop /</p>
            <p>Shopping Card</p>
          </div>
          <div className=" flex justify-between">
            <div className=" ">
              <div className=" flex ">
                <h2 className=" font-semibold mr-[245px]">Products</h2>
                <h2 className=" font-semibold  mr-[108]">Price</h2>
                <h2 className=" font-semibold ml-[108px] mr-[97px]">
                  Quantity
                </h2>
                <h2 className=" font-semibold">Total</h2>
              </div>
              <div className=" w-[500px]">
                <hr className=" w-[715px] mt-3" />
              </div>
              <div>
                <div className="flex justify-between items-center bg-[#FBFBFB] w-[715px] h-[70px] mt-3">
                  <img className="w-[70px] h-[70px]" src={gul4} alt="gul" />
                  <>
                    <h2 className=" font-medium">Barberton Daisy</h2>
                    <p>SKU: 1995751877966</p>
                  </>
                  <h2 className=" text-[#727272] font-medium">$119.00</h2>
                  <div className=" gap-3 flex">
                    <button
                      onClick={decreaseQuantity}
                      className=" text-white py-2 px-5 active:bg-green-600 bg-green-300 border rounded-lg"
                    >
                      -
                    </button>
                    <h2 className=" font-bold text-2xl">{quantity}</h2>
                    <button
                      onClick={increaseQuantity}
                      className=" text-white py-2 px-5 active:bg-green-600 bg-green-300 border rounded-lg"
                    >
                      +
                    </button>
                  </div>
                  <h2 className=" text-green-300 font-bold">$238.00</h2>
                  <div>
                    <button>
                      <DeleteOutlineIcon />
                    </button>
                  </div>
                </div>{" "}
                <div className="flex justify-between items-center bg-[#FBFBFB] w-[715px] h-[70px] mt-3">
                  <img className="w-[70px] h-[70px]" src={gul5} alt="gul" />
                  <>
                    <h2 className=" font-medium">Blushing Bromeliad</h2>
                    <p>SKU: 19957518757065</p>
                  </>
                  <h2 className=" text-[#727272] font-medium">$139.00</h2>
                  <div className=" gap-3 flex">
                    <button
                      onClick={decreaseQuantityy}
                      className=" text-white py-2 px-5 active:bg-green-600 bg-green-300 border rounded-lg"
                    >
                      -
                    </button>
                    <h2 className=" font-bold text-2xl">{quantity}</h2>
                    <button
                      onClick={increaseQuantityy}
                      className=" text-white py-2 px-5 active:bg-green-600 bg-green-300 border rounded-lg"
                    >
                      +
                    </button>
                  </div>
                  <h2 className=" text-green-300 font-bold">$834.00</h2>
                  <div>
                    <button>
                      <DeleteOutlineIcon />
                    </button>
                  </div>
                </div>{" "}
                <div className="flex justify-between items-center bg-[#FBFBFB] w-[715px] h-[70px] mt-3">
                  <img className="w-[70px] h-[70px]" src={gul6} alt="gul" />
                  <>
                    <h2 className=" font-medium">Aluminum Plant</h2>
                    <p>SKU: 1995751877786</p>
                  </>
                  <h2 className=" text-[#727272] font-medium">$179.00</h2>
                  <div className=" gap-3 flex">
                    <button
                      onClick={decreaseQuantity}
                      className=" text-white py-2 px-5 active:bg-green-600 bg-green-300 border rounded-lg"
                    >
                      -
                    </button>
                    <h2 className=" font-bold text-2xl">{quantity}</h2>
                    <button
                      onClick={increaseQuantity}
                      className=" text-white py-2 px-5 active:bg-green-600 bg-green-300 border rounded-lg"
                    >
                      +
                    </button>
                  </div>
                  <h2 className=" text-green-300 font-bold">$1,611.00</h2>
                  <div>
                    <button>
                      <DeleteOutlineIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2 className=" font-bold">Cart Totals</h2>
              </div>
              <hr className=" w-[340px] mt-3 mb-1" />
              <div>
                <p>Coupon Apply</p>
                <div>
                  <div className=" border-l-teal-300 mt-2 rounded flex items-center  w-[px]">
                    <input
                      className=" mr-[52px] py-3 pl-[9px]"
                      type="text "
                      placeholder="Enter coupon code here..."
                    />
                    <button className=" px-[35px] py-3 active:bg-green-600 hover:bg-green-200 bg-green-400 text-white">
                      Apply
                    </button>
                  </div>
                  <div>
                    <div className=" mt-7 w-[332px]">
                      <div className=" justify-between flex">
                        <h2 className="">Subtotal</h2>
                        <h2 className=" font-medium">$2,683.00</h2>
                      </div>{" "}
                      <div className=" my-5 justify-between flex">
                        <h2 className="">Coupon Discount</h2>
                        <h2 className=" ">(-) 00.00</h2>
                      </div>{" "}
                      <div className=" justify-between flex">
                        <h2 className=" ">Shiping</h2>
                        <h2 className=" font-medium">$16.00</h2>
                      </div>
                      <div className=" justify-end">
                        <p className=" text-green-300 mt-2  ml-auto w-[171px]">
                          View shipping charge
                        </p>
                      </div>
                      <div className=" flex justify-between my-7">
                        <h2 className=" font-bold">Total</h2>
                        <h2 className=" font-bold text-green-300">$2,699.00</h2>
                      </div>
                      <div>
                        <button className=" py-3 pr-[89px] pl-[91px] bg-green-400 border rounded-sm">
                          <ul>
                            <li>
                              <NavLink to="/procedcheckout">
                                Proceed To Checkout
                              </NavLink>
                            </li>
                          </ul>
                        </button>
                        <ul className=" text-green-300 w-[300px] mt-4">
                          <li>
                            <NavLink to="/">
                              <span className=" text-green-300 w-[300px] ml-[90px] mt-4">
                                {" "}
                                Continue Shopping
                              </span>
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
          <div>
            <div className="mt-[117px] mb-[200px] ">
              <h2 className="mb-[11px] text-green-400">
                You may be interested in
              </h2>
              <hr className=" mb-[49px]" />
              <div></div>
              <div className=" grid grid-cols-5 items-center">
                <div className=" items-center">
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

export default ShoppingCard;
