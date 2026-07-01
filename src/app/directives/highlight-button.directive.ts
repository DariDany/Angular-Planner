import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightButton]'
})
export class HighlightButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)');
    this.renderer.setStyle(this.el.nativeElement, "transition", 'transform 0.2s ease')
    this.renderer.setStyle(this.el.nativeElement, "cursor", "pointer")
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.el.nativeElement, "transition", 'transform 0.2s ease')
  }
  
}
