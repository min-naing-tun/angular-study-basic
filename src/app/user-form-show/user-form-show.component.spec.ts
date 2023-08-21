import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormShowComponent } from './user-form-show.component';

describe('UserFormShowComponent', () => {
  let component: UserFormShowComponent;
  let fixture: ComponentFixture<UserFormShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormShowComponent]
    });
    fixture = TestBed.createComponent(UserFormShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
