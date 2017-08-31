import { Directive, ElementRef } from '@angular/core';
declare var jQuery:any;
@Directive({
  selector: '[appCustomSelect]'
})
export class CustomSelectDirective {

  constructor(el:ElementRef) {
    jQuery(el.nativeElement).select2();
   }
   
}
