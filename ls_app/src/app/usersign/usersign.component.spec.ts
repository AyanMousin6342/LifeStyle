import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersignComponent } from './usersign.component';

describe('UsersignComponent', () => {
  let component: UsersignComponent;
  let fixture: ComponentFixture<UsersignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersignComponent]
    });
    fixture = TestBed.createComponent(UsersignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
