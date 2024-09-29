import React from "react";
import logo from "../assets/logo.png";
import Button from "../Components/Button";
import Review_list from "../Components/Review_list";
import { useNavigate } from "react-router-dom";

const Review = () => {
  let Navigation = useNavigate();

  let handleBack = () => {
    Navigation("/score");
  };
  return (
    <React.Fragment>
      Coming soon....
      <div className="bg-custom-clr min-h-screen hidden">
        <div className="ml-20 mr-20 ">
          <div className="flex justify-between ">
            <img src={logo} alt="logo" className="w-[5rem] h-auto" />
            <Button
              onClick={handleBack}
              name="Back"
              Class="bg-button-color text-white text-2xl rounded-[15px] font-semibold h-[40px] w-[100px] mt-4"
            />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <Review_list />
            <Review_list />
            <Review_list />
            <Review_list />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Review;
