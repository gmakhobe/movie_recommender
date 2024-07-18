import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllPopularMovies, selectAllTopratedMovies, selectAllUpcomingMovies, selectFavourateMovies } from '../state/movie.selector'
import { Movie } from '../state/movies.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-search-results',
  templateUrl: './movie-search-results.page.html',
  styleUrls: ['./movie-search-results.page.scss'],
})
export class MovieSearchResultsPage implements OnInit {
  referer$: any;
  private refererTypes = {
    "search": 0,
    "popularMovies": 1,
    "topRatedMovies": 2,
    "upcomingMovies": 3,
    "favourateMovies": 4
  };
  pageTitle$: string;
  moviesList$: Observable<Array<Movie>>;
  favourateMovies: any;
  newMovieList$: any;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.referer$ = this.activatedRoute.snapshot.paramMap.get('referer');

    this.onSetpUp();
  }

  onSetpUp() {

    if (this.referer$ == this.refererTypes.search) {

    } else if (this.referer$ == this.refererTypes.popularMovies) {
      this.moviesList$ = this.store.select(selectAllPopularMovies);
      this.pageTitle$ = "Popular Movies";
    } else if (this.referer$ == this.refererTypes.topRatedMovies) {
      this.moviesList$ = this.store.select(selectAllTopratedMovies);
      this.pageTitle$ = "Top Rated Movies";
    } else if (this.referer$ == this.refererTypes.upcomingMovies) {
      this.moviesList$ = this.store.select(selectAllUpcomingMovies);
      this.pageTitle$ = "Upcoming Movies";
    } else if (this.referer$ == this.refererTypes.favourateMovies) {
      this.moviesList$ = this.store.select(selectFavourateMovies);
      this.pageTitle$ = "Favourate Movies";
    }

    this.store.select(selectFavourateMovies).subscribe(
      (movies) => {
        this.favourateMovies = movies;
      }
    );
    this.moviesList$.subscribe(
      (movies) => {
        
        this.newMovieList$ = movies.map((movie) => {
          let favourateMovieIndex = this.favourateMovies.findIndex((obj: any) => obj.title === movie.title && obj.release_date == movie.release_date);
          console.log("Returned value:", favourateMovieIndex);
          if (favourateMovieIndex >= 0) {
            if (movie.title == this.favourateMovies[favourateMovieIndex].title && movie.release_date == this.favourateMovies[favourateMovieIndex].release_date) {
              return { ...movie, isFavourate: true }
            }
          }
          return { ...movie, isFavourate: false }
        });

        console.log("Fav movies:", this.favourateMovies);
        console.log("Movies:", movies);
      }
    );
  }

  onPopularMovies() {

  }

}
