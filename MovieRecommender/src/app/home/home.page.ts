import { Component, OnInit, OnDestroy } from '@angular/core';
import { addPopularMovies, addTopratedMovies, addUpcomingMovies, addFavourateMovies } from '../state/movie.actions'
import { selectAllPopularMovies, selectThreepopularMovies, selectAllTopratedMovies, selectThreeTopratedMovies, selectAllUpcomingMovies, selectThreeUpcomingMovies, selectFavourateMovies, selectThreeFavourateMovies } from '../state/movie.selector'
import { Observable, of } from 'rxjs';
import { Movie } from '../state/movies.model'
import { Store } from '@ngrx/store';
import { MovieService } from '../services/movie.service'
import { Preferences } from '@capacitor/preferences';
import { theMovieDB } from '../../../env';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  /** Popular Movies **/
  popularMovies$: Observable<Array<Movie>>;
  threePopularMovies$: Observable<Array<Movie>>
  popularMoviesCount$: Observable<number>;
  /** Top Rated Movies **/
  topratedMovies$: Observable<Array<Movie>>;
  threeTopratedMovies$: Observable<Array<Movie>>
  topratedMoviesCount$: Observable<number>;
  /** Upcoming Movies **/
  upcomingMovies$: Observable<Array<Movie>>;
  threeUpcomingMovies$: Observable<Array<Movie>>
  upcomingMoviesCount$: Observable<number>;

  favourateMovies$: Observable<Array<Movie>>;
  threeFavourateMovies$: Observable<Array<Movie>>;
  favourateMoviesCount$: Observable<number>;
  /** URLS **/
  private popularMoviesURL: string = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${theMovieDB.key}`;
  private topratedMoviesURL: string = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${theMovieDB.key}`;
  private upcomingMoviesURL: string = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${theMovieDB.key}`;
  
  favMovies: Movie[]

  constructor(private store: Store, private moviesRequest: MovieService) {
    this.onAssignData();

    this.popularMovies$.subscribe((data) => {
      this.popularMoviesCount$ = of(data.length);
      
      if (data.length == 0) {
        this.onMoviesLoad();
        this.onAssignData();
      }
    });

  }

  ngOnInit(): void {
    this.onLoadingFavourateMovies();
  }

  async onLoadingFavourateMovies() {
    const favourateMovies: any = await Preferences.get({ key: 'FavourateMovies' });

    if (favourateMovies.value) {
      this.favMovies = JSON.parse(favourateMovies.value);

      this.store.dispatch(addFavourateMovies({ favourateMovies: this.favMovies }));
    }
  }

  onMoviesLoad() {
    this.loadPopularMoviesFromServer();
    this.loadTopratedMoviesFromServer();
    this.loadUpcommingMoviesFromServer();
  }

  onAssignData() {
    this.popularMovies$ = this.store.select(selectAllPopularMovies);
    this.threePopularMovies$ = this.store.select(selectThreepopularMovies);
    this.topratedMovies$ = this.store.select(selectAllTopratedMovies);
    this.threeTopratedMovies$ = this.store.select(selectThreeTopratedMovies);
    this.upcomingMovies$ = this.store.select(selectAllUpcomingMovies);
    this.threeUpcomingMovies$ = this.store.select(selectThreeUpcomingMovies);
    this.favourateMovies$ = this.store.select(selectFavourateMovies);
    this.threeFavourateMovies$ = this.store.select(selectThreeFavourateMovies);
    this.threeFavourateMovies$.subscribe(
      (data) => {
        try {
          let dataSize = data.length;
          this.favourateMoviesCount$ = of(dataSize);
        } catch (error) {
          this.favourateMoviesCount$ = of(0);
        }
      }
    );
  }

  loadPopularMoviesFromServer() {
    this.moviesRequest.getMovies(this.popularMoviesURL).subscribe(
      (data) => {
        try {
          this.popularMoviesCount$ = of(data.results.length);
          this.store.dispatch(addPopularMovies({ popularMovies: data.results}));
        } catch (error) {
          this.popularMoviesCount$ = of(0);
        }
      }
    );
  }

  loadTopratedMoviesFromServer() {
    this.moviesRequest.getMovies(this.topratedMoviesURL).subscribe(
      (data) => {
         
        try {
          this.topratedMoviesCount$ = of(data.results.length);
          this.store.dispatch(addTopratedMovies({ topratedMovies: data.results}));
        } catch (error) {
          this.topratedMoviesCount$ = of(0);
        }
      }
    );
  }

  loadUpcommingMoviesFromServer() {
    this.moviesRequest.getMovies(this.upcomingMoviesURL).subscribe(
      (data) => {
        
        try {
          this.upcomingMoviesCount$ = of(data.results.length);
          this.store.dispatch(addUpcomingMovies({ upcomingMovies: data.results}));
        } catch (error) {
          this.upcomingMoviesCount$ = of(0);
        }
      }
    );
  }
 
}
