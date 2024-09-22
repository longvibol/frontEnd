import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Student } from './model/student';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';


  subjects = ["Java","PHP","C#","Pyton"];

  student = new Student("Dara","dara@gmail.com","Java","Male");


}
