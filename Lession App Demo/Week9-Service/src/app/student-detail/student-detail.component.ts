import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private _studentService: StudentService) { }

  studentInDetail :any;
  errorMessage :any;

  ngOnInit(): void {

    //this.studentInDetail = this._studentService.getStudents();

    this._studentService.getStudentsV2().subscribe(data =>{

      this.studentInDetail = data;

    },error =>{
      this.errorMessage = error;
    } );

  }

}


