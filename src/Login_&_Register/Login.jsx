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

    if (!user) {
      setMessage("Please fill username ");
      return false;
    }

    if (!pass) {
      setMessage("Please fill password ");
      return false;
    }
    console.log(message);
    //check username and password
    userData.find(
      (element) => element.username === user && element.password === pass
    )
      ? Navigation("/home")
      : setMessage("Username and password didn't match");
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
          className=" bg-login-background md:w-[30%] sm:w-[80%] max-h-[65%] rounded-[15px]   pb-2
    "
        >
          <div className="flex flex-col gap-6 items-center justify-center ">
            <h1 className="text-white md:text-3xl font-bold mt-6 sm:text-xl ">
              Login
            </h1>

            {message && <p className="text-yellow-400">{message}</p>}

            <input
              type="text"
              value={username}
              placeholder="Email address"
              className="md:h-[3rem] rounded-[10px] w-[80%] sm:h-[1.5rem]"
              onChange={userHandler}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="md:h-[3rem] rounded-[10px] w-[80%] sm:h-[1.5rem]"
              onChange={passwordHandler}
            />
            <Button
              Class="bg-button-color w-[80%] rounded-[10px] text-white md:h-[3rem] text-2xl sm:h-[2rem] sm:text-[1rem]  "
              name="Login"
              onClick={handleLogin}
            />

            <div className="flex">
              <p className="text-white md:block sm:hidden">Don't have an account ? </p>
              <p
                className="underline cursor-pointer text-white text-center"
                onClick={handleSwitch}
              >
                Register
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
