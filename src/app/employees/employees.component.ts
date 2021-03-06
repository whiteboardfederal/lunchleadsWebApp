import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public dataSource: any = new MatTableDataSource<any>([]);
  public hasLoaded = false;
  public columnsToDisplay = [
    'id',
    'firstName',
    'lastName',
    'startDate',
    'roleId',
    'managerId',
    'isArchived',
    'email',
    'personalPhoneNumber',
    'onSitePhoneNumber',
    'contractId',
    'locationId',
    'creationDate'
  ];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.fetchEmployees().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
