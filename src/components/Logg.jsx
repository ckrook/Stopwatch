import React from "react";

function Logg() {
  return (
    <div className="timelogg">
      <ol>
        <li className="timelogg__list">
          <span className="timelogg__list--nr">#1</span>
          <span className="timelogg__list--time">00:00:00:000</span>
          <span className="timelogg__list--action">Start</span>
        </li>
      </ol>
    </div>
  );
}

export default Logg;
