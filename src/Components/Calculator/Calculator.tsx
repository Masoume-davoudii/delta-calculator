import React, { useState } from "react";
import { ICalculator } from "../CenterContainer/CenterContainer";
import "./Calculator.css";

interface CalcProps {
  numberState: ICalculator;
  setNumberState: (e: ICalculator) => void;
}

export const Calculator: React.FC<CalcProps> = (props) => {
  const [aState, setAState] = useState("");
  const [bState, setBState] = useState("");
  const [cState, setCState] = useState("");
  const [deltaState, setDelatState] = useState(0);
  const [ALabelState, setALabelState] = useState("");
  const [BLabelState, setBLabelState] = useState("");
  const [CLabelState, setCLabelState] = useState("");

  const aStateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setALabelState(e.target.value);
    if (e.target.validity.valid) {
      setAState(e.target.value);
    }
  };

  const bStateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBLabelState(e.target.value);
    if (e.target.validity.valid) {
      setBState(e.target.value);
    }
  };
  const cStateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCLabelState(e.target.value);
    if (e.target.validity.valid) {
      setCState(e.target.value);
    }
  };
  const onClickHandler = () => {
    const delta =
      Number(bState) * Number(bState) - 2 * Number(aState) * Number(cState);
    const a = Number(aState);
    const b = Number(bState);
    const c = Number(cState);
    const newCalc = {
      Inputs: [...props.numberState.Inputs, { a, b, c, delta }],
    };
    setAState("");
    setBState("");
    setCState("");
    console.log(newCalc);
    setDelatState(delta);
    props.setNumberState(newCalc);
  };
  const result = (
    <div className="form">
      <div className="textInputGroup">
        <label className="numLable">
          A Number:{ALabelState}
          <input
            type="text"
            className="textInput"
            pattern="[0-9]*"
            value={aState}
            onChange={aStateHandler}
          />
        </label>

        <label className="numLable">
          B Number:{BLabelState}
          <input
            type="text"
            className="textInput"
            pattern="[0-9]*"
            value={bState}
            onChange={bStateHandler}
          />
        </label>

        <label className="numLable">
          C Number:{CLabelState}
          <input
            type="text"
            className="textInput"
            pattern="[0-9]*"
            value={cState}
            onChange={cStateHandler}
          />
        </label>
      </div>

      <button className="btn" onClick={onClickHandler}>
        Calculate
      </button>
      <label className="deltaLabel">Delta={deltaState}</label>
    </div>
  );
  return <div className="formContainer">{result}</div>;
};
