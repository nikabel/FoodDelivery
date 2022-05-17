import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePageDishComponent } from './create-page-dish.component';

describe('CreatePageDishComponent', () => {
  let component: CreatePageDishComponent;
  let fixture: ComponentFixture<CreatePageDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePageDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePageDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
