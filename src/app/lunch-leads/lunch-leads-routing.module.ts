import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LunchLeadsComponent } from './lunch-leads.component';

const routes: Routes = [
  {
    path: '',
    component: LunchLeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LunchLeadsRoutingModule { }
