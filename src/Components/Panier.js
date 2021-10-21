import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CardCommande from "./CardCommande";

export default function Panier() {
  const { panier, quantiteTotal } = useSelector((state) => ({
    ...state.PanierReducer,
  }));

  const dispatch = useDispatch();
  const history = useHistory();

  const commander = () => {
    history.push("/valide");
  };

  const addQuantity = (kebab) => {
    let index = panier.indexOf(kebab);
    dispatch({
      type: "INC_QUANTITY",
      payload: index,
    });
  };

  const delQuantity = (kebab) => {
    let index = panier.indexOf(kebab);
    const decrKebab = {
      recette: kebab.recette,
      quantite: kebab.quantite - 1,
      id: index,
    };
    if (decrKebab.quantite <= 0) {
      dispatch({
        type: "SUPP_KEBAB",
        payload: decrKebab,
      });
    } else {
      dispatch({
        type: "DEC_QUANTITY",
        payload: decrKebab,
      });
    }
  };

  return (
    <div className="Commande">
      <div>Total : {quantiteTotal * 6.5} €</div>
      <div>
        <button
          onClick={() => {
            commander();
          }}
        >
          {" "}
          Passer la commande
        </button>
      </div>
      <div>Votre commande :</div>
      <br></br>
      {panier.map((kebab) => {
        let ingredients = "";
        kebab.recette.forEach((recette) => {
          ingredients += `${recette.name} / `;
        });
        ingredients = ingredients.slice(0, -2);
        return (
          <CardCommande
            recette={ingredients}
            kebab={kebab}
            addQuantity={addQuantity}
            delQuantity={delQuantity}
          ></CardCommande>
        );
      })}
      <card></card>
    </div>
  );
}
