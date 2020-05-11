import { Bank, BankNote } from './Bank';
import { printNotes } from './utils/AssetFactory';

export class Wallet implements Bank<BankNote, number>{
    totalValue: number;
    bankNotes: Map<number, BankNote[]>;
    constructor(totalValue: number){
        this.totalValue = totalValue;
        this.bankNotes = this.initializeBankNotes([
            {count:10,denomination:1},
            {count:10,denomination:5},
            {count:10,denomination:10},
            {count:10,denomination:20},
            {count:10,denomination:50},
            {count:10,denomination:100},
            {count:10,denomination:500}
        ]);
    }
    
    PMT(valuePaid: BankNote[], balance: number): boolean {
        
        throw new Error('Method not implemented.');
    }
    CREDIT(balance: number): BankNote[] {
        throw new Error('Method not implemented.');
    }
    TAX(valuePaid: BankNote[], balance: number): boolean {
        throw new Error('Method not implemented.');
    }

    private initializeBankNotes(orders: Array<order>): Map<number, BankNote[]>{
        //print qty of denomination
        const moneylib = new Map();
        orders.forEach(({count, denomination}) => {
            moneylib.set(denomination, printNotes(count, denomination));
        }
        )
        return moneylib;
    }
    
}
export type order={
    count: number;
    denomination:number;
}