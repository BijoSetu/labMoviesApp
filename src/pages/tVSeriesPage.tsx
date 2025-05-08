import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { getTvSeries } from "../api/tmdb-api"; // Replace with the correct API function
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilterTv,
  genreFilterTv,
} from "../components/movieFilterUI";
import { TVSeriesProps } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddTvToFavouritesIcon from "../components/cardIcons/addTvToFavourites";

// const titleFiltering = {
//   name: "name",
//   value: "",
//   condition: titleFilterTv,
// };
// const genreFiltering = {
//   name: "genre",
//   value: "0",
//   condition: genreFilterTv,
// };

const TVSeriesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<TVSeriesProps[], Error>(
    "tvSeries",
    getTvSeries
  );
  // const { filterValues, setFilterValues, filterFunction } = useFiltering([
  //   titleFiltering,
  //   genreFiltering,
  // ]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // const changeFilterValues = (type: string, value: string) => {
  //   const changedFilter = { name: type, value: value };
  //   const updatedFilterSet =
  //     type === "title"
  //       ? [changedFilter, filterValues[1]]
  //       : [filterValues[0], changedFilter];
  //   setFilterValues(updatedFilterSet);
  // };

  const tvSeries = data || [];
  // const displayedTVSeries = filterFunction(tvSeries);

  return (
    <>
      <PageTemplate
        title="Discover TV Series"
        movies={tvSeries}
        action={(series: TVSeriesProps) => {
          return <AddTvToFavouritesIcon {...series} />;
        }}
      />
      {/* <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      /> */}
    </>
  );
};

export default TVSeriesPage;