import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSKUComponent } from './add-sku.component';

describe('AddSKUComponent', () => {
  let component: AddSKUComponent;
  let fixture: ComponentFixture<AddSKUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSKUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSKUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
