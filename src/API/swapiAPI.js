import axios from "axios";

const swapiAPI = axios.create({ baseURL: "https://swapi.dev/api" });

export default swapiAPI;
