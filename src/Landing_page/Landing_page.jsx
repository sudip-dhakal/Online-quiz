import React, { useState } from "react";
import logo from "../assets/logo.png";
import question from "../assets/Qmark.png";
import Button from "../Components/Button";
import Login from "../Login_&_Register/Login";
import Register from "../Login_&_Register/Register";

const Landing_page = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const closeLogin = () => setShowLogin(false);
  const closeRegister = () => setShowRegister(false);

  return (
    <>
      <div className="bg-custom-clr min-h-screen fixed top-0 bottom-0 left-0 right-0">
        <div className="flex items-center justify-between px-8 py-4 ">
          <img src={logo} alt="logo" className="w-[65px] h-auto" />
          <ul className="flex space-x-20 font-semibold mr-20">
            <li
              className="cursor-pointer underline"
              onClick={() => setShowLogin(true)}
            >
              Login
            </li>
            <li
              className="cursor-pointer underline"
              onClick={() => setShowRegister(true)}
            >
              Register
            </li>
          </ul>
        </div>

        <div className="flex justify-between ml-20 h-fit">
          <div className="w-[60%] mt-10 h-[60%]">
            <h1 className="text-[60px] font-bold ">IMPROVE YOUR</h1>
            <h1 className="text-[60px] font-bold ml-6">KNOWLEDGE</h1>
            <p className="text-[30px] mt-4">
              Challenge your knowledge with fun.<br></br> Test your skills and
              learn something <br></br>new everyday
            </p>
          </div>
          <div>
            <img src={question} alt="question mark" />
          </div>
        </div>
        <div>
          <Button
            Class="ml-20 bg-custom-cl-btn p-2 w-[200px] h-[50px] rounded-[20px] relative -top-20 border-black border-2 text-xl text-center
"
            name="Start  Quiz"
          />
        </div>
      </div>
      <div>
        {showLogin && (
          <Login closeLogin={closeLogin} setShowRegister={setShowRegister} />
        )}
      </div>
      <div>
        {showRegister && (
          <Register closeRegister={closeRegister} setShowLogin={setShowLogin} />
        )}
      </div>
    </>
  );
};

export default Landing_page;
