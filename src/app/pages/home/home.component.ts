import { Component, OnInit } from '@angular/core';
import { BtcService } from '../../services/btc.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {name: UserService.loadUser(), BTC: UserService.getCurrBalance()};
  currBtc: number;
  
  
  constructor( private router: Router) { }
  
  ngOnInit(): void {
    //If there is no user go sign up
    !this.user.name ? this.router.navigateByUrl('/signup') : '';
    //Load current btc value
    BtcService.getBtc(1).then((res) => this.currBtc = res);
  }

  

  

}
