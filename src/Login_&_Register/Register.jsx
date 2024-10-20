import React, { useState } from "react";
import Button from "../Components/Button";
import { X } from "lucide-react";
import axios from "axios";

const Register = ({ closeRegister, setShowLogin, userData, setUserData }) => {
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setMessage("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setMessage("");
  };

  let handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setMessage("");
  };

  let handleSwitch = () => {
    setShowLogin(true);
    closeRegister();
  };

  let handleClear = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  let handleRegister = () => {
    let userEmail = email.trim();
    let userPassword = password.trim();
    let userConfirmPassword = confirmPassword.trim();

    if (!email || !password || !confirmPassword) {
      setMessage("Please fill the required data");
      return false;
    }
    if (password !== confirmPassword) {
      setMessage("Confirm password must be same as password");
      return false;
    }

    if (password.length < 8) {
      setMessage("Password length must be of 8 characters");
    }
    axios
      .post("https://66d581f5f5859a704266544c.mockapi.io/complainSys/admin", {
        username: email,
        password: password,
      })
      .then((res) => {
        setConfirm("Registered Successfully..");
        setUserData([...userData, res.data]);
      });
    handleClear();
  };

  console.log("The user data is : ", userData);

  return (
    <>
      <div className="bg-black backdrop-blur-sm fixed inset-0 flex justify-center items-center bg-opacity-30 text-center">
        <span
          className="relative bottom-[10rem] left-[25rem] text-white mr-4 mt-2 cursor-pointer"
          onClick={closeRegister}
        >
          <X size={30} color="white" />
        </span>
        <div
          className=" bg-login-background w-[30%] max-h-[80%] rounded-[15px] p-2 
    "
        >
          <div className="float-right text-white mr-4 mt-2 cursor-pointer"></div>
          <div className="flex flex-col gap-6 items-center justify-center  ">
            <h1 className="text-white md:text-3xl font-bold mt-6 sm:text-xl ">
              Register
            </h1>

            {message && <p className="text-yellow-400">{message}</p>}

            <input
              type="email"
              placeholder="Email address"
              className="md:h-[3rem] rounded-[10px] w-[80%] sm:h-[1.5rem]"
              value={email}
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className="md:h-[3rem] rounded-[10px] w-[80%] sm:h-[1.5rem]"
              value={password}
              onChange={handlePassword}
            />
            <input
              type="password"
              placeholder=" Confirm Password"
              className="md:h-[3rem] rounded-[10px] w-[80%] sm:h-[1.5rem]"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />

            <Button
              Class="bg-button-color w-[80%] rounded-[10px] text-white md:h-[3rem] sm:h-[2rem] sm:text-xl md:text-2xl"
              name="Register"
              onClick={handleRegister}
            />
            <div className="flex ">
              <p className="text-white md:block sm:hidden">
                {confirm ? confirm : " Already have an account ?"}
              </p>
              <p
                className="underline cursor-pointer text-center text-white"
                onClick={handleSwitch}
              >
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
