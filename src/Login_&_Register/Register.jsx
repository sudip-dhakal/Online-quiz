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
      setMessage("Please fill all the fields");
      return false;
    }
    if (password !== confirmPassword) {
      setMessage("Please confirm the password.");
      return false;
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
      <div className="bg-black backdrop-blur-sm fixed inset-0 flex justify-center items-center bg-opacity-30">
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
            <h1 className="text-white text-3xl font-bold mt-6">Register</h1>

            <input
              type="text"
              placeholder="Email address"
              className="h-[3rem] rounded-[10px] w-[80%]"
              value={email}
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className="h-[3rem] rounded-[10px] w-[80%]"
              value={password}
              onChange={handlePassword}
            />
            <input
              type="password"
              placeholder=" Confirm Password"
              className="h-[3rem] rounded-[10px] w-[80%]"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />

            {message && <p className="text-white">{message}</p>}
            <Button
              Class="bg-button-color w-[80%] rounded-[10px] text-white h-[3rem] text-2xl"
              name="Register"
              onClick={handleRegister}
            />
            <p className="text-white">
              {confirm ? confirm : " Already have an account ?"}
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
