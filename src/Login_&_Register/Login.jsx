import React from "react";
import Button from "../Components/Button";

const Login = ({ closeLogin }) => {
  return (
    <div className=" bg-login-background w-[30%] h-[20%] rounded-[15px]">
      <div className="flex flex-col gap-10 items-center justify-center ">
        <h1 className="text-white text-3xl font-bold mt-6">Login</h1>
        <input
          type="email"
          placeholder="Email address"
          className="h-[40px] rounded-[10px] w-[80%]"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-[40px] rounded-[10px] w-[80%]"
        />

        <Button
          Class="bg-button-color w-[80%] rounded-[10px] text-white h-[40px] text-2xl"
          name="Login"
        />
        <p className="text-white">
          Don't have an account ? <span className="underline">Register</span>
        </p>
        <h1 className="text-white text-3xl cursor-pointer" onClick={closeLogin}>
          Close Login
        </h1>
      </div>
    </div>
  );
};

export default Login;
