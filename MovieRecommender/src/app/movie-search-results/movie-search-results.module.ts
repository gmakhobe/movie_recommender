import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieSearchResultsPageRoutingModule } from './movie-search-results-routing.module';

import { MovieSearchResultsPage } from './movie-search-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieSearchResultsPageRoutingModule
  ],
  declarations: [MovieSearchResultsPage]
})
export class MovieSearchResultsPageModule {}
