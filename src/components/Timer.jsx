import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="timer">
      <div className="timer__title">
        <span className="timer__title--large">{time}</span>
      </div>
    </div>
  );
}

export default Timer;
