import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExhibitComponent } from './button-exhibit.component';

describe('ButtonExhibitComponent', () => {
  let component: ButtonExhibitComponent;
  let fixture: ComponentFixture<ButtonExhibitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonExhibitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
