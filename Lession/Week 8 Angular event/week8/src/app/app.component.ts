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
    // alert(this.name);

    this.name ="Thida"

  }

}
