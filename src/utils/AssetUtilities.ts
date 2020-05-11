import { BankNote } from '../Bank'




export enum Denominations {
    ONE = 'ONE',
    FIVE = 'FIVE',
    TEN = 'TEN',
    TWENTY = 'TWENTY',
    FIFTY = 'FIFTY',
    HUNDRED = 'HUNDRED',
    FIVE_HUNDRED = 'FIVE_HUNDRED'
}
export class BankNote{
    name: string;
    value: number;
    constructor(value: number){
        this.name = Denominations[value];
        this.value = value;
    }
    liquidate(): number{
        return this.value;
    }
}
// function printAsset<T>(count: T, level: number ){
//     return new Array(count).fill(new T())
// }
export const printNotes = (count: number, denomination: number): BankNote[] => {
    return new Array(count).fill(new BankNote(denomination))
}