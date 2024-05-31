import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components.module';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PublicModule { }
