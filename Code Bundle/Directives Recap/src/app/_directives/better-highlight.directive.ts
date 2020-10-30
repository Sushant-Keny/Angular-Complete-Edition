import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'lightblue';
  // @Input('appBetterHighlight') highlightColor = 'lightblue';
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover')
  mouseOver(event: Event) {
    // Using Renderer2
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');

    // Using HostBinding
    // this.backgroundColor = 'lightblue';

    // Dynamic HostBinding
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseLeave(event: Event) {
    // Using Renderer2
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

    // Using HostBinding
    // this.backgroundColor = 'transparent';

    // Dynamic HostBinding
    this.backgroundColor = this.defaultColor;
  }

}
