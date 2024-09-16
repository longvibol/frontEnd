import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() parentData ="";
  @Input("sendGender") gender ="";

  //custom event 
  @Output() myChildEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  age=18;

  sendAge(){
    this.myChildEvent.emit(this.age);
  }

}
