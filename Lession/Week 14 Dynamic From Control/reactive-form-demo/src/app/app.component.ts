import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usernameValidator, usernameValidator2 } from './command/username.validatio';
import { passwordValidator } from './command/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive-form-demo';
  registrationForm! : FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      username : ['',[Validators.required, Validators.minLength(3), usernameValidator2(/admin/)]],
      pwd : [''],
      confirmPwd : [''],
      phone:[],
      alternativePhones : this.fb.array([]),
      address : this.fb.group({
  
        province : [''],
        district : [''],
        commune  : ['']
      }),
      email :[''],
      subscribe : ['']
    },{validator: passwordValidator});  

    this.registrationForm.get('subscribe')?.valueChanges.subscribe(value =>{
      console.log(value);
      if(value){
        this.email?.setValidators(Validators.required);      
      }else{
        this.email?.clearValidators();
      }
      this.email?.updateValueAndValidity;
    });
  }

  addPhone(){
    this.alternativePhones.push(this.fb.control(''));
    console.log(this.alternativePhones);

  }

  get alternativePhones(){
    return this.registrationForm.get('alternativePhones') as FormArray;
  }

  get username(){
    return this.registrationForm.get('username');
  }

  get email(){
    return this.registrationForm.get('email');
  }


  get confirmPwd(){
    return this.registrationForm.get('confirmPwd');
  }

  setTheValue(){

  }  

  issubmit = true;

  submit(){
    this.issubmit = false;
    console.log(this.issubmit);
    this.registrationForm.patchValue({
      username : '',
      pwd : '',
      confirmPwd : '',
      address : {
        province : '',
        district : '',
        commune : ''
      }
    });
  }

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
