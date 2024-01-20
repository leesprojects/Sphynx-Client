import { Component, Input, OnInit } from '@angular/core';

export type CardPadding = 'standard' | 'compact' | 'comfortable';
export type CardBorderStyle = 'standard' | 'shadow' | 'borderless';
export type CardFlexDirection = 'row' | 'column';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() padding: CardPadding = 'standard';
  @Input() borderStyle: CardBorderStyle = 'standard';
  @Input() flexDirection: CardFlexDirection = 'column';

  ngOnInit(): void {

  }
}
