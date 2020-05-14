import * as actionTypes from './actions';

const { ADD_INGREDIENT, REMOVE_INGREDIENT } = actionTypes;

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  const { type, ingredientName } = action;

  switch (type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredientName]: state.ingredients[ingredientName] + 1,
        },
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredientName]: state.ingredients[ingredientName] - 1,
        },
      };
    default:
      return state;
  }
};

export default reducer;
