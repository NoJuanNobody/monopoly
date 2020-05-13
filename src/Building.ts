import {
    FinancialSecurity as dollars, 
    FinancialSecurity
} from './utils/FinancialSecurity';
import { liscenceable, liquidateable } from './interfaces';

export default class Building extends FinancialSecurity
implements 
    liquidateable, 
    liscenceable<dollars, Building>
    {
    id: number;
    name: string;
    description:string;
    type:string;
    value: number;
    owner: string;
    constructor(type: string, value: number) {
        super({
            name: "Building",
            value: value,
            description: `this item modifies the land it rests on and raises the rent by ${value}`,
        });
        this.type=type;
        this.value = value;
        this.owner='bank';
    }
    BUYFROM(valuePaid: dollars[], name: string): Building {
        throw new Error('Method not implemented.');
    }
    SELLTO(asset: Building): dollars[] {
        throw new Error('Method not implemented.');
    }


    private totalValue = (a: dollars[]):number => {
        return a.map((dollar) => dollar.liquidate(),[]).reduce((t: number,i: number) => { return t+=i});
    } 
    
}