import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime = time + 1;
    });
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
