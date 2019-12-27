import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  public employeeTiles = [
    {text: 'View All Employees', cols: 1, rows: 1},
    {text: 'View Unassigned Employees', cols: 1, rows: 1},
    {text: 'View All Archived Employees', cols: 1, rows: 1},
  ];

  public lunchLeadTiles = [
    {text: 'View Monthly Lunch Lead Reports', cols: 1, rows: 1},
    {text: 'View All Lunch Lead Reports', cols: 1, rows: 1},
    {text: 'Enter Lunch Lead Report', cols: 1, rows: 1},
  ];

  ngOnInit() {}

}
