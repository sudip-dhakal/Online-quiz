import React, { useEffect, useState } from "react";

const Timer = ({ setTimeEnd }) => {
  const [timeLeft, setTimeLeft] = useState(50);

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

  return (
    <React.Fragment>
      <div className="bg-timer-bg w-[130px] h-[130px] rounded-full flex items-center justify-center absolute top-5 left-[45%]">
        <h1 className="text-7xl font-bold ">{timeLeft}</h1>
      </div>
    </React.Fragment>
  );
};

export default Timer;
