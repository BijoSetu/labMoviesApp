import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMovies from "./pages/upcomingMovies"; 
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularPage from "./pages/popularMovies";
import TvSeriesPage from "./pages/tVSeriesPage";
import ActorsPage from "./pages/actorsPage";
import TvDetailsPage from "./pages/tvDetailsPage";
import  {UserProvider} from "./contexts/registerContext";
import RegisterPage from "./pages/registerPage";
import ReviewsPage from "./pages/reviewsPage";
import AddFantasyMoviePage from "./pages/fantasyMoviePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <UserProvider>
          <MoviesContextProvider>
          
          <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/upcoming" element={<UpcomingMovies/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/popular" element={<PopularPage/>} />
        <Route path="/tv" element={<TvSeriesPage/>} />
        <Route path="/actors" element={<ActorsPage/>} />
        <Route path="/tv/:id" element={<TvDetailsPage/>} />
        <Route path="/tv/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/login" element={<RegisterPage/>} />
        <Route path="/movie/reviews" element={<ReviewsPage />} />
        <Route path="/movie/fantasymovie" element={<AddFantasyMoviePage />} />
      </Routes> 
        </MoviesContextProvider>
        </UserProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

