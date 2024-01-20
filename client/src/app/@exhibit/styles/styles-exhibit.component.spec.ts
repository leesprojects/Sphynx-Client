import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesExhibitComponent } from './styles-exhibit.component';

describe('StylesExhibitComponent', () => {
  let component: StylesExhibitComponent;
  let fixture: ComponentFixture<StylesExhibitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylesExhibitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylesExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
