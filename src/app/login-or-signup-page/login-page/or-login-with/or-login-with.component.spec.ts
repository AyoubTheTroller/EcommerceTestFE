import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrLoginWithComponent } from './or-login-with.component';

describe('OrLoginWithComponent', () => {
  let component: OrLoginWithComponent;
  let fixture: ComponentFixture<OrLoginWithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrLoginWithComponent]
    });
    fixture = TestBed.createComponent(OrLoginWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
