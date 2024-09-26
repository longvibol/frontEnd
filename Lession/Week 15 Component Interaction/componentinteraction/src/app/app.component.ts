import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  login=false;
  title = 'componentinteraction';
  imagePath ='assets/images.jpeg';
  count=0;
  name="";
  username="";
  private _myname="";

  @ViewChild('usernameRef') usernameTextField!: ElementRef;

  ngAfterViewInit(): void {
    //this.usernameTextField.nativeElement.focus();
  }

  // get myname(){
  //   return this._myname;
  // }

  set myname(value :string){
    this._myname = value;
    if(this._myname ==="vibol"){
      alert("Welcome Piseth");
    }
  }

  doCheckname(value: string){
    console.log("work correctly");
    this.username = value;

    if(value ==="vibol"){
      alert("Hello"+value);
    }
  }

  doCound(){
    this.count++;
  }
}
