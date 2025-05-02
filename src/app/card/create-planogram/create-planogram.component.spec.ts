import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanogramComponent } from './create-planogram.component';

describe('CreatePlanogramComponent', () => {
  let component: CreatePlanogramComponent;
  let fixture: ComponentFixture<CreatePlanogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlanogramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlanogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
