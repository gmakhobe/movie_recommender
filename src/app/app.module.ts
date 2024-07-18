import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { popularMoviesReducer, topratedMoviesReducer, upcomingMoviesReducer, favourateMoviesReducer } from './state/movie.reducer'


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, StoreModule.forRoot({ popularMovies: popularMoviesReducer, topratedMovies: topratedMoviesReducer, upcomingMovies: upcomingMoviesReducer, favourateMovie: favourateMoviesReducer})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
