import { Injectable } from '@angular/core';
import {IEmployee} from './employeeInterfaceClass';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
@Injectable()
export class EmployeeService {


  constructor(private _http : HttpClient) {  }


  getEmployees(): Observable<IEmployee[]> {

    return  this._http.get<IEmployee[]>('http://localhost:54693/api/Login/GetEmployees');

    //.map( (response: Response) => <IEmployee[]> response.json());
        //return this.httpClient.get<Item[]>(this.itemUrl);
    //   return [
    //   { fullName: 'Tanveer Shaikh', staffNo: '1',gender:'Male' },
    //   { fullName: 'Nasrin Shaikh', staffNo: '2', gender: 'Female'},
    //   { fullName: 'Shahraan Shaikh', staffNo: '3', gender: 'Male' },
    //   { fullName: 'parveen Shaikh', staffNo: '4', gender: 'Female' },
    //   { fullName: 'Shahid Shaikh', staffNo: '4', gender: 'Male' },
    //   { fullName: 'Shahid Shaikh', staffNo: '4', gender: 'Male' }
    // ];

  }
}
