import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {

  message!:string;
  @Input() isLogin!: boolean;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    let logInChange = changes['isLogin'];
    if (logInChange.currentValue){
      this.message = "Welcome Vibol";
    }else{
      this.message ="Please Log In"
    }
  }

  // private _loggedIn!: boolean;
  // get isLogin(){
  //   return this._loggedIn;
  // }

  // @Input()
  // set isLogin(value: boolean){
  //   if(value){
  //     this.message ="Hello Vibol";
  //   }else{
  //     this.message ="Please Login";
  //   }
  // }





  // ngOnInit(): void {
  // }

}
