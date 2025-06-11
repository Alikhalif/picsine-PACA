import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetedRepairsComponent } from './targeted-repairs.component';

describe('TargetedRepairsComponent', () => {
  let component: TargetedRepairsComponent;
  let fixture: ComponentFixture<TargetedRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetedRepairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetedRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
