const INITIAL_STATE = {
  pain: {},
  viande: {},
  legume: [],
  sauce: [],
};

function IngredientReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PAIN": {
      return {
        ...state,
        pain: action.payload,
      };
    }
    case "VIANDE": {
      return {
        ...state,
        viande: action.payload,
      };
    }
    case "LEGUME": {
      return {
        ...state,
        legume: action.payload,
      };
    }
    case "SAUCE": {
      return {
        ...state,
        sauce: action.payload,
      };
    }
    case "ANNULER": {
      return {
        ...state,
        pain: {},
        viande: {},
        legume: [],
        sauce: [],
      };
    }

    default: {
    }
  }

  return state;
}

export default IngredientReducer;
