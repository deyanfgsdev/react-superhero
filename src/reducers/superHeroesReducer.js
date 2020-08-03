import { FETCH_SUPERHEROES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SUPERHEROES:
      return action.payload;
    default:
      return state;
  }
};
