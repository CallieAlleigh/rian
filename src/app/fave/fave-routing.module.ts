import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavePage } from './fave.page';

const routes: Routes = [
  {
    path: '',
    component: FavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavePageRoutingModule {}
