import React from "react";
import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import { CenterContainer } from "../CenterContainer/CenterContainer";
import "./SpaPage.css";

export const SpaPage = () => {
  return (
    <div className="spa-page">
      <LeftSide />
      <CenterContainer />
      <RightSide />
    </div>
  );
};
