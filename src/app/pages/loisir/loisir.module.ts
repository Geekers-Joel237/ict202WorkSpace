import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoisirPageRoutingModule } from './loisir-routing.module';

import { LoisirPage } from './loisir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoisirPageRoutingModule
  ],
  declarations: [LoisirPage]
})
export class LoisirPageModule {}
