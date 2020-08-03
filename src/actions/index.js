import superhero from "../api/superhero";
import { FETCH_SUPERHEROES } from "./types";

export const fetchSuperHeroes = () => {
  return async (dispatch) => {
    const superHeroesId = [];
    const numIDs = 731;

    for (let i = 1; i <= numIDs; i++) {
      superHeroesId.push(i);
    }

    const response = await Promise.all(
      superHeroesId.map(async (id) => await superhero.get(`/${id}`))
    );

    dispatch({ type: FETCH_SUPERHEROES, payload: response });
  };
};
