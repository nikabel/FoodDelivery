import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPuComponent } from './completed-pu.component';

describe('CompletedPuComponent', () => {
  let component: CompletedPuComponent;
  let fixture: ComponentFixture<CompletedPuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedPuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
