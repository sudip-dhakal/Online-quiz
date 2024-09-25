import React from "react";
import Questions from "../Components/Questions";

const Multiple_Choice_Question = () => {
  const answerList = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
  return (
    <>
      <Questions answerList={answerList} questionType="multipleChoice" />
    </>
  );
};

export default Multiple_Choice_Question;
