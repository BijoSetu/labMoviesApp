import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ActorList from "../components/actorList";
import { ActorProps } from "../types/interfaces";
import { getActors } from "../api/tmdb-api";

const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<ActorProps[], Error>(
    "actors",
    getActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <ActorList
      actors={data || []}
      action={(actor: ActorProps) => {
        return <button>Add to Favorites</button>;
      }}
    />
  );
};

export default ActorsPage;