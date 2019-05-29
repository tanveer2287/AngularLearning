import { Injectable } from '@angular/core';
import {IEmployee} from './employeeInterfaceClass';

@Injectable()
export class EmployeeService {

  getEmployees(): IEmployee[]{
      return [
      { fullName: 'Tanveer Shaikh', staffNo: '1',gender:'Male' },
      { fullName: 'Nasrin Shaikh', staffNo: '2', gender: 'Female'},
      { fullName: 'Shahraan Shaikh', staffNo: '3', gender: 'Male' },
      { fullName: 'parveen Shaikh', staffNo: '4', gender: 'Female' },
      { fullName: 'Shahid Shaikh', staffNo: '4', gender: 'Male' },
      { fullName: 'Shahid Shaikh', staffNo: '4', gender: 'Male' }
    ];

  }
}
