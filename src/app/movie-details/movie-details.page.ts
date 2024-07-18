import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectFavourateMovies, selectAllPopularMovies, selectAllTopratedMovies, selectAllUpcomingMovies } from '../state/movie.selector';
import { addFavourateMovie, removeFavourateMovie } from '../state/movie.actions';
import { Observable } from 'rxjs';
import { Movie } from '../state/movies.model';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage{
  movieTitle$: any;
  movieOverview$: any;
  movieBackdrop_path$: any;
  movieRelease_date$: any;
  movieVote_average$: any;
  favMovies: any;
  // Observables
  movieSelection$: any;
  isSelectedMovieFavourate$: boolean;
  favourateMovies: Observable<Array<Movie>>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.movieTitle$ = this.activatedRoute.snapshot.paramMap.get('title');
    this.movieOverview$ = this.activatedRoute.snapshot.paramMap.get('overview');
    this.movieBackdrop_path$ = this.activatedRoute.snapshot.paramMap.get('backdrop_path');
    this.movieRelease_date$ = this.activatedRoute.snapshot.paramMap.get('release_date');
    this.movieVote_average$ = this.activatedRoute.snapshot.paramMap.get('vote_average');

    this.onSetup();
    this.onIsMovieFavourate();
  }

  onSetup() {

    this.store.select(selectAllPopularMovies).subscribe(
      (movies) => {
        let moviesSelection: any;

        moviesSelection = movies.find((movie) => movie.title == this.movieTitle$ && movie.release_date == this.movieRelease_date$);

        if (moviesSelection != undefined) {
          this.movieSelection$ = moviesSelection;
        }
      }
    );

    if (this.movieSelection$ === undefined) {
      this.store.select(selectAllTopratedMovies).subscribe(
        (movies) => {
          this.movieSelection$ = movies.find((movie) => movie.title == this.movieTitle$ && movie.release_date == this.movieRelease_date$);
        }
      );
    }

    if (this.movieSelection$ === undefined) {
      this.store.select(selectAllUpcomingMovies).subscribe(
        (movies) => {
          this.movieSelection$ = movies.find((movie) => movie.title == this.movieTitle$ && movie.release_date == this.movieRelease_date$);
        }
      );
    }

    this.favourateMovies = this.store.select(selectFavourateMovies);
  }

  onIsMovieFavourate() {
    this.favourateMovies.subscribe(
      (movies) => {
        let currentMovieSelection = movies.find((movie) => movie.title == this.movieSelection$.title && movie.release_date == this.movieSelection$.release_date);

        this.isSelectedMovieFavourate$ = (currentMovieSelection == undefined ? false : true);
        console.log("Current Movie Selection: ", currentMovieSelection); 
      }
    );
  }

  async addToFavourates() {
    this.store.dispatch(addFavourateMovie({ favourateMovie: this.movieSelection$}))
    this.isSelectedMovieFavourate$ = true;

    this.store.select(selectFavourateMovies).subscribe(
      async (movies) => {
        this.favMovies = JSON.stringify(movies)
      }
    );

    await Preferences.set({
      key: 'FavourateMovies',
      value: this.favMovies,
    });

  }

  async removeFromFavourates() {
    this.store.dispatch(removeFavourateMovie({ favourateMovie: this.movieSelection$}))
    this.isSelectedMovieFavourate$ = false;

    this.store.select(selectFavourateMovies).subscribe(
      async (movies) => {
        this.favMovies = JSON.stringify(movies)
      }
    );

    await Preferences.set({
      key: 'FavourateMovies',
      value: this.favMovies,
    });
  }

}
