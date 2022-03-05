import React from "react";

function Logg(props) {
  return (
    <div className="timelogg">
      <ol>
        <li className="timelogg__list">
          <span className="timelogg__list--nr">#{props.count}</span>
          <div className="flex space-x-2">
            <span className={props.action}>
              {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}
            </span>
            <span>:</span>
            <span className={props.action}>
              {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
            </span>
            <span>:</span>
            <span className={props.action}>
              {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
          </div>
          <span className="timelogg__list--action">{props.action}</span>
        </li>
      </ol>
    </div>
  );
}

export default Logg;
