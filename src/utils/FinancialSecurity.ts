import liquidateable from '../interfaces/liquidateable';

export const printNotes = (count: number, denomination: number): FinancialSecurity[] => {
    return new Array(count).fill(new FinancialSecurity({
        name:`${denomination}`,
        value: denomination,
        description:"dollar"
    }))
}


export enum Denominations {
    ONE = 1,
    FIVE = 5,
    TEN = 10,
    TWENTY = 20,
    FIFTY = 50,
    HUNDRED = 100,
    FIVE_HUNDRED=500
}
export class FinancialSecurity implements liquidateable{
    name: string;
    value: number;
    constructor({value}: SecurityParams){
        this.name = Denominations[value];
        this.value = value;
    }
    liquidate(){
        return this.value
    }
}

export interface SecurityParams {
    value: number;
    name: string;
    description: string;
}
