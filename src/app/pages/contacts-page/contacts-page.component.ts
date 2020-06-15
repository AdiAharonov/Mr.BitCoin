import { Component, OnInit,Input } from '@angular/core';
import {ContactService, Contact} from '../../services/contact.service';
@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {
  contacts : Contact[];
 values = {term: ''}

  constructor(private contactService : ContactService) {}
  
  ngOnInit() {
    this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts;
    })
    this.contactService.loadContacts();
  }

  ngAfterContentChecked() {
    if (this.values) {
      this.contactService.loadContacts(this.values);
    }
  }

  async removeContact(contactId) {
    await this.contactService.deleteContact(contactId);
    console.log('Deleted');
  }

  onKey(event: any) { // without type info
    this.values.term = event.target.value;
    
  }

}
