import { combineReducers } from "redux";
import superHeroesReducer from "./superHeroesReducer";

export default combineReducers({
  superheroes: superHeroesReducer,
});
