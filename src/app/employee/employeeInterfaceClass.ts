export interface IEmployee {
  fullName: string;
  staffNo: string;
  gender: string;
  salary?: string;

}

export class Employee implements IEmployee {

  constructor(
    public fullName: string,
    public staffNo: string,
    public gender: string
  ) {}
}
