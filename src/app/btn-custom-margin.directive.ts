import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnCustomMarginWhenHover]'
})
export class BtnCustomMarginWhenHoverDirective {

  myMargin = "10px";
  @Input() customMargin = "10px"

  @HostListener("mouseenter") myMouseEnter(){
    this.myMargin = this.customMargin;
  }

  @HostListener("mouseout") myMouseOut(){
    this.myMargin = "10px";
  }

  @HostBinding("style.padding") get myPaddingSet(){
    return this.myMargin
  }


  constructor() { }

}
