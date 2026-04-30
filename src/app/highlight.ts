import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
 rang = input<string>('yellow');
 constructor(private el: ElementRef) {}
 @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.rang();
    this.el.nativeElement.style.transition = '0.3s'; // Chiroyli sekin yonishi uchun
    this.el.nativeElement.style.padding = '5px';
    this.el.nativeElement.style.borderRadius = '4px';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = ''; // Rangsiz holatga qaytaramiz
    this.el.nativeElement.style.padding = '0';
  }
}
