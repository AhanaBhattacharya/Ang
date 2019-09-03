import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employeedelete',
  templateUrl: './employeedelete.component.html',
  styleUrls: ['./employeedelete.component.css']
})
export class EmployeedeleteComponent implements OnInit {

  constructor(private empserv:EmployeeService) { }

  ngOnInit() {
  }

    
}
