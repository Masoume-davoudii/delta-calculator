import React from "react";
import { ICalculator } from "../CenterContainer/CenterContainer";

import "./ShowHistory.css";
interface ShowHistoryProps {
  numbersState: ICalculator;
}

export const ShowHistory: React.FC<ShowHistoryProps> = (props) => {
  const result = (
    <>
      {props.numbersState.Inputs.map((item) => (
        <Item numberState={item} />
      ))}
    </>
  );
  return (
    <div className="showDataContainer">
      <ul className="showData">{result}</ul>
    </div>
  );
};

type IItem = {
  numberState: { a: Number; b: Number; c: Number; delta: Number };
};
const Item: React.FC<IItem> = (props) => {
  const Item = (
    <li>
      <p>
        A Number :{props.numberState.a} B Number :{props.numberState.b} C
        Number:{props.numberState.c} Result={props.numberState.delta}{" "}
      </p>
    </li>
  );
  return <>{Item}</>;
};
