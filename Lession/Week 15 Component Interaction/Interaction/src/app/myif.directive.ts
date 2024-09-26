import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective implements OnChanges{

  constructor(private vc:ViewContainerRef, private template: TemplateRef<any>) { }

  @Input() appMyif!: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if(this.appMyif){
      this.vc.createEmbeddedView(this.template);
    }else{
      this.vc.clear();
    }
  }

}
