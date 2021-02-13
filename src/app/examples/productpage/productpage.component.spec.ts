import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductpageComponent } from './productpage.component';

describe('ProductpageComponent', () => {
  let component: ProductpageComponent;
  let fixture: ComponentFixture<ProductpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
