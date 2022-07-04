import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationPageRoutingModule } from './formation-routing.module';

import { FormationPage } from './formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormationPageRoutingModule
  ],
  declarations: [FormationPage]
})
export class FormationPageModule {}
