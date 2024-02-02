import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExhibitComponent } from './grid-exhibit.component';

describe('GridExhibitComponent', () => {
  let component: GridExhibitComponent;
  let fixture: ComponentFixture<GridExhibitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridExhibitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
