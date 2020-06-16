import { Component, OnInit } from '@angular/core';
import { BtcService } from '../../services/btc.service';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.css']
})
export class ChartsPageComponent implements OnInit {

 public tradeVolume = {title: '',type: 'LineChart',data: [],columnNames: [] }
 public marketPrice = {title: '',type: 'LineChart',data: [],columnNames: [] }
 public options = {backgroundColor:'#2f3032', colors: ['#ede68a'], hAxis: {textStyle: {color: '#fff', fontSize:12}}, vAxis: {textStyle: {color: '#fff', fontSize:12}}}

  constructor() { }

  ngOnInit(): void {
    BtcService.gettradeVolumeChart().then((res) => {
      this.tradeVolume.title = res.name
      this.tradeVolume.data = res.values.map(value => [value.x, value.y])
      this.tradeVolume.columnNames.push(res.period)
      this.tradeVolume.columnNames.push(res.unit)
     
    });

    BtcService.getmarketPriceChart().then((res) => {
      this.marketPrice.title = res.name
      this.marketPrice.data = res.values.map(value => [value.x, value.y])
      this.marketPrice.columnNames.push(res.period)
      this.marketPrice.columnNames.push(res.unit)
    });
  }

}
