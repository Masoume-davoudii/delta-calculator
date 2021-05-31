import "./CenterContainer.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Calculator } from "../Calculator/Calculator";
import { ShowHistory } from "../ShowHistory/ShowHistory";
import { SpaPage } from "../SpaPage/SpaPage";
import "./CenterContainer.css";

export type ICalculator = {
  Inputs: { a: Number; b: Number; c: Number; delta: Number }[];
};
interface CenterContainerProps {}

export const CenterContainer: React.FC<CenterContainerProps> = (props) => {
  return <div className="center-container">{props.children}</div>;
};
