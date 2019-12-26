import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { EmployeeRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [CommonModule, MatTableModule, EmployeeRoutingModule],
  declarations: [EmployeesComponent]
})
export class EmployeesModule {}
