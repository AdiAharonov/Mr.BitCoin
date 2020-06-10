import { Component, OnInit } from '@angular/core';
import { BtcService } from '../../services/btc.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {name: 'Puki', BTC: 100}
  // currBtc = BtcService.getBtc(user.BTC)


  constructor() { }

  ngOnInit(): void {
  }

  

  

}
