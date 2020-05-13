import { FinancialSecurity, SecurityParams } from './FinancialSecurity';
import  Building  from '../Building';
import { upgradeable, payable, accountable, rentable } from '../interfaces';
export class RealEstateSecurity extends FinancialSecurity 
implements 
accountable<FinancialSecurity>,
payable<FinancialSecurity>,
upgradeable<Building>,
rentable
{
    account: number;
    countIsCorrect(asset: FinancialSecurity[], expVal: number): this | Error {
        throw new Error('Method not implemented.');
    }
    acceptPaymentFrom(valuePaid: FinancialSecurity[], player: import("../Player").default): this {
        throw new Error('Method not implemented.');
    }
    dispenseCreditTo(recipient: import("../Player").default, amount: number): void {
        throw new Error('Method not implemented.');
    }
    upgradeWith(modifier: Building): boolean {
        throw new Error('Method not implemented.');
    }
    revenue: number;
    acceptRent(rent: number): this {
        throw new Error('Method not implemented.');
    }
    modifyRentValue(): this {
        throw new Error('Method not implemented.');
    }
    payTo(): boolean {
        throw new Error('Method not implemented.');
    }



}
