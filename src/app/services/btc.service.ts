// import { Observable, BehaviorSubject, of } from 'rxjs';
const axios = require('axios').default;


export const BtcService = {  
   getBtc,
   gettradeVolumeChart,
   getmarketPriceChart
}

declare var require: any

async function getBtc(coins : number) {
        let currBtc : number;
        try {
              const response = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1'); 
              currBtc = (1 / response.data) * coins;
              return Math.floor(currBtc);
            } catch (error) {
                  console.error(error);
                }
    }



async function gettradeVolumeChart() {
        try {
              const response = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'); 
              return response.data;
              
            } catch (error) {
                  console.error(error);
                }
    }


async function getmarketPriceChart() {
        try {
              const response = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'); 
              return response.data;
              
            } catch (error) {
                  console.error(error);
                }
    }
            
  
    
    

