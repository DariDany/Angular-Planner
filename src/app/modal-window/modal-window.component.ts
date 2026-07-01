import { Component, Output, EventEmitter } from '@angular/core';
import { HighlightButtonDirective } from '../directives/highlight-button.directive';

@Component({
  selector: 'app-modal-window',
  imports: [HighlightButtonDirective],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.css'
})
export class ModalWindowComponent {
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal(){
    this.closeModalEvent.emit();
  }
}
