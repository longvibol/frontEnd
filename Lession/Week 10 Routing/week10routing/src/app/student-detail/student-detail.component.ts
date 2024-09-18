import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  studentId! :number;
  constructor(private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get("id");
    this.studentId = parseInt(id || "-1");
  }

}
