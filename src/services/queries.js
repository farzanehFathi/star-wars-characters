import { useQuery, keepPreviousData } from "@tanstack/react-query";

// Services API
import { getPeople, getPlanets } from "./api";

export function PeopleQuery(page) {
  return useQuery({
    queryKey: ["people", { page }],
    queryFn: () => getPeople(page),
    placeholderData: keepPreviousData,
  });
}

export function PlanetsQuery(page) {
  return useQuery({
    queryKey: ["planets", { page }],
    queryFn: () => getPlanets(page),
    placeholderData: keepPreviousData,
  });
}
