import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesTableComponent } from './exercises-table.component';

describe('ExercisesTableComponent', () => {
  let component: ExercisesTableComponent;
  let fixture: ComponentFixture<ExercisesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExercisesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
