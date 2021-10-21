import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";

import Etape1 from "./Components/Etape/Etape1.js";
import Etape2 from "./Components/Etape/Etape2";
import Etape3 from "./Components/Etape/Etape3.js";
import Etape4 from "./Components/Etape/Etape4.js";
import Recapitulatif from "./Components/Recapitulatif";
import { Provider } from "react-redux";
import IngredientReducer from "./Reducers/IngredientReducer";
import PanierReducer from "./Reducers/PanierReducer";
import Valide from "./Components/Valide";

const RootReducer = combineReducers({
  IngredientReducer,
  PanierReducer,
});

const Store = createStore(RootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Etape1></Etape1>
          </Route>
          <Route exact path="/etape2">
            <Etape2></Etape2>
          </Route>
          <Route exact path="/etape3">
            <Etape3></Etape3>
          </Route>
          <Route exact path="/etape4">
            <Etape4></Etape4>
          </Route>
          <Route exact path="/recapitulatif">
            <Recapitulatif></Recapitulatif>
          </Route>
          <Route exact path="/valide">
            <Valide></Valide>
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
