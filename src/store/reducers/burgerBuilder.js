import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const intialstate = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  const addIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedAddIngredients = updateObject(state.ingredients, addIng);
  const updatedAddState = {
    ingredients: updatedAddIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedAddState);
};

const subIngredient = (state, action) => {
  const subIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedSubIngredients = updateObject(state.ingredients, subIng);
  const updatedSubState = {
    ingredients: updatedSubIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedSubState);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, {
    error: true,
  });
};

const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionType.REMOVE_INGREDIENT:
      return subIngredient(state, action);

    case actionType.SET_INGREDIENTS:
      return setIngredients(state, action);

    case actionType.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
