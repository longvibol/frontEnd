import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  hasError = true;
  isItalic = true;

  myClass = {
    "danger":this.hasError,
    "italic":this.isItalic,
    "text-success": !this.hasError
  }

  myStyle={
    color: 'black',
    fontStyle: 'italic' // use Camel case
  }

  constructor() { }

  ngOnInit(): void {
  }

}
