import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFlash]'
})
export class FlashDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.animation = 'flashColor 0.3s linear infinite';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.animation = '';
  }



}
