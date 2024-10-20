import React from "react";

const RulesField = ({ description }) => {
  return (
    <React.Fragment>
      <div className="h-auto bg-custom-cl-btn w-[80%] ml-auto mr-auto drop-shadow-custom-shadow rounded-[10px] p-4">
        <p className=" border-custom-cl-btn md:text-2xl sm:text-[1rem] items-center justify-center relative top-2 ">
          {description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default RulesField;
