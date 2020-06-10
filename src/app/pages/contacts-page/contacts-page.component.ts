import { Component, OnInit } from '@angular/core';
import {ContactService, Contact} from '../../services/contact.service';
@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {
  contacts : Contact[]

  constructor(private contactService : ContactService) {}

  ngOnInit() {
    this.contactService.contacts$.subscribe(contacts => {
      console.log('Contacts', contacts);
      this.contacts = contacts;
    })
    this.contactService.loadContacts();
  }

  async removeContact(contactId) {
    await this.contactService.deleteContact(contactId);
    console.log('Deleted');
  }

}
