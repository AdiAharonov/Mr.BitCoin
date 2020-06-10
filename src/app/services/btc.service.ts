// import { Observable, BehaviorSubject, of } from 'rxjs';
const axios = require('axios').default;


export class BtcService {   
}

declare var require: any

async function getBtc(coins : number) {
        let currBtc : number;
        try {
              const response = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1');
              console.log('***0', response);
              currBtc = response.data;
            } catch (error) {
                  console.error(error);
                }
        return currBtc;
    }
            
     
    
    

