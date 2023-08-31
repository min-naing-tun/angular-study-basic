import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnHover]'
})
export class BtnHoverDirective {

  borderRadius = "0%";
  @HostListener('mouseenter') mousein1(){
    this.borderRadius = "30%";
  }

  @HostBinding('style.border-radius') get setRadius1(){
    return this.borderRadius;
  }

  @HostListener('mouseout') myMouseOut(){
    this.borderRadius = "0%";
  }

  constructor() { }

}
