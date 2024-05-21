import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Erro404Component } from './erro404/erro404.component';
import { Erro500Component } from './erro500/erro500.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Erro404Component,
    Erro500Component
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    Erro404Component
  ]
})
export class SharedModule { }
