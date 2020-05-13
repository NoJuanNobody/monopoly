import { liquidateable, payable } from '.'
import { FinancialSecurity as $ } from '../utils/FinancialSecurity'
import Player from '../Player'

export default interface Accountable<T>{
    account: number;
    countIsCorrect(asset: T[], expVal:number): this | Error
}

export function countIsCorrect<T extends liquidateable>(assets:T[], expVal:number){
    const tot = assets.reduce((tot,current) => {
        return tot +=current.liquidate()},0);
    return tot === expVal
}

export function count<T extends liquidateable>(assets:T[]){
    return assets.reduce((tot,current) => {
        return tot +=current.liquidate()},0);
}
