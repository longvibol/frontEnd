import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild (ChildComponent) childRef!: ChildComponent;

  greeting(){
    console.log('Hello From parent!')
  }
    
  


}
