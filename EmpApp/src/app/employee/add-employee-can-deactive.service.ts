import { Injectable } from '@angular/core';
import { CanDeactivate } from '../../../node_modules/@angular/router';
import { AddempComponent } from './addemp.component';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeCanDeactiveService implements CanDeactivate<AddempComponent>{
 canDeactivate(component:AddempComponent): boolean{
 if(component.createEmployeeForm.dirty){
 return confirm("Are you sure you want to discard the Data(Y/N)?")
 }
  return true;
 }
 
  constructor() { }
}
