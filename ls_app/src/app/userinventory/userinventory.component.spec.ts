import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinventoryComponent } from './userinventory.component';

describe('UserinventoryComponent', () => {
  let component: UserinventoryComponent;
  let fixture: ComponentFixture<UserinventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserinventoryComponent]
    });
    fixture = TestBed.createComponent(UserinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
