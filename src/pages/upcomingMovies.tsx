import React, { useState, useEffect } from "react";
import PageTemplate from '../components/upcomingMovies';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";


const HomePage: React.FC = () => {
  const [movies, setUpComingMovies] = useState<BaseMovieProps[]>([]);
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  // New function
  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m: BaseMovieProps) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setUpComingMovies(updatedMovies);
  };

  useEffect(() => {
    getUpcomingMovies().then(movies => {
        setUpComingMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};
export default HomePage;
