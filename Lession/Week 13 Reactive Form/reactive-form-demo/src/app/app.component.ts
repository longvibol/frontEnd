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
    confirmPwd : new FormControl,

    address : new FormGroup({

      province : new FormControl,
      district : new FormControl,
      commune : new FormControl,

    })

  });

  setValue(){
    this.registrationForm.patchValue({
      username : 'Thida',
      pwd : 't',
      confirmPwd : 't',
      address : {
        province : 'PP',
        district : 'BKK',
        commune : 'bkk1'
      }
    });
  }
}
