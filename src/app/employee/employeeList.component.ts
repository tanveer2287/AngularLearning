import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employeeInterfaceClass';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'employeeList.html',
    providers:[EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];

    selectedRbGender: string = 'All';


    constructor(private _employeeService: EmployeeService) {

        // this.employees = [
        //     { fullName: 'Tanveer Shaikh', staffNo: '1',gender:'Male' },
        //     { fullName: 'Nasrin Shaikh', staffNo: '2', gender: 'Female'},
        //     { fullName: 'Shahraan Shaikh', staffNo: '3', gender: 'Male' },
        //     { fullName: 'parveen Shaikh', staffNo: '4', gender: 'Female' },
        //     { fullName: 'Shahid Shaikh', staffNo: '4', gender: 'Male' },
        //     { fullName: 'Shahid Shaikh', staffNo: '4', gender: 'Male' }
        // ];

    }
    ngOnInit()
    {
      this.employees= this._employeeService.getEmployees();
    }



    trackByStaffNo(index: number, employee: any): string {
        return employee.staffNo;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFeMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    onEmployeeCountRbChange(selectedValue: string): void {
        this.selectedRbGender = selectedValue;
        console.log('selectedRbGender='+ this.selectedRbGender);
    }

}
