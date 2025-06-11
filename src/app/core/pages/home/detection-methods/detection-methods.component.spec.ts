import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionMethodsComponent } from './detection-methods.component';

describe('DetectionMethodsComponent', () => {
  let component: DetectionMethodsComponent;
  let fixture: ComponentFixture<DetectionMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectionMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectionMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
