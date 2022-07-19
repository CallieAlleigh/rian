import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavePageRoutingModule } from './fave-routing.module';

import { FavePage } from './fave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavePageRoutingModule
  ],
  declarations: [FavePage]
})
export class FavePageModule {}
