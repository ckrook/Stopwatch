import "./App.css";
import React, { useEffect, useState } from "react";
import Logg from "./components/Logg";

function App() {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [logg, setLogg] = useState([]);
  const [status, setStatus] = useState("Start");
  let toggleBtn = "menu__button " + timeOn;
  function LoggIt(e) {
    const pressed = e.currentTarget.getAttribute("value");
    let newlogg = {
      time: time,
      action: pressed,
    };
    setLogg((logg) => [...logg, newlogg]);
  }

  function resetLogg() {
    if (!timeOn) {
      setLogg([]);
    }
  }

  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeOn]);

  return (
    <div className="app">
      <div className="timer">
        <div className="timer__title">
          <span className="timer__title--large">
            {("0" + Math.floor((time / 600000) % 60)).slice(-2)}:
          </span>
          <span className="timer__title--large">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span className="timer__title--large">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          </span>
          <span className="timer__title--large">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
      </div>
      <div className="menu">
        <input
          className={toggleBtn}
          type="button"
          value={status}
          onClick={(e) => {
            LoggIt(e, "value");
            if (timeOn === false) {
              setTimeOn(true);
              setStatus("Paus");
            } else {
              setTimeOn(false);
              setStatus("Start");
            }
          }}
        />
        <input
          className="menu__button split-btn"
          type="button"
          value="Split"
          onClick={(e) => {
            if (timeOn) return LoggIt(e, "value");
          }}
        />
        <input
          className="menu__button reset-btn"
          type="button"
          value="Reset"
          onClick={(e) => {
            resetLogg();
            if (!timeOn) return setTime(0);
          }}
        />
      </div>
      <div className="timelogg">
        <ol>
          {logg.map((l, index) => {
            return <Logg time={l.time} action={l.action} count={index} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
