import React from "react";
import Score from "../Components/Score";
import again from "../assets/again.png";
import home from "../assets/home.png";
import review from "../assets/recycle.png";
import { useLocation, useNavigate } from "react-router-dom";

const Score_board = () => {
  const Navigation = useNavigate();
  const location = useLocation();

  console.log(location);
  console.log(location.state);
  // console.log('The count state is : ',count)
  // console.log('The length state is : ',length)
  // console.log('The correct answer state is :',location.state)
  const count = location.state?.count || 0;
  const task_question = location.state?.length || 0;

  let handleToHome = () => {
    Navigation("/");
  };

  let handleToAgain = () => {
    Navigation("/home");
  };

  let handleToReview = () => {
    Navigation("/review");
  };

  return (
    <React.Fragment>
      <div className="bg-score min-h-screen z-0 relative overflow-hidden">
        <div className=" h-[50%]">
          <h1 className="text-center text-6xl font-bold p-4">Completed</h1>
        </div>
        <div className="bg-white rounded-[15px] z-10 w-[60%] ml-auto mr-auto drop-shadow-custom-shadow relative flex justify-between p-[2rem] mt-[1rem]">
          <div className="flex flex-col gap-20">
            <Score calculation="100%" topic="Completion" />
            <Score calculation={count} topic="Correct" />
          </div>

          <div className="flex flex-col items-center justify-center bg-custom-cl-btn rounded-full w-[11rem] h-[11rem] border-black border-2">
            <div className="font-semibold text-3xl">Score</div>
            <div className="font-bold text-6xl ">{count}</div>
          </div>

          <div>
            <div className="flex flex-col gap-20">
              <Score calculation={task_question} topic="Task Questions" />
              <Score calculation={task_question - count} topic="Wrong" />
            </div>
          </div>
        </div>

        <div className="h-[90rem] w-[90rem] bg-custom-clr rounded-full ml-auto mr-auto z-0 absolute top-[10rem] ">
          <div className="relative top-[18rem] right-[2rem] flex w-[60%] ml-auto mr-auto justify-between ">
            <div onClick={handleToAgain} className="cursor-pointer">
              <img src={again} alt="" className="h-[3.5rem] " />
              <h1>Play Again</h1>
            </div>
            <div onClick={handleToHome} className="cursor-pointer">
              <img src={home} className="h-[3.5rem] " />
              <h1>Home</h1>
            </div>
            <div onClick={handleToReview} className="cursor-pointer">
              <img src={review} className="h-[3.5rem] " />
              <h1>Review Answers</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Score_board;
