import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sauce from "../Card/Sauce.js";
import "./Etape1.css";
import Header from "../Header.js";
import { useDispatch } from "react-redux";
import Annuler from "./Annuler.js";

function Etape4() {
  const [sauceData, setSauceData] = useState([]);
  const [saucePicked, setSaucePicked] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() =>
    axios
      .get(`https://run.mocky.io/v3/83eb0bd1-dc9e-441a-9e7e-07a489cf87bc`)
      .then((res) => {
        setSauceData(res.data["Sauce"]);
        setIsLoaded(true);
      })
  );

  const addSauce = (newSauce) => {
    var found = saucePicked.find((sauce) => sauce.name === newSauce.name);
    if (!found) {
      var newSauces = saucePicked;
      if (newSauces.length === 2) {
        newSauces.shift();
      }
      setSaucePicked([...saucePicked, newSauce]);
    } else {
      var index = saucePicked.findIndex(
        (sauce) => sauce.name === newSauce.name
      );
      saucePicked.splice(index, 1);
      setSaucePicked([...saucePicked]);
    }
  };

  const confirm = () => {
    dispatch({
      type: "SAUCE",
      payload: saucePicked,
    });

    history.push("/recapitulatif");
  };

  if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="App">
        <div className="Center">
          <Header></Header>
          <div className="Main">
            <Annuler />
            <div
              className="titre"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Quelques sauces?
            </div>
            <div className="container">
              {sauceData.map((element) => (
                <Sauce
                  key={element.name}
                  sauce={element}
                  addSauce={addSauce}
                  isSelected={saucePicked.find(
                    (sauce) => sauce.name === element.name
                  )}
                ></Sauce>
              ))}
            </div>
            <div>
              <button onClick={() => confirm()}>Continuer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Etape4;
