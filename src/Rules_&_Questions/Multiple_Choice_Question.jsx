import React, { useEffect, useState } from "react";
import Questions from "../Components/Questions";
import axios from "axios";

const Multiple_Choice_Question = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const answerList = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];

  let getData = () => {
    axios.get("https://the-trivia-api.com/v2/questions").then((res) => {
      setQuizData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (quizData.length === 0) {
    return <div>Loading...</div>;
  }

  let currentQuestion = quizData[currentIndex];
  const answerList = [
    currentQuestion.correctAnswer,
    ...currentQuestion.incorrectAnswers,
  ];

  return (
    <>
      <Questions
        answerList={answerList}
        question={currentQuestion.question.text}
        questionType="multipleChoice"
      />
    </>
  );
};

export default Multiple_Choice_Question;
