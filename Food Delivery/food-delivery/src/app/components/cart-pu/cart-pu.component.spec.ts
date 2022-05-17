import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPuComponent } from './cart-pu.component';

describe('CartPuComponent', () => {
  let component: CartPuComponent;
  let fixture: ComponentFixture<CartPuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
