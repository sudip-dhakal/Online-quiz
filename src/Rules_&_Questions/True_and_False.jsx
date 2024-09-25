import React from "react";
import Questions from "../Components/Questions";

const True_and_False = () => {
  const answerList = ["True", "False"];
  return (
    <React.Fragment>
      <Questions answerList={answerList} questionType="multipleChoice" />
    </React.Fragment>
  );
};

export default True_and_False;
