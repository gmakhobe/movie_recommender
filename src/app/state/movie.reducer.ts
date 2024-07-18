import { createReducer, on } from '@ngrx/store'
import { addPopularMovies, addTopratedMovies, addUpcomingMovies, addFavourateMovie, removeFavourateMovie, addFavourateMovies } from './movie.actions'
import { Movie } from './movies.model';

export const initialPopularMoviesState: Array<Movie> = [];
export const initialTopratedMoviesState: Array<Movie> = [];
export const initialUpcomingMoviesState: Array<Movie> = [];
export const initialFavourateMoviesState: Array<Movie> = [];

export const popularMoviesReducer = createReducer(
  initialPopularMoviesState,
  on(addPopularMovies, (state, { popularMovies }) => {
    return popularMovies;
  })
);

export const topratedMoviesReducer = createReducer(
  initialTopratedMoviesState,
  on(addTopratedMovies, (state, { topratedMovies }) => {
    return topratedMovies;
  })
);

export const upcomingMoviesReducer = createReducer(
  initialUpcomingMoviesState,
  on(addUpcomingMovies, (state, { upcomingMovies }) => {
    return upcomingMovies;
  })
);

export const favourateMoviesReducer = createReducer(
  initialFavourateMoviesState,
  on(addFavourateMovie, (state: any, { favourateMovie }) => {
    return [favourateMovie, ...state];
  }),
  on(removeFavourateMovie, (state: any, { favourateMovie }) => {
    return state.filter((movie: Movie) => movie.title != favourateMovie.title && movie.release_date != favourateMovie.release_date);
  }),
  on(addFavourateMovies, (state: any, { favourateMovies }) => {
    return favourateMovies;
  })
);