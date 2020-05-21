import { NUMBER_ACTION_TYPES } from "./actions";

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
  const newState = [...state];
  const index = newState.indexOf(action.payload);
  switch (action.type) {
    case NUMBER_ACTION_TYPES.ADD:
      if (index > -1) {
        // if number is already in array throw error
        // by rights, your validation should be done in the React component
        // so this error should never occur
        throw Error("Oops your number is already added");
      } else {
        return [...state, action.payload];
      }

    case NUMBER_ACTION_TYPES.REMOVE:
      if (index < 0) {
        // if number is not in array throw error
        // again, you should validate in your component
        throw Error("Oops your number is not found");
      } else {
        newState.splice(index, 1);
        return newState;
      }
    default:
      return state;
  }
}