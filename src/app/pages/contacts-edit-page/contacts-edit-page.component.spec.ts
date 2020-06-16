import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsEditPageComponent } from './contacts-edit-page.component';

describe('ContactsEditPageComponent', () => {
  let component: ContactsEditPageComponent;
  let fixture: ComponentFixture<ContactsEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
