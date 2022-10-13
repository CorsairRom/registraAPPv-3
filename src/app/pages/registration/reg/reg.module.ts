import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegPageRoutingModule } from './reg-routing.module';

import { RegPage } from './reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegPage]
})
export class RegPageModule {}
