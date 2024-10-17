import axios from "axios";
import { useLoaderData, useParams, Link } from "react-router-dom";

export default function PeopleDetails() {
  const { id } = useParams();
  const { personData, homeWorld, films, species, starships, vehicles } =
    useLoaderData();

  return (
    <>
      <h1>{personData.name}</h1>
      <hr />
      <p>
        <strong>Gender: </strong>
        {personData.gender}
      </p>
      <p>
        <strong>Height: </strong>
        {personData.height}
      </p>
      <p>
        <strong>Mass: </strong>
        {personData.mass}
      </p>
      <p>
        <strong>Birth Year: </strong>
        {personData.birth_year}
      </p>
      <p>
        <strong>Eye Color: </strong>
        {personData.eye_color}
      </p>
      <p>
        <strong>Hair Color: </strong>
        {personData.hair_color}
      </p>
      <p>
        <strong>Skin Color: </strong>
        {personData.skin_color}
      </p>

      <p>
        <strong>Home World: </strong>
        <Link> {homeWorld.name}</Link>
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

      <p>
        <strong>Species: </strong>{" "}
        {species.map((sp) => {
          return (
            <>
              <Link> {sp.data.name}</Link> {" | "}
            </>
          );
        })}
      </p>

      <p>
        <strong>Starships: </strong>{" "}
        {starships.map((starship) => {
          return (
            <>
              <Link> {starship.data.name}</Link> {" | "}
            </>
          );
        })}
      </p>

      <p>
        <strong>Vehicles: </strong>{" "}
        {vehicles.map((vehicle) => {
          return (
            <>
              <Link> {vehicle.data.name}</Link> {" | "}
            </>
          );
        })}
      </p>
      <hr />

      <small>
        <p>Created at {personData.created}</p>
        <p>Last edited at {personData.edited}</p>
      </small>
    </>
  );
}

export const peopleDetailsLoader = async ({ params }) => {
  const { id } = params;

  const personData = (await axios.get("https://swapi.dev/api/people/" + id))
    .data;

  const homeWorld = (await axios.get(personData.homeworld)).data;

  const films = await Promise.all(
    personData.films.map((film) => axios.get(film))
  );

  const species = await Promise.all(
    personData.species.map((sp) => axios.get(sp))
  );

  const starships = await Promise.all(
    personData.starships.map((starship) => axios.get(starship))
  );

  const vehicles = await Promise.all(
    personData.vehicles.map((vehicle) => axios.get(vehicle))
  );

  return { personData, homeWorld, films, species, starships, vehicles };
};
