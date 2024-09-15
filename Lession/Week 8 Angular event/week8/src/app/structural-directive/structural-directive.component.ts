import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  color ="yellow";

  colors =["red","blue","yellow","black"];


  isCambodia = false;

  constructor() { }

  ngOnInit(): void {
  }

  showText(){
    this.isCambodia =!this.isCambodia;
  }

}
