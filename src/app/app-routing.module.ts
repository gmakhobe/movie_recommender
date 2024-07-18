import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'movie-details/:title/:overview/:backdrop_path/:release_date/:vote_average',
    loadChildren: () => import('./movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'movie-search-results/:referer',
    loadChildren: () => import('./movie-search-results/movie-search-results.module').then( m => m.MovieSearchResultsPageModule)
  },
  {
    path: 'movie-favourates',
    loadChildren: () => import('./movie-favourates/movie-favourates.module').then( m => m.MovieFavouratesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
