import {ATM, Denominations, BankNote} from '../src/Bank';
import { expect } from 'chai'

describe('atm component',()=>{
    const atm= new ATM(1000);
    it('should handle payment',()=>{
        atm.PMT([new BankNote(50), new BankNote(50)], 100);
        const { totalValue } = atm;
        expect(totalValue).equals(1100);
    })
    it('should handle credit',()=>{
        const cash :  BankNote[] = atm.CREDIT(20);
        expect(cash.length).equal(4);
        expect(cash[0]).equals(cash[1])
    })
    // it('',()=>{})
})