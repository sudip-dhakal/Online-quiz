import React, { useState } from "react";
import Button from "../Components/Button";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = ({ closeLogin, setShowRegister, userData, setUserData }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const Navigation = useNavigate();

  let userHandler = (e) => {
    setUserName(e.target.value);
    setMessage("");
  };
  let passwordHandler = (e) => {
    setPassword(e.target.value);
    setMessage("");
  };

  let handleSwitch = () => {
    setShowRegister(true);
    closeLogin();
  };
  let handleClear = () => {
    setUserName("");
    setPassword("");
  };

  let handleLogin = () => {
    let user = username.trim();
    let pass = password.trim();

    if (!user || !pass) {
      setMessage("Please fill all the fields ");
      return false;
    }
    console.log(message);
    //check username and password
    userData.find(
      (element) => element.username === user && element.password === pass
    )
      ? console.log("Login Successful")
      : setMessage("Please enter the valid username password");

    handleClear();
    Navigation("/home");
  };

  return (
    <>
      <div className="bg-black backdrop-blur-sm fixed inset-0 flex justify-center items-center bg-opacity-30 transition-opacity duration-300 ease-linear opacity-100">
        <span
          className="relative bottom-[9rem]  left-[25rem] text-white mr-4 mt-2 cursor-pointer "
          onClick={closeLogin}
        >
          <X size={30} color="white" />
        </span>
        <div
          className=" bg-login-background w-[30%] max-h-[65%] rounded-[15px]   pb-2
    "
        >
          <div className="flex flex-col gap-6 items-center justify-center ">
            <h1 className="text-white text-3xl font-bold mt-6">Login</h1>
            <input
              type="text"
              value={username}
              placeholder="Email address"
              className="h-[3rem] rounded-[10px] w-[80%]"
              onChange={userHandler}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="h-[3rem] rounded-[10px] w-[80%]"
              onChange={passwordHandler}
            />
            {message && <p className="text-white">{message}</p>}
            <Button
              Class="bg-button-color w-[80%] rounded-[10px] text-white h-[3rem] text-2xl"
              name="Login"
              onClick={handleLogin}
            />
            <p className="text-white">
              Don't have an account ?{" "}
              <span className="underline cursor-pointer" onClick={handleSwitch}>
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
