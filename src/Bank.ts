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

interface Bank<Asset, Money>{
    //these contracts provide a connection of payment to the bank
    PMT (valuePaid: Asset[], balance: Money) :boolean
    CREDIT (balance: Money) :Asset[]
    TAX (valuePaid: Asset[], balance: Money) :boolean
    // accumulateValue(notes: Asset[]):Money 
}


//consider renaming as ATM
export class ATM implements Bank<BankNote, number>{
    denominations: Map<string, BankNote>;
    totalValue: number;
    constructor(startingValue: number){
        this.totalValue = startingValue;

    }
    accumulateValue=(notes: BankNote[]):number => {
        return notes.reduce((accumulator, currentNote) => {
            return accumulator+= currentNote.value;
        },0);
    }

    printQtyOfDenomination(count: number, denomination: number){
        return new Array(count).fill(new BankNote(denomination))
    }

    PMT=(notes: BankNote[], bill: number) : boolean => {
        const noteValue = this.accumulateValue(notes);
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
        return new Array(balance/largestNote.value).fill(largestNote);
    }
    TAX(valuePaid: BankNote[], balance: number): boolean {
        const accumulatedValue = this.accumulateValue(valuePaid);
        this.totalValue += accumulatedValue;
        return accumulatedValue >= balance;
    }

}

export class Building {
    type:string;
    value: number;
    constructor(type: string, value: number) {
        this.type=type;
        this.value = value;
    }
}
interface PropertyEstate<T, K>{
    BUY(valuePaid: T[], asset: K): K | T[];
    SELL(asset: K): T[];
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
        const totalNoteValue : number = this.atm.accumulateValue(valuePaid);
        if(value <= totalNoteValue){
            this.atm.PMT(valuePaid, totalNoteValue);
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
        return this.atm.printQtyOfDenomination(value/bill, bill);
    }
    //validation if not enough money
}