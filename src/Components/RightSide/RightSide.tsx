import React from "react";
import { useHistory } from "react-router-dom";

import "./RightSide.css";

export const RightSide = () => {
  const history = useHistory();
  console.log(history);
  const result = (
    <div className="btnContainer">
      <button
        type="button"
        onClick={() => history.push("/Calculator")}
        className="btnShow"
      >
        Show Calulator
      </button>
      <button
        type="button"
        onClick={() => history.push("/ShowHistory")}
        className="btnShow"
      >
        Show History
      </button>

      <button
        type="button"
        onClick={() => history.goBack()}
        className="btnShow"
      >
        Go Back
      </button>
    </div>
  );
  return <div className="right-side">{result}</div>;
};
