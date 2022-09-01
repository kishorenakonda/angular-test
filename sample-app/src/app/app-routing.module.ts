import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialTableComponent } from './material-table/material-table.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'table',
    component: MaterialTableComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
