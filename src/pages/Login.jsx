import React, { useState } from "react";

import googl from "./../assets/googl.png";
import fac from "./../assets/fac.png";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [step,setStep]=useState(1);
  const increment = () => {
    setStep(step + 1);
  };
  const decrement = () => {
    setStep(step - 1);
  };

  return (
    <div className=" bg-gray-300 w-full h-[83 0px] ">
      <main>
        <hr className=" mb-[65px]" />
        {step === 1 && (
          <div className=" w-[530px] mx-auto py-[35px] bg-white h-[630px] border border-black">
            <div className=" flex items-center  my-[50px] ">
              <h2 className="ml-[172px] mr-[27px] font-medium active:text-green-400">
                login
              </h2>
              <h2
                onClick={increment}
                className="active:text-green-400 font-medium"
              >
                Register
              </h2>
            </div>
            <div className=" ml-[95px]">
              <h2 className=" w-[312px] mb-3">
                Enter your username and password to login.
              </h2>
              <input
                type="text"
                placeholder="almamun_uxui@outlook.com"
                className=" py-3 pl-[14px] pr-[100px] border rounded text-[#A5A5A5] w-[330px] mb-[17px] active:text-green-200"
              />
              <input
                type="text"
                placeholder="**********"
                className="py-3  border rounded pl-[14px] pr-[100px] text-[#A5A5A5] w-[330px] mb-[17px]"
              />
              <h2 className=" w-[126px] text-green-300 ml-auto mr-[99px]">
                Forgot Password?
              </h2>
              <NavLink to="/myaccount">
                <button className=" text-white bg-green-400 px-[129px] py-4 rounded mt-[27px] mb-[46px]">
                  Logn
                </button>
              </NavLink>
              <h2 className=" w-[100px] ml-[110px] mb-5">Or login with</h2>
              <div className=" w-[320px] h-10 border rounded flex">
                <img
                  className=" w-5 h-5 my-[10px] ml-[60px]"
                  src={googl}
                  alt="logo"
                />
                <h2 className="my-[10px]">Continue with Google</h2>
              </div>
              <div className=" mt-[15px] w-[320px] h-10 border rounded flex">
                <img
                  className=" w-4 h-4 my-[10px] ml-[60px]"
                  src={fac}
                  alt="logo"
                />
                <h2 className="my-[10px]">Continue with Facebook</h2>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className=" w-[530px] mx-auto py-[35px] bg-white h-[760px] border border-black">
              <div className=" flex items-center  my-[50px] ">
                <h2
                  onClick={decrement}
                  className="ml-[172px] mr-[27px] font-medium active:text-green-400"
                >
                  login
                </h2>
                <h2 className="active:text-green-400 font-medium">Register</h2>
              </div>
              <div className=" ml-[95px]">
                <h2 className=" w-[312px] mb-3">
                  Enter your email and password to register.
                </h2>
                <input
                  type="text"
                  placeholder="Username"
                  className=" py-3 pl-[14px] pr-[100px] border rounded text-[#A5A5A5] w-[330px] mb-[17px] active:text-green-200"
                />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className=" py-3 pl-[14px] pr-[100px] border rounded text-[#A5A5A5] w-[330px] mb-[17px] active:text-green-200"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className=" py-3 pl-[14px] pr-[100px] border rounded text-[#A5A5A5] w-[330px] mb-[17px] active:text-green-200"
                />
                <input
                  type="text"
                  placeholder="*Confirm Password"
                  className="py-3  border rounded pl-[14px] pr-[100px] text-[#A5A5A5] w-[330px] mb-[17px]"
                />
                <h2 className=" w-[126px] text-green-300 ml-auto mr-[99px]">
                  Forgot Password?
                </h2>
                <ul>
                  <li>
                    <NavLink to="/myaccount">
                      <button className=" text-white bg-green-400 px-[129px] py-4 rounded mt-[27px] mb-[46px]">
                        Register
                      </button>
                    </NavLink>
                  </li>
                </ul>
                <h2 className=" w-[100px] ml-[110px] mb-5">Or login with</h2>
                <div className=" w-[320px] h-10 border rounded flex">
                  <img
                    className=" w-5 h-5 my-[10px] ml-[60px]"
                    src={googl}
                    alt="logo"
                  />
                  <h2 className="my-[10px]">Continue with Google</h2>
                </div>
                <div className=" mt-[15px] w-[320px] h-10 border rounded flex">
                  <img
                    className=" w-4 h-4 my-[10px] ml-[60px]"
                    src={fac}
                    alt="logo"
                  />
                  <h2 className="my-[10px]">Continue with Facebook</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Login;
