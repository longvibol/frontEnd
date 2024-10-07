import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  name:string = "Dara";

  text ="welcome to cambodia";

  student ={name:"Dara",gender:"Female",age:21};

  dob = new Date();

  myNumber = 6.47;

  constructor() { }

  ngOnInit(): void {
  }

}
