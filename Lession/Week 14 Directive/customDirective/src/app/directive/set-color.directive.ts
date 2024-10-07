import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective implements OnInit{
  @Input() hcolor!: string;
  @Input() oColor!:string;
  @Input() defaultcolor!: string;

  // we inject the element ElementRef
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.color= this.defaultcolor;
  }

  @HostListener('mouseover')
  doMouseEnter(){
    this.element.nativeElement.style.color = this.hcolor; 
  }

  @HostListener('mouseout')
  doMouseOut(){    
    this.element.nativeElement.style.color = this.oColor;
  }

}
