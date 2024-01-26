import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFrameComponent } from './feature-frame.component';

describe('FeatureFrameComponent', () => {
  let component: FeatureFrameComponent;
  let fixture: ComponentFixture<FeatureFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
