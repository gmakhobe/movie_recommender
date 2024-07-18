import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieFavouratesPageRoutingModule } from './movie-favourates-routing.module';

import { MovieFavouratesPage } from './movie-favourates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieFavouratesPageRoutingModule
  ],
  declarations: [MovieFavouratesPage]
})
export class MovieFavouratesPageModule {}
