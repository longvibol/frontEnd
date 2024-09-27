import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name ="Dara";

  showGreeting(){
    console.log("Hello From Child Component")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
