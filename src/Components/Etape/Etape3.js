import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Legume from "../Card/Legume.js";
import "./Etape1.css";
import Annuler from "./Annuler.js";

function Etape3() {
  const [legumeData, setLegumeData] = useState([]);
  const [legumePicked, setLegumePicked] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() =>
    axios
      .get(`https://run.mocky.io/v3/83eb0bd1-dc9e-441a-9e7e-07a489cf87bc`)
      .then((res) => {
        setLegumeData(res.data["Legume"]);
        setIsLoaded(true);
      })
  );

  const addLegume = (newLegume) => {
    var found = legumePicked.find((legume) => legume.name === newLegume.name);
    if (!found) {
      setLegumePicked([...legumePicked, newLegume]);
    } else {
      var index = legumePicked.findIndex(
        (legume) => legume.name === newLegume.name
      );
      legumePicked.splice(index, 1);
      setLegumePicked([...legumePicked]);
    }
  };

  const confirm = () => {
    dispatch({
      type: "LEGUME",
      payload: legumePicked,
    });
    history.push("/etape4");
  };

  if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="App">
        <div className="Center">
          <nav>
            <div>
              <img
                height="200px"
                src="/Logo-MagicKebab.png"
                alt="Magic Kebab"
              ></img>
            </div>
          </nav>
          <div className="Main">
            <Annuler />
            <div
              className="titre"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Salade, tomates, oignons?
            </div>
            <div className="container">
              {legumeData.map((element) => (
                <Legume
                  key={element.name}
                  legume={element}
                  addLegume={addLegume}
                  isSelected={legumePicked.find(
                    (legume) => legume.name === element.name
                  )}
                ></Legume>
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

export default Etape3;
