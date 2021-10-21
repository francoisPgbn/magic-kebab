import "./CardCommande.css";

const CardCommande = ({ recette, kebab, addQuantity, delQuantity }) => {
  const { quantite } = kebab;
  return (
    <div className="cardCmd">
      <div class="card-body">
        <div className="cardText">
          <div className="cardIng">
            <p class="card-text">{recette}</p>
          </div>
          <div className="cardQuant">
            <p class="card-text"> x{quantite}</p>
          </div>
        </div>

        <div className="placeButton">
          <button
            className="cardButton"
            onClick={() => {
              delQuantity(kebab);
            }}
          >
            {" "}
            -{" "}
          </button>
          <button
            className="cardButton"
            onClick={() => {
              addQuantity(kebab);
            }}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCommande;
