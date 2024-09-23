import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form-demo';

  registrationForm = new FormGroup({

    username : new FormControl,
    pwd : new FormControl,
    confirmPwd : new FormControl
  });

  test(){
    this.registrationForm.value;
  }

}
