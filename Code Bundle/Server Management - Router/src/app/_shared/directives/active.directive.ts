import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) { }

  @HostListener('click')
  mouseClick() {
    this.elementRef.nativeElement.parentElement.parentElement.querySelectorAll('.nav-link').forEach((e) => {
      this.renderer.removeClass(e, 'active');
    });
    this.renderer.addClass(this.elementRef.nativeElement, 'active');
  }

}
