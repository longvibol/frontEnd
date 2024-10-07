import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  
  template: `
  
    <h2 class="success">Welcome to Cambodia</h2>
    <h2 [class]="myClass">Sea game 2023</h2>
    
  `, 
   
  styles: [`

  .success {color:green}
  .danger{color:red}

  `]
 
})

export class TestComponent implements OnInit {

  public name: string = "Dara";
  public locationInfor = window.location.href;
  myId: string = '001'

  myClass = "danger";


  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log("Test from method call")
  }

}
