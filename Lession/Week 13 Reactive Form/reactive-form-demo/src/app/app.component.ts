import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form-demo';

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    username : ['',[Validators.required, Validators.minLength(3)]],
    pwe : [''],
    confirmPwd : [''],
    address : this.fb.group({

      province : [''],
      district : [''],
      commune  : ['']

    })
  });



  // registrationForm = new FormGroup({

  //   username : new FormControl,
  //   pwd : new FormControl,
  //   confirmPwd : new FormControl,

  //   address : new FormGroup({

  //     province : new FormControl,
  //     district : new FormControl,
  //     commune : new FormControl,

  //   })

  // });

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
