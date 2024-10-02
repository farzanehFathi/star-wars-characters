import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

const swapiAPI = axios.create({ baseURL: BASE_URL });

export const getPeople = async (page = 1) => {
  return (await swapiAPI.get(`/people?page=${page}`)).data.results;
};

export const getPlanets = async (page = 1) => {
  return (await swapiAPI.get(`/planets?page=${page}`)).data.results;
};
