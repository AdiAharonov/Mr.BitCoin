import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailsPageComponent } from './contacts-details-page.component';

describe('ContactsDetailsPageComponent', () => {
  let component: ContactsDetailsPageComponent;
  let fixture: ComponentFixture<ContactsDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
