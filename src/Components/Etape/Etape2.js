import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Viande from "../Card/Viande.js";
import "./Etape1.css";
import Header from "../Header.js";
import Annuler from "./Annuler.js";

function Etape1() {
  const [viandeData, setViandeData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/83eb0bd1-dc9e-441a-9e7e-07a489cf87bc`)
      .then((res) => {
        setViandeData(res.data["Viande"]);
        setIsLoaded(true);
      });
  }, []);

  const addViande = (viande) => {
    dispatch({
      type: "VIANDE",
      payload: viande,
    });

    history.push("/etape3");
  };

  if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="App">
        <div className="Center">
          <Header />
          <div className="Main">
            <Annuler />
            <div
              className="titre"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Plutôt viande ou tofu?
            </div>
            <div className="container">
              {viandeData.map((element) => (
                <Viande
                  key={element.name}
                  viande={element}
                  addViande={addViande}
                ></Viande>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Etape1;
