const INITIAL_STATE = {
  panier: [],
  quantiteTotal: 0,
};

function PanierReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_KEBAB": {
      return {
        ...state,
        panier: [...state.panier, action.payload],
        quantiteTotal: state.quantiteTotal + 1,
      };
    }
    case "DEC_QUANTITY": {
      return {
        ...state,
        panier: state.panier.map((kebab, i) =>
          i === action.payload.id
            ? { ...kebab, quantite: action.payload.quantite }
            : kebab
        ),
        quantiteTotal: state.quantiteTotal - 1,
      };
    }

    case "SUPP_KEBAB": {
      return {
        ...state,
        panier: state.panier.filter(
          (kebab) =>
            JSON.stringify(action.payload.recette) !==
            JSON.stringify(kebab.recette)
        ),
        quantiteTotal: state.quantiteTotal - 1,
      };
    }

    case "INC_QUANTITY": {
      return {
        ...state,
        panier: state.panier.map((kebab, i) =>
          i === action.payload
            ? { ...kebab, quantite: kebab.quantite + 1 }
            : kebab
        ),
        quantiteTotal: state.quantiteTotal + 1,
      };
    }

    default: {
    }
  }
  return state;
}

export default PanierReducer;
