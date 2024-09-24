import { AbstractControl } from "@angular/forms";


export function usernameValidator (control :AbstractControl) : {[key:string] : any} | null {

  let resurlt = /admin/.test(control.value);
  if(resurlt){
    return {'forbiddenName': control.value};
  }
  return null;
}