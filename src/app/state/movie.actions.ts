import { createAction, props } from '@ngrx/store'
import { Movie } from './movies.model';

export const addPopularMovies = createAction('[Movie App] add popular movies from server', props<{ popularMovies: Array<Movie> }>())
export const addTopratedMovies = createAction('[Movie App] add top rated movies from server', props<{ topratedMovies: Array<Movie> }>())
export const addUpcomingMovies = createAction('[Movie App] add upcoming movies from server', props<{ upcomingMovies: Array<Movie> }>())
export const addFavourateMovies = createAction('[Movie App] add favourate movies', props<{ favourateMovies: Array<Movie> }>())
export const addFavourateMovie = createAction('[Movie App] add favourate movie', props<{ favourateMovie: Movie }>())
export const removeFavourateMovie = createAction('[Movie App] remove favourate movie', props<{ favourateMovie: Movie }>())
//export const loadTopRatedMovies = createAction('[Movie App] load top rated movies');
//export const loadUpcomingMovies = createAction('[Movie App] load upcoming movies');
//export const loadFavourateMovies = createAction('[Movie App] load pupular movies');
//export const loadAllMovies = createAction('[On Load] Load stored movies');
//export const addPopularMovies = createAction('[On Load] Add popular Movies from server', props<{ movies: MoviesResponse }>());
