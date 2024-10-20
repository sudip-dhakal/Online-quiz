import React from "react";
import Score from "../Components/Score";
import again from "../assets/again.png";
import home from "../assets/home.png";
import review from "../assets/recycle.png";
import { useLocation, useNavigate } from "react-router-dom";

const Score_board = () => {
  const Navigation = useNavigate();
  const location = useLocation();

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
      <div className="bg-score min-h-screen z-0 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="h-auto mb-8">
          <h1 className="text-center md:text-6xl sm:text-3xl font-bold p-4">
            Completed
          </h1>
        </div>

        <div className="bg-white rounded-[15px] z-10 w-[90%] md:w-[60%] lg:w-[50%] flex flex-col md:flex-row justify-between p-[2rem] mt-[1rem] drop-shadow-custom-shadow items-center">
          <div className="flex flex-col gap-8 md:gap-20 items-center">
            <Score calculation="100%" topic="Completion" />
            <Score calculation={count} topic="Correct" />
          </div>

          <div className="flex flex-col items-center justify-center bg-custom-cl-btn rounded-full w-[8rem] h-[8rem] sm:w-[11rem] sm:h-[11rem] border-black border-2 mt-8 md:mt-0">
            <div className="font-semibold text-xl md:text-3xl">Score</div>
            <div className="font-bold text-3xl md:text-6xl">{count}</div>
          </div>

          <div className="flex flex-col gap-8 md:gap-20 items-center">
            <Score calculation={task_question} topic="Task Questions" />
            <Score calculation={task_question - count} topic="Wrong" />
          </div>
        </div>

        <div className="h-[40rem] w-[40rem] md:h-[60rem] md:w-[60rem] bg-custom-clr rounded-full absolute top-[5rem] md:top-[8rem] z-0"></div>
        <div className="relative z-10 mt-16 flex w-full md:w-[60%] justify-between items-center px-4">
          <div onClick={handleToAgain} className="cursor-pointer text-center">
            <img
              src={again}
              alt="Play Again"
              className="h-[2.5rem] md:h-[3.5rem]"
            />
            <h1 className="text-sm md:text-base">Play Again</h1>
          </div>
          <div onClick={handleToHome} className="cursor-pointer text-center">
            <img src={home} alt="Home" className="h-[2.5rem] md:h-[3.5rem]" />
            <h1 className="text-sm md:text-base">Home</h1>
          </div>
          <div onClick={handleToReview} className="cursor-pointer text-center">
            <img
              src={review}
              alt="Review Answers"
              className="h-[2.5rem] md:h-[3.5rem]"
            />
            <h1 className="text-sm md:text-base">Review Answers</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Score_board;
