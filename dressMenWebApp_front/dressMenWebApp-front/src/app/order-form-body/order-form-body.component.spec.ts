import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormBodyComponent } from './order-form-body.component';

describe('OrderFormBodyComponent', () => {
  let component: OrderFormBodyComponent;
  let fixture: ComponentFixture<OrderFormBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
