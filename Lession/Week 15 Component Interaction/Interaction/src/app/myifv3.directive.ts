import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyifv3]'
})
export class Myifv3Directive {

  constructor(private vc:ViewContainerRef, private template:TemplateRef<any>) { }

  @Input() set appMyifv3(value:boolean){
  
    if(value){
      this.vc.createEmbeddedView(this.template);
    }else{
      this.vc.clear();
    }
  }

}
