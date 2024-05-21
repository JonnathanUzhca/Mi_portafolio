import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erro500Component } from './shared/erro500/erro500.component';
import { Erro404Component } from './shared/erro404/erro404.component';
import { QuicklinkStrategy } from "ngx-quicklink";
import { PublicRoutingModule } from './public/public-routing.module';

const routes: Routes = [
  { path: "error ", component:Erro500Component },
  { path: "notFoud" , component:Erro404Component },
  { path: "**" , redirectTo: "notFound", pathMatch: "full"  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true ,
        preloadingStrategy: QuicklinkStrategy,
        enableTracing: false,
        paramsInheritanceStrategy: "always",
  }),
  PublicRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
