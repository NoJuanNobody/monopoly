import { GameType } from './GameTile';

export enum Denominations {
    ONE = 1,
    FIVE = 5,
    TEN = 10,
    TWENTY = 20,
    FIFTY = 50,
    HUNDRED = 100,
    FIVE_HUNDRED=500
}
export class BankNote{
    name: string;
    value: number;
    constructor(value: number){
        this.name = Denominations[value];
        this.value = value;
    }
}

interface Bank<T, K>{
    //these contracts provide a connection of payment to the bank
    PMT (valuePaid: T[], balance: K) :boolean;
    CREDIT (balance: K) :T[],
    TAX (valuePaid: T[], balance: K) :boolean,
    // TRADE (tradeIn: T, balance:) :T,
    // TRADEASSET (value: T) :T,
    // FREEZE () : boolean
}

//consider renaming as ATM
export class ATM implements Bank<BankNote, number>{
    denominations: Map<string, BankNote>;
    totalValue: number;
    constructor(startingValue: number){
        this.totalValue = startingValue;

    }
    PMT=(notes: BankNote[], bill: number) : boolean => {
        const noteValue = notes.reduce((accumulator, currentNote) => {
            return accumulator+= currentNote.value;
        },0);
        // need to handle paying the treasury
        this.totalValue += noteValue;
        return noteValue === bill;
    }
    CREDIT(balance: number): BankNote[] {
        let values = [1,5,10,20,50,100,500];
        const filtered :number[]= values.filter((currency) => {
            if(balance % currency === 0){
                return currency;
            }
        }).sort();
        const largestNote = new BankNote(filtered.pop());
        console.log(largestNote);
        return new Array(balance/largestNote.value).fill(largestNote);
    }
    TAX(valuePaid: BankNote[], balance: number): boolean {
        return false
    }

}




