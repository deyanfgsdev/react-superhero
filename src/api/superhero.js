import axios from "axios";

const CORS = "https://cors-anywhere.herokuapp.com/";

const KEY = "10158399473217305";

export default axios.create({
  baseURL: `${CORS}https://superheroapi.com/api/${KEY}`,
});
