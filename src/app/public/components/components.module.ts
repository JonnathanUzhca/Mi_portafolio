import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocoLuzComponent } from './foco-luz/foco-luz.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FocoLuzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FocoLuzComponent
  ]
})
export class ComponentsModule { }
