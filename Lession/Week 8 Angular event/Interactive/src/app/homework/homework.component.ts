import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  text ="Send Text"

  @Output() myChildEvent = new EventEmitter();

  sendText(){
    this.myChildEvent.emit(this.text);
  }

}
