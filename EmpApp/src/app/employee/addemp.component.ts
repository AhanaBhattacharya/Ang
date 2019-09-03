import { Component, OnInit, ViewChild, NgModule, Input } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import{Router} from '@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AddEmployeeCanDeactiveService } from './add-employee-can-deactive.service';
import { $ } from '../../../node_modules/protractor';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  [x: string]: any;


@ViewChild('userForm',{static:false})
public createEmployeeForm:NgForm
constructor(private empservice:EmployeeService,private route:Router) { }
@ViewChild('nameRef',{static:false})
//public hello:NgModule
ngOnInit() {
}
  onSubmit(employee:Employee)
  {
   
    this.empservice.addemployee(employee);
     this.route.navigate(['/employees']);
    }
    

  

}
