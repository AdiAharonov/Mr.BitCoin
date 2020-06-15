import { Component, OnInit } from '@angular/core';
import {ContactService, Contact} from '../../services/contact.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts-details-page',
  templateUrl: './contacts-details-page.component.html',
  styleUrls: ['./contacts-details-page.component.css']
})
export class ContactsDetailsPageComponent implements OnInit {

  user: Contact;
  transferValue: number;

  constructor(private route: ActivatedRoute, private contactService : ContactService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(id).subscribe(contact => this.user = contact)
    
  }

  transferCoin = () => {
    //Protection
    if (this.transferValue < 1) {
      alert('Must be positive value')
      return
    }
    if (this.transferValue > UserService.getCurrBalance()) {
      alert('You dont have enough coins')
      return
    }
    else {
      UserService.transferCoinTo(this.transferValue, this.user.name);
      alert(`Sent ${this.transferValue} conis to ${this.user.name} Successfully`)
      this.router.navigateByUrl('/')
    }
  }

}
