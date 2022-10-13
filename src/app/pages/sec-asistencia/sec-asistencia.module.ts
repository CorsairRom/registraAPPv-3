import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecAsistenciaPageRoutingModule } from './sec-asistencia-routing.module';

import { SecAsistenciaPage } from './sec-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecAsistenciaPageRoutingModule
  ],
  declarations: [SecAsistenciaPage]
})
export class SecAsistenciaPageModule {}
