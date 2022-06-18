import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MecanicoPage } from './mecanico.page';

const routes: Routes = [
  {
    path: '',
    component: MecanicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MecanicoPageRoutingModule {}
