import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Questions = ({ answerList = [], questionType }) => {
  return (
    <React.Fragment>
      <div className=" bg-custom-clr min-h-screen">
        <div className="h-[15%] bg-custom-cl-btn drop-shadow-custom-shadow ">
          <img src={logo} alt="logo" className="w-[90px] h-auto ml-20" />
        </div>
        <div className="bg-timer-bg w-[130px] h-[130px] rounded-full flex items-center justify-center absolute top-5 left-[45%]">
          <h1 className="text-7xl font-bold ">50</h1>
        </div>

        <div className="bg-custom-cl-btn w-[50%] drop-shadow-custom-shadow ml-auto mr-auto mt-[6rem] rounded-[20px] pr-10 pt-5 pb-5">
          <h4 className="font-bold text-sm text-right">Question x/y</h4>
          <h1 className="text-center text-3xl font-bold ">
            This is a Quiz Question
          </h1>

          {questionType == "multipleChoice" ? (
            answerList.map((answers, index) => (
              <div
                key={index}
                className="mt-6 bg-custom-clr h-[2.5rem] w-[70%] ml-auto mr-auto rounded-[10px] border-black border-2 mb-4"
              >
                <h3 className="font-bold font-3xl text-center p-2  box-border">
                  {answers}
                </h3>
              </div>
            ))
          ) : questionType == "fill" ? (
            <div className="p-6 flex justify-center">
              <textarea
                rows="4"
                cols="10"
                className="w-[80%] rounded-[10px] bg-custom-cl-btn border-black border-2"
              ></textarea>
            </div>
          ) : null}

          <div className="ml-auto mr-auto w-[40%] bg-button-color text-center  rounded-[8px] h-[2rem] ">
            <Button Class="text-2xl font-bold text-white" name="Submit" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Questions;
