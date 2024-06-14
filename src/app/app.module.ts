import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { IsLoadingModule } from '@service-work/is-loading';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// import { SliderComponent } from './slider/slider.component';
// import { SwiperModule } from 'swiper/types';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    SharedModule,
    IsLoadingModule,
    MatProgressBarModule,
    HttpClientModule,
    SwiperModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
