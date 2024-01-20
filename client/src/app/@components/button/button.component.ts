import { CardComponent } from '@Components/card/card.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ButtonVariation = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success' | 'info' | 'light' | 'dark' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variation: ButtonVariation = 'primary';
  @Input() size: ButtonSize = 'small';
  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    this.clickEvent.emit();
  }
}
