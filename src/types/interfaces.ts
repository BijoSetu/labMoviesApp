export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
  }

  export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
  }

  export interface BaseTvListProps {
    movies: TVSeriesProps[];
    action: (m: TVSeriesProps) => React.ReactNode;
  }

  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[],
  production_countries: {
      iso_3166_1: string;
      name: string;
  }[];

  }

 

  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; 
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  
  export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
  }
 
  
  export type FilterOption = "title" | "genre";
  export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
  }
  

  export interface TvListPageTemplateProps extends BaseTvListProps { title: string;children?: React.ReactNode;
  }

  export interface Review{
    id: string;
    content: string
    author: string
  }


   
  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }
  
  export interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
  }
  

  export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }

  export interface TVSeriesProps {
    id: number;
    name: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    genre_ids: number[];
    origin_country: string[];
    original_language: string;
  }


  export interface SignInFormData {
    username: string;
    password: string;
  }
  
  export interface SignInResults {
    message: string;
    token: string;
  }
  
  export interface ActorProps {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }