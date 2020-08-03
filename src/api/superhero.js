import axios from "axios";

const CORS = "https://api.allorigins.win/raw?url=";

const KEY = "10158399473217305";

export default axios.create({
  baseURL: `${CORS}https://superheroapi.com/api/${KEY}`,
});
