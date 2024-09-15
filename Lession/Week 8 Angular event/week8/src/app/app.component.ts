import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week8';

  name:string="";

  showMessage(){

    this.name ="Thida"

  }

  showInfo(e:any){
    console.log(e);
  }

  show(text:string){
    this.name=text;
  }

  display(control:any){
    this.name = control.id;
  }

}
