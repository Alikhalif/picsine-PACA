import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingDiagnosticComponent } from './pricing-diagnostic.component';

describe('PricingDiagnosticComponent', () => {
  let component: PricingDiagnosticComponent;
  let fixture: ComponentFixture<PricingDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingDiagnosticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
