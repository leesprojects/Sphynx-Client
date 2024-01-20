import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExhibitComponent } from './card-exhibit.component';

describe('CardexhibitComponent', () => {
  let component: CardExhibitComponent;
  let fixture: ComponentFixture<CardExhibitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExhibitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
