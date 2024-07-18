import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../state/movies.model'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(webserverURL: string) {
    return this.http.get<{ results: Movie[] }>(
      webserverURL
    );
  }
}
