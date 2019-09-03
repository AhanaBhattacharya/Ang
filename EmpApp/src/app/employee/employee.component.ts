import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './employee.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees                                                                                                                                                                                                                                                                                                                                                           ;
  emmp
  CODE
  NAME
  SALARY
  DOB
  GENDER
  constructor(private empservice:EmployeeService,private activatedRoute:ActivatedRoute,private router:Router) { 

  }

  ngOnInit() {
    let code:string=this.activatedRoute.snapshot.params["id"];
    this.employees=this.empservice.getEmployees().find(emp=>emp.code===code);
    
}



navigate()
{
  this.router.navigate(["/employees"]);
}
subname(nam)
{
  if(confirm("do you want to update?"))
  {
  this.emmp=this.empservice.getEmployees().find(emp=>emp.name==nam)
  this.emmp.name=this.NAME;
  }
}
subdob(nam)
{
  if(confirm("do you want to update?"))
  {
  this.emmp=this.empservice.getEmployees().find(emp=>emp.dateOfBirth==nam) 
  this.emmp.dateOfBirth=this.DOB;
  }
}
 
subbcode(nam)
{
  if(confirm("do you want to update?"))
  {
  this.emmp=this.empservice.getEmployees().find(emp=>emp.code==nam) 
  this.emmp.code=this.CODE;
  }

  
}
subbgender(nam)
{
  if(confirm("do you want to update?"))
  {
  this.emmp=this.empservice.getEmployees().find(emp=>emp.gender==nam)
  this.emmp.gender=this.GENDER;
  }
}

subsalary(nam)
{
  if(confirm("do you want to update?"))
  {
  this.emmp=this.empservice.getEmployees().find(emp=>emp.annualSalary==nam)
  this.emmp.annualSalary=this.SALARY;
  }
}
}



