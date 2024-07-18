import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
