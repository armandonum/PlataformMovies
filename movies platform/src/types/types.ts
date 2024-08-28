export interface Movie {
  name: string | undefined;
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
  }

  export interface UseMovies {
    movies: Movie[];
    selectedMovie: Movie | null;
    loading: boolean;
    error: string | null;
    carouselRef: React.RefObject<HTMLDivElement>;
    currentIndex: number;
    handleMovieClick: (movie: Movie) => void;
    handleCloseDetail: () => void;
    handleNext: () => void;
    handlePrev: () => void;
  }


  export interface Actor {
    id: number;
    name: string;
    profile_path: string;
  }
  
  export interface Genre {
    id: number;
    name: string;
  }

  export interface UseGenresAndMovies {
    genres: Genre[];
    movies: Movie[];
    selectedMovie: Movie | null;
    loading: boolean;
    error: string | null;
    fetchMoviesByGenre: (genreId: number) => Promise<void>;
    selectGenre: (genre: Genre) => void;
    handleMovieClick: (movie: Movie) => void;
    handleCloseDetail: () => void;
  
    clearSelection: () => void;
    selectedGenre: Genre | null;
  }
  

  // for platforms

export interface Platform {
  provider_id: number;
  provider_name: string;
  logo_path: string; 
}
