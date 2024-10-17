import axios from "axios";
import { useParams, useLoaderData, Link } from "react-router-dom";

export default function PlanetDetails() {
  const { id } = useParams();
  const { planetData, films, residents } = useLoaderData();

  return (
    <>
      <h1>{planetData.name}</h1>
      <hr />

      <p>
        <strong>Climate: </strong>
        {planetData.climate}
      </p>

      <p>
        <strong>Terrain: </strong>
        {planetData.terrain}
      </p>

      <p>
        <strong>Population: </strong>
        {planetData.population}
      </p>
      <p>
        <strong>Rotation Period: </strong>
        {planetData.rotation_period}
      </p>

      <p>
        <strong>Orbital Period: </strong>
        {planetData.orbital_period}
      </p>

      <p>
        <strong>Diameter: </strong>
        {planetData.diameter}
      </p>

      <p>
        <strong>Gravity: </strong>
        {planetData.gravity}
      </p>

      <p>
        <strong>Surface Water: </strong>
        {planetData.surface_water}
      </p>

      <p>
        <strong>Residents: </strong>{" "}
        {residents.map((resident) => {
          return (
            <>
              <Link> {resident.data.name}</Link> {" | "}
            </>
          );
        })}
      </p>

      <p>
        <strong>Films: </strong>{" "}
        {films.map((film) => {
          return (
            <>
              <Link> {film.data.title}</Link> {" | "}
            </>
          );
        })}
      </p>

      <hr />

      <small>
        <p>Created at {planetData.created}</p>
        <p>Last edited at {planetData.edited}</p>
      </small>
    </>
  );
}

export const PlanetDetailsLoader = async ({ params }) => {
  const { id } = params;

  const planetData = (await axios.get("https://swapi.dev/api/planets/" + id))
    .data;

  const films = await Promise.all(
    planetData.films.map((film) => axios.get(film))
  );

  const residents = await Promise.all(
    planetData.residents.map((resident) => axios.get(resident))
  );

  return { planetData, films, residents };
};
