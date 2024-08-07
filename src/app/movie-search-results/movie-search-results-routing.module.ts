import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieSearchResultsPage } from './movie-search-results.page';

const routes: Routes = [
  {
    path: '',
    component: MovieSearchResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieSearchResultsPageRoutingModule {}
