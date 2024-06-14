import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocoLuzComponent } from './foco-luz/foco-luz.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ContactComponent } from './contact/contact.component';
import { HabilityComponent } from './hability/hability.component';
import { CompetencesComponent } from './competences/competences.component';
import { ReferencesComponent } from './references/references.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FocoLuzComponent,
    AboutComponent,
    ProyectComponent,
    ContactComponent,
    HabilityComponent,
    CompetencesComponent,
    ReferencesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    FocoLuzComponent,
    AboutComponent,
    ProyectComponent,
    ContactComponent,
    HabilityComponent,
    CompetencesComponent,
    ReferencesComponent
  ]
})
export class ComponentsModule { }
