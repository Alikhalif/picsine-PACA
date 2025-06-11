import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgencyBarComponent } from './urgency-bar.component';

describe('UrgencyBarComponent', () => {
  let component: UrgencyBarComponent;
  let fixture: ComponentFixture<UrgencyBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrgencyBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgencyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
