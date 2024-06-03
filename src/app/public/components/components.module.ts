import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocoLuzComponent } from './foco-luz/foco-luz.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    FocoLuzComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FocoLuzComponent,
    AboutComponent
  ]
})
export class ComponentsModule { }
