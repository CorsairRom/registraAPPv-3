import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecAsistenciaPage } from './sec-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: SecAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecAsistenciaPageRoutingModule {}
