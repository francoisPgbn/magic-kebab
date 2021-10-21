import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Pain from "../Card/Pain.js";
import "./Etape1.css";
import Header from "../Header.js";
import { useDispatch, useSelector } from "react-redux";
import Panier from "../Panier.js";
import DefaultKebab from "../DefaultKebab.js";

function Etape1() {
  const [painData, setPainData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { panier } = useSelector((state) => ({
    ...state.PanierReducer,
  }));

  const [classique, setClassique] = useState({});
  const [vege, setVege] = useState({});
  const [bbq, setBbq] = useState({});

  let showPanier;

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/83eb0bd1-dc9e-441a-9e7e-07a489cf87bc`)
      .then((res) => {
        setPainData(res.data["Pain"]);
        setIsLoaded(true);
        setClassique({
          recette: [
            res.data["Pain"][0],
            res.data["Viande"][0],
            res.data["Legume"][0],
            res.data["Legume"][1],
            res.data["Legume"][2],
            res.data["Sauce"][0],
          ],
          quantite: 1,
        });
        setVege({
          recette: [
            res.data["Pain"][0],
            res.data["Viande"][1],
            res.data["Sauce"][0],
          ],
          quantite: 1,
        });
        setBbq({
          recette: [
            res.data["Pain"][0],
            res.data["Viande"][0],
            res.data["Legume"][0],
            res.data["Legume"][1],
            res.data["Legume"][2],
            res.data["Sauce"][3],
          ],
          quantite: 1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addKebabToPanier = (kebab) => {
    let index = panier.findIndex(
      (element) =>
        JSON.stringify(element.recette.sort()) ===
        JSON.stringify(kebab.recette.sort())
    );

    if (index !== -1) {
      dispatch({
        type: "INC_QUANTITY",
        payload: index,
      });
    } else {
      dispatch({
        type: "ADD_KEBAB",
        payload: kebab,
      });
    }
  };

  const addPain = (pain) => {
    dispatch({
      type: "PAIN",
      payload: pain,
    });
    history.push("/etape2");
  };

  if (panier.length > 0) {
    showPanier = <Panier />;
  }

  if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="App">
        <div className="Center">
          <Header />
          <div className="Main">
            <div
              className="titre"
              style={{
                fontSize: "33px",
                fontWeight: "800",
              }}
            >
              Nos kebabs !
            </div>

            <div>
              <DefaultKebab
                nom={"Le classique"}
                kebab={classique}
                addKebabToPanier={addKebabToPanier}
              />
              <DefaultKebab
                nom={"Le végétarien"}
                kebab={vege}
                addKebabToPanier={addKebabToPanier}
              />
              <DefaultKebab
                nom={"Le bbq"}
                kebab={bbq}
                addKebabToPanier={addKebabToPanier}
              />
            </div>

            <div
              className="titre"
              style={{
                fontSize: "30px",
                fontWeight: "500",
              }}
            >
              Sinon, composer votre kebab !
            </div>
            <div
              className="titre"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Pain ou galette?
            </div>
            <div className="container">
              {painData.map((element) => (
                <Pain
                  key={element.name}
                  pain={element}
                  addPain={addPain}
                ></Pain>
              ))}
            </div>
          </div>
        </div>
        {showPanier}
      </div>
    );
  }
}

export default Etape1;
