import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, "box-shadow", "5px 5px 10px rgba(84, 40, 12, 0.7)");
    this.renderer.setStyle(this.el.nativeElement, "cursor", "pointer");
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, "box-shadow", "5px 5px 5px rgba(84, 40, 12, 0.7)");
  }
}
