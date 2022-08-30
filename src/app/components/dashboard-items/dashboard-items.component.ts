import { Component, OnInit } from '@angular/core';
import { DASHBOARD_LIST } from '../../dashboard-lists';
import { DashboardList } from '../../dash-list';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './dashboard-items.component.html',
  styleUrls: ['./dashboard-items.component.css'],
})
export class DashboardItemsComponent implements OnInit {
  dashList: DashboardList[] = DASHBOARD_LIST;
  constructor() {}

  ngOnInit(): void {}
}
