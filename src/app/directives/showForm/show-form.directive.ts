import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowForm]'
})
export class ShowFormDirective {

  constructor(private el: ElementRef) { }

  @Input('appShowForm') changeStyle: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.changeStyle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

  private changeColor(dropColor: string) {
    this.el.nativeElement.style.backgroundColor = dropColor;
  }

}
