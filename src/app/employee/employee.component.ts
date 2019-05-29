import { Component } from '@angular/core';

@Component({

    selector: 'employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss']
})
export class EmployeeComponent {
  firstName:string = "Tanveer";
  lastName: string = "Shaikh";
}
