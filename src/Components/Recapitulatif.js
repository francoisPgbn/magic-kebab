import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Recap from "./Card/Recap";
import "./Etape/Etape1";
import Annuler from "./Etape/Annuler";

function Recapitulatif() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pain, viande, legume, sauce, panier } = useSelector((state) => ({
    ...state.IngredientReducer,
    ...state.PanierReducer,
  }));
  const [currentOrder, setCurrentOrder] = useState([pain, viande]);

  const confirm = () => {
    let index = panier.findIndex(
      (element) =>
        JSON.stringify(element.recette.sort()) ===
        JSON.stringify(currentOrder.sort())
    );

    if (index !== -1) {
      dispatch({
        type: "INC_QUANTITY",
        payload: index,
      });
    } else {
      dispatch({
        type: "ADD_KEBAB",
        payload: { recette: currentOrder, quantite: 1 },
      });
    }
    history.push("/");
  };

  useEffect(() => {
    const legumesData = legume;
    const saucesData = sauce;
    let legumes = [];
    let sauces = [];

    for (const iterator of legumesData) {
      legumes = [...legumes, iterator];
    }

    for (const iterator of saucesData) {
      sauces = [...sauces, iterator];
    }
    setCurrentOrder([...currentOrder, ...legumes, ...sauces]);
  }, []);

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
            {" "}
            On récapitule
          </div>
          <div className="container">
            {currentOrder.map((element) => (
              <Recap key={element.name} checkout={element}></Recap>
            ))}
          </div>
        </div>
        <div>
          <button onClick={() => confirm()}>Continuer</button>
        </div>
      </div>
    </div>
  );
}

export default Recapitulatif;
