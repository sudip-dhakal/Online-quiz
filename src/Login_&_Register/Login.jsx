import React from "react";
import Button from "../Components/Button";
import { X } from "lucide-react";

const Login = ({ closeLogin, setShowRegister }) => {
  let handleSwitch = () => {
    setShowRegister(true);
    closeLogin();
  };
  return (
    <>
      <div className="bg-black backdrop-blur-sm fixed inset-0 flex justify-center items-center bg-opacity-30 transition-opacity duration-300 ease-linear opacity-100">
        <span
          className="relative bottom-[10.5rem]  left-[25rem] text-white mr-4 mt-2 cursor-pointer "
          onClick={closeLogin}
        >
          <X size={30} color="white" />
        </span>
        <div
          className=" bg-login-background w-[30%] h-[65%] rounded-[15px]  
    "
        >
          <div className="flex flex-col gap-10 items-center justify-center ">
            <h1 className="text-white text-3xl font-bold mt-6">Login</h1>
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

            <Button
              Class="bg-button-color w-[80%] rounded-[10px] text-white h-[3rem] text-2xl"
              name="Login"
            />
            <p className="text-white">
              Don't have an account ?{" "}
              <span
                className="underline cursor-pointer"
                onClick={handleSwitch}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
