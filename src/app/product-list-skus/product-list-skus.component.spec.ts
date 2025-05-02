import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSKUsComponent } from './product-list-skus.component';

describe('ProductListSKUsComponent', () => {
  let component: ProductListSKUsComponent;
  let fixture: ComponentFixture<ProductListSKUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListSKUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListSKUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
