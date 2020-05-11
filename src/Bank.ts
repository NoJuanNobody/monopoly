import { GameType } from './GameTile';

export class Building {
    type:string;
    value: number;
    constructor(type: string, value: number) {
        this.type=type;
        this.value = value;
    }
}

interface PropertyEstate<T, K>{
    BUY(valuePaid: T[], asset: K): K;
    SELL(asset: K): T[];
}
export interface Bankable<Asset, Money>{
    //these contracts provide a connection of payment to the bank
    acceptPMT (valuePaid: Asset[], balance: Money):this
    dispenseCREDIT (balance: Money) :Asset[]
    acceptTAX (valuePaid: Asset[], balance: Money) :this
    // accumulateValue(notes: Asset[]):Money 
}
export interface tellerServices<BankNote>{
    countBills (bills: BankNote[], expectedValue:number): number;
    dispenseBills(count:number, denomination:number): BankNote[];
}
export interface AssetOperable<Asset> extends Bankable<Asset, number>{
    dispenseAsset(asset: Asset): Asset;
}
//consider renaming as ATM
export class ATM implements Bankable<BankNote, number>, tellerServices<BankNote> {
    denominations: Map<string, BankNote>;
    totalValue: number;
    constructor(startingValue: number){
        this.totalValue = startingValue;

    }
    countBills=(notes: BankNote[]):number => {
        return notes.reduce((accumulator, currentNote) => {
            return accumulator+= currentNote.value;
        },0);
        
    }
    //     todo: move to ./utility/
    dispenseBills(count: number, denomination: number): BankNote[]{
        return new Array(count).fill(new BankNote(denomination))
    }

    acceptPMT=(notes: BankNote[], bill: number) :this => {
        const noteValue = this.countBills(notes);
        // need to handle paying the treasury
        this.totalValue += noteValue;
        return this;
    }
    dispenseCREDIT(balance: number): BankNote[] {
        let values = [1,5,10,20,50,100,500];
        const filtered :number[]= values.filter((currency) => {
            if(balance % currency === 0){
                return currency;
            }
        }).sort();
        const largestNote = new BankNote(filtered.pop());
        return new Array(balance/largestNote.value).fill(largestNote);
    }
    acceptTAX(valuePaid: BankNote[], balance: number):this {
        const accumulatedValue = this.countBills(valuePaid);
        this.totalValue += accumulatedValue;
        return this;
    }

}



export class RealEstateAgent implements PropertyEstate<BankNote, Building> {
    properties: Map<string, Building>;
    atm: ATM;
    constructor() {
        this.properties = new Map();
        this.properties.set('hotel', new Building('hotel', 1000));
        this.atm = new ATM(1000);
    }
    BUY(valuePaid: BankNote[], asset: Building): Building{
        const { value } = asset;
        const totalNoteValue : number = this.atm.countBills(valuePaid);
        if(value <= totalNoteValue){
            this.atm.acceptPMT(valuePaid, totalNoteValue);
            return asset;
        }
    }

    SELL(asset: Building): BankNote[]{
        const { value } = asset;
        let values = [1,5,10,20,50,100,500];
        const bill :number= values.filter((currency) => {
            if(value % currency === 0){
                return currency;
            }
        }).sort().pop();
        return this.atm.dispenseBills(value/bill, bill);
    }
    //validation if not enough money
}