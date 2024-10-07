import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  @Output() childEvent = new EventEmitter();

  name ="Dara";

  callParentGreeting(){
    this.childEvent.emit();
  }

}
