import React, { useState } from "react";
import logo from "../assets/logo.png";
import question from "../assets/Qmark.png";
import Button from "../Components/Button";
import Login from "../Login_&_Register/Login";
import Register from "../Login_&_Register/Register";

const Landing_page = ({ userData, setUserData }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const closeLogin = () => setShowLogin(false);
  const closeRegister = () => setShowRegister(false);

  return (
    <>
      <div className="bg-custom-clr min-h-screen fixed top-0 bottom-0 left-0 right-0 sm:text-black">
        {/* Header: Logo and Menu */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-4 md:px-8">
          <img src={logo} alt="logo" className="w-[65px] h-auto" />
          <ul className="flex space-x-6 sm:space-x-12 mt-4 sm:mt-0 font-semibold">
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

        <div className="flex flex-col md:flex-row justify-between items-center ml-4 md:ml-20">
          {/* Text Section */}
          <div className="w-full md:w-[60%] mt-6 md:mt-10">
            <h1 className="text-4xl md:text-[60px] font-bold">
              IMPROVE YOUR
            </h1><br/>
            <h1 className="text-4xl md:text-[60px] font-bold ml-2 md:ml-6">
              KNOWLEDGE
            </h1>
            <p className="text-lg md:text-[30px] mt-4">
              Challenge your knowledge with fun.<br />
              Test your skills and learn something<br />
              new every day.
            </p>
          </div>

          <div className="w-[50%] md:w-[30%] mt-4 md:mt-0">
            <img src={question} alt="question mark" className="w-full h-auto" />
          </div>
        </div>

        <div className="ml-4 md:ml-20 mt-6">
          <Button
            Class="bg-custom-cl-btn p-2 w-full md:w-[200px] h-[50px] rounded-[20px] border-black border-2 text-xl text-center"
            name="Start Quiz"
          />
        </div>
      </div>


      <div>
        {showLogin && (
          <Login
            closeLogin={closeLogin}
            setShowRegister={setShowRegister}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </div>


      <div>
        {showRegister && (
          <Register
            closeRegister={closeRegister}
            setShowLogin={setShowLogin}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </div>
    </>
  );
};

export default Landing_page;
