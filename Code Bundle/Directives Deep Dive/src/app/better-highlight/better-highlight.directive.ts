import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = '#7474dd';

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.cursor') cursor = 'pointer';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseOver(event: Event) {
    // Using Renderer
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#7474dd');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');

    // Using Host Binding
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseLeave(event: Event) {
    // Using Renderer
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');

    // Using Host Binding
    this.backgroundColor = this.defaultColor;
  }
}
