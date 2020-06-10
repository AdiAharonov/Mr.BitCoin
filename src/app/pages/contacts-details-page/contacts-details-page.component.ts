import { Component, OnInit } from '@angular/core';
import {ContactService, Contact} from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contacts-details-page',
  templateUrl: './contacts-details-page.component.html',
  styleUrls: ['./contacts-details-page.component.css']
})
export class ContactsDetailsPageComponent implements OnInit {

  user: Contact

  constructor(private route: ActivatedRoute, private contactService : ContactService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(id).subscribe(contact => this.user = contact)
    
  }

}
