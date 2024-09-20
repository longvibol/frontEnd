import { Component } from '@angular/core';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  subjects = ["Java","PHP","C#","Pyton"];

  student = new Student("Dara","dara@gmail.com","Java","Male");
}
