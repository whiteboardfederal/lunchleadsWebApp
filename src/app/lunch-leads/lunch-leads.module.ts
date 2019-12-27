import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { LunchLeadsRoutingModule } from './lunch-leads-routing.module';
import { LunchLeadsComponent } from './lunch-leads.component';

@NgModule({
  imports: [CommonModule, MatTableModule, LunchLeadsRoutingModule],
  declarations: [LunchLeadsComponent]
})
export class LunchLeadsModule {}
