import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsPuComponent } from './order-details-pu.component';

describe('OrderDetailsPuComponent', () => {
  let component: OrderDetailsPuComponent;
  let fixture: ComponentFixture<OrderDetailsPuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsPuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
