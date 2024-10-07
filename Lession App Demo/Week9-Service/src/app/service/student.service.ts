import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(){

    let students =[

      {name:"Dara",gender:"male",age:23},
      {name:"Thida",gender:"Female",age:18},
      {name:"Tola",gender:"male",age:22},
      {name:"Kim",gender:"male",age:14},
      {name:"Socheata",gender:"Female",age:24}
  
    ];  
  
  return students;
  
  }

  url ="/assets/data/students.json";

  getStudentsV2(): Observable<any[]>{

    return this.http.get<any[]>(this.url).pipe(catchError(this.handleError))

  }

  handleError(error : HttpErrorResponse){

    let errorMessage = error.message || "Error from server";

    return throwError(errorMessage);

  }

}
