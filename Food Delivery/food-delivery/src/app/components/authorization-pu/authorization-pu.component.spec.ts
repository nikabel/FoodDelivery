import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationPuComponent } from './authorization-pu.component';

describe('AuthorizationPuComponent', () => {
  let component: AuthorizationPuComponent;
  let fixture: ComponentFixture<AuthorizationPuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationPuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
