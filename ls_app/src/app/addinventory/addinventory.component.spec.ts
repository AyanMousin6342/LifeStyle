import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinventoryComponent } from './addinventory.component';

describe('AddinventoryComponent', () => {
  let component: AddinventoryComponent;
  let fixture: ComponentFixture<AddinventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddinventoryComponent]
    });
    fixture = TestBed.createComponent(AddinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
