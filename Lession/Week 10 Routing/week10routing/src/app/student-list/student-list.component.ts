import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students =[

    {id:1, name:"Dara", gender:"Male"},
    {id:2, name:"Thida", gender:"Female"},
    {id:3, name:"Seyha", gender:"Male"}

  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetail(studentId :number){
    // alert(studentId);

    this.router.navigate(["/detail", studentId]);
    
  }
  

}
