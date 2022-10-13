import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarQrPage } from './generar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarQrPageRoutingModule {}
