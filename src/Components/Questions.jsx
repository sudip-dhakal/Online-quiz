import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Questions = ({
  answerList = [],
  questionType,
  question,
  nextQuestion,
  current,
  length,
  answer,
}) => {
  let Navigation = useNavigate();
  const [timeEnd, setTimeEnd] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  const [questions, setQuestions] = useState([]);

  console.log(answer, selectedAnswer, status);
  useEffect(() => {
    if (current == 0) {
      const initialQuestions = new Array(length)
        .fill(null)
        .map((item, index) => ({
          question: `Question ${index + 1}`,
          selectedAnswer: null,
          correctAnswer: answer,
          status: null,
        }));
      setQuestions(initialQuestions);
    }
  }, [length, current, answer]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeEnd(true);
      return;
    }

    let timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  let handleSubmit = () => {
    if (selectedAnswer === answer) {
      setCount((prev) => prev + 1);
      setStatus(true);
    } else console.log("Count could not be updated ");

    setTimeLeft(10);
    setSelectedAnswer(null);
    nextQuestion();
  };

  useEffect(() => {
    if (timeEnd) {
      nextQuestion();
      setTimeLeft(10);
      setTimeEnd(false);
      setSelectedAnswer(null);
    }
  }, [timeEnd, nextQuestion]);

  useEffect(() => {
    if (current + 1 > length) {
      Navigation("/score", {
        state: {
          count: count,
          length: length,
          selectedAnswer: selectedAnswer,
          correctAnswer: answer,
          status: status,
        },
      });
    }
  });

  useEffect(() => {
    console.log("Your score is ", count);
  }, [count]);

  console.log(answer);

  return (
    <React.Fragment>
      <div className=" bg-custom-clr min-h-screen">
        <div className="h-[15%] bg-custom-cl-btn drop-shadow-custom-shadow ">
          <img
            src={logo}
            alt="logo"
            className="md:w-[6rem] sm:w-[3rem] h-auto ml-20"
          />
        </div>
        <div className="bg-timer-bg md:w-[8.1rem] sm:w-[5rem] md:h-[8.1rem] sm:h-[5rem] rounded-full flex items-center justify-center absolute top-5 left-[45%]">
          <h1 className="md:text-7xl sm:text-2xl font-bold ">{timeLeft}</h1>
        </div>

        <div className="bg-custom-cl-btn md:w-[50%] sm:w-[90%] drop-shadow-custom-shadow ml-auto mr-auto mt-[6rem] rounded-[20px] pr-10 pt-2 pb-5 pl-2">
          <h4 className="font-bold md:text-sm sm:text-[0.625rem] text-right">
            Question {current}/{length}
          </h4>
          <h1 className="text-center md:text-3xl sm:text-[1rem] font-bold ">{question}</h1>

          {questionType == "multipleChoice" ? (
            answerList.map((answers, index) => (
              <div
                key={index}
                onClick={() => setSelectedAnswer(answers)}
                className={`mt-6 h-auto w-[70%] ml-auto mr-auto rounded-[10px] border-black border-2 mb-4 cursor-pointer ${
                  selectedAnswer === answers
                    ? " bg-green-900 text-white"
                    : "bg-custom-clr"
                }   `}
              >
                <h3 className="font-semibold sm:font-[0.7rem] md:font-3xl text-center md:p-2 sm:p-0  box-border ">
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

          <div
            className="ml-auto mr-auto w-auto bg-button-color text-center  rounded-[8px] h-[2rem] "
            onClick={handleSubmit}
          >
            <Button Class="md:text-2xl sm:text-xl font-bold text-white w-auto" name="Submit" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Questions;
