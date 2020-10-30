import { Directive, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  open = false;
  dropdownMenu: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.dropdownMenu = this.elementRef.nativeElement.parentElement.querySelector('.dropdown-menu');
  }

  @HostListener('click')
  toggleOpen() {
    if (!this.open) {
      this.renderer.addClass(this.dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
    this.open = !this.open;
  }

  @HostListener('document:click', ['$event'])
  close(event: Event) {
    if (this.open && event.target !== this.elementRef.nativeElement) {
      this.renderer.removeClass(this.dropdownMenu, 'show');
      this.open = false;
    }
  }
}
