import { Component, OnInit } from '@angular/core';
import {ContactService, Contact} from '../../services/contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts-edit-page',
  templateUrl: './contacts-edit-page.component.html',
  styleUrls: ['./contacts-edit-page.component.css']
})
export class ContactsEditPageComponent implements OnInit {

  user = {name: '', email: '', phone: ''}
  constructor(private ContactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get("id");
    this.ContactService.getContactById(userId).subscribe(contact => this.user = contact)
    console.log(this.user)
  }

  async addContact() {
    if (!this.user.name) return;
    const addedContact = await this.ContactService.saveContact(this.user);
    this.user = { name: '', email: '', phone: '' }
    this.router.navigateByUrl('/contacts')
  }

  

}
