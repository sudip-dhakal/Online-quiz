import React from "react";

const Score = (props) => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="text-center text-score-text font-bold italic">{props.calculation}</div>
        <div className="text-center italic font-semibold">{props.topic}</div>
      </div>
    </React.Fragment>
  );
};

export default Score;
