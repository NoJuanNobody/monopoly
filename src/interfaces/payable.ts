import { liquidateable } from '.'
import { FinancialSecurity as $, FinancialSecurity } from '../utils/FinancialSecurity'
import Player from '../Player'

export default interface payable<Asset>{
    //these contracts provide a connection of payment to the bank
    
    acceptPaymentFrom(valuePaid: Asset[], player: Player): this 
    dispenseCreditTo(recipient: Player, amount: number): void
}



export function dispenseCREDIT(balance: number): $[] {
    let values = [1,5,10,20,50,100,500];
    const filtered :number[]= values.filter((currency) => {
        if(balance % currency === 0){
            return currency;
        }
    }).sort();
    const largestNote = filtered.pop() 
    return new Array(balance/largestNote).fill(new FinancialSecurity({
        name:`${largestNote}`,
        value:largestNote,
        description: 'dollar'
    }));
}