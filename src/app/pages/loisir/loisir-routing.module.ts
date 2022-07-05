import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoisirPage } from './loisir.page';

const routes: Routes = [
  {
    path: '',
    component: LoisirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoisirPageRoutingModule {}
