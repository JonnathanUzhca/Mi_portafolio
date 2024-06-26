import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
   path: "",
   component: PublicComponent,
   children : [
    {
      path:"",
      loadChildren : () =>
        import("./pages/home/home.module").then((m) => m.HomeModule)
    },
    {
      path:"aboutMe",
      loadChildren : () => 
        import('./pages/about-me/about-me.module').then((m) => m.AboutMeModule)
    }
   ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
