import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Student } from './model/student';
import { inject } from '@angular/core/testing';
import { StudentService } from './model/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  subjects = ["Java","PHP","C#","Pyton"];
  student = new Student("Dara","dara@gmail.com","Java","Male"); 

  isValidSubject = false;
  isSubmitted = false;


  selectSubject(subject: string){
    if(subject === ""){
      this.isValidSubject = false;
    }else{
      this.isValidSubject =true;
    }
  }

  constructor(private studentService: StudentService){}

  doSubmit(studentForm : any){
    this.isSubmitted =true;
    console.log("submit work")
    this.studentService.saveStudent(this.student).subscribe(data =>{
      console.log(data);
    }, error => {
      console.log("Something Error")
      console.log(error);
    });

    console.log(studentForm);
  }
}
