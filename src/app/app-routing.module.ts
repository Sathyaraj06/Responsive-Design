import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './tab-component/a-component/a-component.component';
import { BComponent } from './tab-component/b-component/b-component.component';
import { CComponent } from './tab-component/c-component/c-component.component';
import { DComponent } from './tab-component/d-component/d-component.component';


const routes: Routes = [
  { path : 'siparis', component : AComponent},
  { path : 'biliger', component : BComponent},
  {path : 'yenek' , component : CComponent},
  { path : 'yorumalar', component :DComponent},
  { path:'' , redirectTo:'siparis', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
