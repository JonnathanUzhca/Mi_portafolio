import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocoLuzComponent } from './foco-luz/foco-luz.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    FocoLuzComponent,
    AboutComponent,
    ProyectComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FocoLuzComponent,
    AboutComponent,
    ProyectComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
