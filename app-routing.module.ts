import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';





const routes: Routes = [ 
  
  {path:"app",component:AppComponent},
  {path:"",component:DummyComponent},

  {path:"dummy",component:DummyComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  
  DummyComponent,
 

  AppComponent] 
