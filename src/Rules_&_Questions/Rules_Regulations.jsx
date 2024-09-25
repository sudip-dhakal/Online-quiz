import React from "react";
import logo from "../assets/logo.png";
import Button from "../Components/Button";
import RulesField from "../Components/RulesField";
const Rules_Regulations = () => {
  return (
    <React.Fragment>
      <div className="bg-custom-clr min-h-screen ">
        <div className="flex flex-row justify-between ml-20 mr-32">
          <img src={logo} alt="logo" className="w-[80px] h-auto " />
          <Button
            Class="text-black text-2xl rounded-[15px] font-semibold bg-exit-border h-[40px] w-[100px] mt-4"
            name="Exit"
          />
        </div>
        <h1 className="text-center mt-[2.5rem] font-bold text-black text-[2.5rem]">
          Rules and Regulations
        </h1>

        <div className="mt-10 flex flex-col gap-10">
          <RulesField description="The answer must be given within the assigned time period." />
          <RulesField description="Once you submitted the answer, there is no chance of correcting it. " />
          <RulesField description="You can only see your score by the end of the game." />
          <RulesField description="Different time limits are available for different categories of question. " />
        </div>
        <div className=" mr-auto ml-auto flex justify-center mt-6">
          <Button
            name="Start Playing"
            Class="mt-2 text-3xl rounded-[15px] w-[25rem] bg-yellow-btn p-4 ml-20 mr-32 font-bold "
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rules_Regulations;
