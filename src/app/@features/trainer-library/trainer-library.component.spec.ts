import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerLibraryComponent } from './trainer-library.component';

describe('TrainerLibraryComponent', () => {
  let component: TrainerLibraryComponent;
  let fixture: ComponentFixture<TrainerLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
