import React from "react";
import { useParams } from "react-router-dom";
import { getTvSeriesDetails } from "../api/tmdb-api";
import { TVSeriesProps } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TvDetails from "../components/tvDetails"
import TemplateTvDetailsPage from "../components/templateTvDetailsPage";

const TvDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: tvSeries, error, isLoading, isError } = useQuery<TVSeriesProps, Error>(
    ["tvSeries", id],
    () => getTvSeriesDetails(id || "")
  );

  if (isLoading) {
    return <Spinner />;
  }
console.log(`this is the tvseries -------- ${tvSeries}`)
  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
    {tvSeries ? (
      <>
      <TemplateTvDetailsPage series={tvSeries}> 
        <TvDetails {...tvSeries} />
      </TemplateTvDetailsPage>
    </>
  ) : (
    <p>Waiting for movie details</p>
  )}
  </>
  );
};

export default TvDetailsPage;
