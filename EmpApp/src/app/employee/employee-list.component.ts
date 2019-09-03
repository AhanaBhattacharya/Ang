import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees;
  constructor(private empService:EmployeeService,private route:Router) { }

  ngOnInit() {
    this.employees=this.empService.getEmployees();
  }
  deleteEmployee(code)
  {
    this.empService.deleteEmployee(code);
    this.employees=this.empService.getEmployees();
  }
  navi()
  {
   
  
     this.route.navigate(['/update']);
    }

}
