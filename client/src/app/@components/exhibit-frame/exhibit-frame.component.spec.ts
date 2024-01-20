import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitFrameComponent } from './exhibit-frame.component';

describe('ExhibitFrameComponent', () => {
  let component: ExhibitFrameComponent;
  let fixture: ComponentFixture<ExhibitFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExhibitFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
