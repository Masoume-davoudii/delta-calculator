import React, { useState } from "react";
import "./CenterContainer.css";
import { Calculator } from "../Calculator/Calculator";
export type ICalculator = {
  Inputs: { a: Number; b: Number; c: Number; delta: Number }[];
};
export const CenterContainer = () => {
  const [numberState, setNumberState] = useState<ICalculator>({ Inputs: [] });
  return (
    <div className="center-container">
      <Calculator numberState={numberState} setNumberState={setNumberState} />
    </div>
  );
};
