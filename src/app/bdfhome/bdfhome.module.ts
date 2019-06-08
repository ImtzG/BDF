import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BDFHomePage } from './bdfhome.page';
import { BDFRoutingModule } from './bdfhome-routing.module'


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BDFRoutingModule
  ],
  declarations: [BDFHomePage]
})
export class BDFHomePageModule {}
