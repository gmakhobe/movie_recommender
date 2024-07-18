import { createSelector, createFeatureSelector } from '@ngrx/store'
import { Movie } from './movies.model'

export const selectAllPopularMovies = createFeatureSelector<Array<Movie>>('popularMovies');
export const selectThreepopularMovies = createSelector(
  selectAllPopularMovies,
  (movies) => {
      return movies.length > 3 ? movies.slice(0, 3) : movies;
  }
);

export const selectAllTopratedMovies = createFeatureSelector<Array<Movie>>('topratedMovies');
export const selectThreeTopratedMovies = createSelector(
  selectAllTopratedMovies,
  (movies) => {
      return movies.length > 3 ? movies.slice(0, 3) : movies;
  }
);

export const selectAllUpcomingMovies = createFeatureSelector<Array<Movie>>('upcomingMovies');
export const selectThreeUpcomingMovies = createSelector(
  selectAllUpcomingMovies,
  (movies) => {
      return movies.length > 3 ? movies.slice(0, 3) : movies;
  }
);

export const selectFavourateMovies = createFeatureSelector<Array<Movie>>('favourateMovie');
export const selectThreeFavourateMovies = createSelector(
  selectFavourateMovies,
  (movies) => {
      return movies.length > 3 ? movies.slice(0, 3) : movies;
  }
);