import React, { useState } from "react";
import Button from "../Components/Button";
import { X } from "lucide-react";

const Register = ({ closeRegister, setShowLogin }) => {
  let handleSwitch = () => {
    setShowLogin(true);
    closeRegister();
  };

  return (
    <>
      <div className="bg-black backdrop-blur-sm fixed inset-0 flex justify-center items-center bg-opacity-30">
        <span
          className="relative bottom-[13rem] left-[25rem] text-white mr-4 mt-2 cursor-pointer"
          onClick={closeRegister}
        >
          <X size={30} color="white" />
        </span>
        <div
          className=" bg-login-background w-[30%] h-[80%] rounded-[15px] 
    "
        >
          <div className="float-right text-white mr-4 mt-2 cursor-pointer"></div>
          <div className="flex flex-col gap-10 items-center justify-center ">
            <h1 className="text-white text-3xl font-bold mt-6">Register</h1>

            <input
              type="email"
              placeholder="Email address"
              className="h-[3rem] rounded-[10px] w-[80%]"
            />
            <input
              type="password"
              placeholder="Password"
              className="h-[3rem] rounded-[10px] w-[80%]"
            />
            <input
              type="password"
              placeholder=" Confirm Password"
              className="h-[3rem] rounded-[10px] w-[80%]"
            />
            <Button
              Class="bg-button-color w-[80%] rounded-[10px] text-white h-[3rem] text-2xl"
              name="Register"
            />
            <p className="text-white">
              Already have an account ?{" "}
              <span className="underline cursor-pointer" onClick={handleSwitch}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
