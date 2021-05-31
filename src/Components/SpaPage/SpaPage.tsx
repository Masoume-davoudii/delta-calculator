import React, { Children } from "react";
import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import { CenterContainer } from "../CenterContainer/CenterContainer";
import "./SpaPage.css";
import { Calculator } from "../Calculator/Calculator";
interface SpaPageProps {}
export const SpaPage: React.FC<SpaPageProps> = (props) => {
  return (
    <div className="spa-page">
      <LeftSide />
      <CenterContainer>{props.children}</CenterContainer>
      <RightSide />
    </div>
  );
};
