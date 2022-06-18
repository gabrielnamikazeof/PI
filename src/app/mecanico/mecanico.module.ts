import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MecanicoPageRoutingModule } from './mecanico-routing.module';

import { MecanicoPage } from './mecanico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MecanicoPageRoutingModule
  ],
  declarations: [MecanicoPage]
})
export class MecanicoPageModule {}
