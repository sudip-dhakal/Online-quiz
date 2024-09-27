import React from "react";

const Button = (props) => {
  const { name, Class, onClick } = props;
  return (
    <>
      <button type="button" className={Class} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default Button;

// ml-20 bg-custom-cl-btn p-2 w-[200px] h-[50px] rounded-[20px] relative -top-20 border-black border-2 text-xl text-center
