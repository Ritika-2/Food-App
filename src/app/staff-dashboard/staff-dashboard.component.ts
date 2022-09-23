import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  createOrder(){
    this.route.navigate(["create-orders"])
  }

  viewOrder(){
    this.route.navigate(["/view-orders"])
  }

}
