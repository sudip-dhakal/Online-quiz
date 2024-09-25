import React from "react";

const RulesField = ({ description }) => {
  return (
    <React.Fragment>
      <div className="h-[3.5rem] bg-custom-cl-btn w-[80%] ml-auto mr-auto drop-shadow-custom-shadow rounded-[10px]">
        <p className=" border-custom-cl-btn text-2xl flex items-center justify-center relative top-2">
          {description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default RulesField;
