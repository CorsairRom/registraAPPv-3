import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccionPage } from './seccion.page';

const routes: Routes = [
  {
    path: '',
    component: SeccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionPageRoutingModule {}
