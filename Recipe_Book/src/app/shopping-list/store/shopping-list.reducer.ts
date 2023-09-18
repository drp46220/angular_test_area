import { Ingredient } from '../../shared/ingredient-model';
import * as shoppingListActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editIngs: Ingredient;
  editingsIndex: number;
}

const initialState = {
  ingredients: [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 23),
    new Ingredient('pears', 7),
  ],
  editIngs: null, // type: Ingredient
  editingsIndex: -1, // type: number
};

export function shoppingListReducer(
  state: State = initialState,
  action: shoppingListActions.ShoppingListActionType
) {
  switch (action.type) {
    case shoppingListActions.ADD_INGREDIENT:
      return {
        ...state, // pulls out all objects of the old data (coping the old state)
        ingredients: [...state.ingredients, action.payload], // overriding old state with new elements in new array
      };

    case shoppingListActions.ADD_INGREDIENTS:
      return {
        ...state, // copy the old state first
        ingredients: [...state.ingredients, ...action.payload],
      };

    case shoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index]; //ingredient I want ot edit
      const updateIngredient = {
        ...ingredient, // copies old array
        ...action.payload.ingredient, // override old array with  new array
      };
      const updateIngredients = [...state.ingredients]; // new array with old data
      updateIngredients[action.payload.index] = updateIngredient;

      return {
        ...state, // copy the old state first
        ingredients: updateIngredients,
      };

    case shoppingListActions.DELETE_INGREDIENT:
      return {
        ...state, // copy the old state first
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== action.payload;
        }),
      };
    case shoppingListActions.START_EDIT:
      return {
        ...state, // copy old state
        editingsIndex: action.payload,
        // editIngs: state.ingredients[action.payload], // just a reference (shallow)
        //  create a new object instead
        editIngs: { ...state.ingredients[action.payload] }, // new array (deep copy )
      };

    case shoppingListActions.STOP_EDIT:
      return {
        ...state,
        editingsIndex: -1,
        editIngs: null,
      };

    default:
      return state;
  }
}
