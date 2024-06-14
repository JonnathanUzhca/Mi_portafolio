import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Erro404Component } from './erro404/erro404.component';
import { Erro500Component } from './erro500/erro500.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SwiperModule } from "swiper/angular";



@NgModule({
  declarations: [
    Erro404Component,
    Erro500Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports:[
    Erro404Component,
    Erro500Component,
    FooterComponent
  ]
})
export class SharedModule { }
