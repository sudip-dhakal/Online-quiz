import React from "react";
import logo from "../assets/logo.png";
import Button from "../Components/Button";
import RulesField from "../Components/RulesField";
import { useNavigate } from "react-router-dom";
const Rules_Regulations = () => {
  let Navigation = useNavigate();

  return (
    <React.Fragment>
      <div className="bg-custom-clr min-h-screen ">
        <div className="flex flex-row justify-between ml-20 mr-32">
          <img src={logo} alt="logo" className="w-[80px] h-auto " />
          <Button
            Class="text-black md:text-2xl sm:text-xl rounded-[15px] md:font-semibold  bg-exit-border h-[3rem] sm:[2rem] md:w-[6rem] sm:w-[4rem] mt-4"
            name="Exit"
            onClick={() => Navigation("/")}
          />
        </div>
        <h1 className="text-center mt-[0.5rem] font-bold text-black md:text-[2.5rem] sm:text-xl">
          Rules and Regulations
        </h1>

        <div className="mt-10 flex flex-col md:gap-6 sm:gap-4">
          <RulesField description="The answer must be given within the assigned time period." />
          <RulesField description="Once you submitted the answer, there is no chance of correcting it. " />
          <RulesField description="You can only see your score by the end of the game." />
          <RulesField description="Different time limits are available for different categories of question. " />
        </div>
        <div className=" mr-auto ml-auto flex justify-center mt-6">
          <Button
            name="Start Playing"
            Class="mt-2 md:text-3xl sm:text-xl rounded-[15px] md:w-[25rem] sm:w-[16rem]  bg-yellow-btn p-4 ml-20 mr-32 font-bold "
            onClick={() => Navigation("/questions")}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rules_Regulations;
