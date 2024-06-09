import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocoLuzComponent } from './foco-luz/foco-luz.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ContactComponent } from './contact/contact.component';
import { HabilityComponent } from './hability/hability.component';



@NgModule({
  declarations: [
    FocoLuzComponent,
    AboutComponent,
    ProyectComponent,
    ContactComponent,
    HabilityComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FocoLuzComponent,
    AboutComponent,
    ProyectComponent,
    ContactComponent,
    HabilityComponent
  ]
})
export class ComponentsModule { }
