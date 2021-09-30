import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDerective]'
})
export class DropdownDerectiveDirective {

  @HostBinding('class.open')  isopen=false;
  @HostListener('click') toogleOpen()
  {
     this.isopen=!this.isopen;
  }
  constructor() { }
  

}
