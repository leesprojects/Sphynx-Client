import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRoutinesComponent } from './routines.component';

describe('RoutinesComponent', () => {
  let component: TrainerRoutinesComponent;
  let fixture: ComponentFixture<TrainerRoutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerRoutinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
