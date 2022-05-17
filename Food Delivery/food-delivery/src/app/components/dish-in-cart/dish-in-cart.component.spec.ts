import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishInCartComponent } from './dish-in-cart.component';

describe('DishInCartComponent', () => {
  let component: DishInCartComponent;
  let fixture: ComponentFixture<DishInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishInCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
