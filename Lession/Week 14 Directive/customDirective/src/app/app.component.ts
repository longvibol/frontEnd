import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customDirective';

  doMouseEnter(element : HTMLDivElement){  
    element.style.color = "blue";
  }

  doMouseOut(element : HTMLDivElement){
    element.style.color = "red";
  } 

}
