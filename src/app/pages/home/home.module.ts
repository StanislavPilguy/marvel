import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ComponentsModule} from '../../components/components.module';




@NgModule({
  declarations: [HomeComponent],
  exports: [

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
  ]
})
export class HomeModule { }
