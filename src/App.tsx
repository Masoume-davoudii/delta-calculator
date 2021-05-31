import React, { useState } from "react";
import "./App.css";
import { SpaPage } from "./Components/SpaPage/SpaPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Calculator } from "./Components/Calculator/Calculator";
import { ShowHistory } from "./Components/ShowHistory/ShowHistory";
import {
  CenterContainer,
  ICalculator,
} from "./Components/CenterContainer/CenterContainer";
import { LeftSide } from "./Components/LeftSide/LeftSide";
import { RightSide } from "./Components/RightSide/RightSide";

function App() {
  const [numberState, setNumberState] = useState<ICalculator>({ Inputs: [] });
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={SpaPage} />
          <Switch>
            <Route path="/Calculator">
              <SpaPage>
                <Calculator
                  numberState={numberState}
                  setNumberState={setNumberState}
                />
              </SpaPage>
            </Route>
            <Route path="/ShowHistory">
              <>
                <SpaPage>
                  <ShowHistory numbersState={numberState} />
                </SpaPage>
              </>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
