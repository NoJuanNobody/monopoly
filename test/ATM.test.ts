import {
    ATM, 
    Denominations, 
    BankNote, 
    RealEstateAgent, 
    Building
} from '../src/Bank';
import { expect } from 'chai'

describe(`atm component
  this class should be be able to handle payments, 
  credits, and tax. the component acts as a middleman 
  between players paying each other for rent on a space.
  the atm component only handles BankNotes or numbers.
`,()=>{
    const atm= new ATM(1000);
    it('should handle payment',()=>{
        atm.acceptPMT([new BankNote(50), new BankNote(50)], 100);
        const { totalValue } = atm;
        expect(totalValue).equals(1100);
    })
    it('should handle credit',()=>{
        const cash :  BankNote[] = atm.dispenseCREDIT(20);
        expect(cash.length).equal(4);
        expect(cash[0]).equals(cash[1])
    })
    it('should handle tax',()=>{
        const fiftyNotes :BankNote[] = new Array(2).fill(new BankNote(50)); 
        const cash :ATM = atm.acceptTAX(fiftyNotes, 100);
        const { totalValue } = atm;

        expect(cash).equal(true);
        expect(totalValue).equals(1200)
    })
  
})

describe(`Real Estate Agent
  a real estate agent should 
  a library of all available spaces
  an agent must dispense a property 
  without allowing duplicates. an agent acts as
  a middleman between two players trading property. 
`,() => {
    const agent = new RealEstateAgent();
    const { atm: { totalValue: originalAmt}} = agent;
    const banknotes = [
        new BankNote(500),
        new BankNote(500)
    ];
    const originalAsset = new Building('hotel',1000);

    it(' should handle buying an asset',() => {
        const asset = agent.BUY(banknotes, originalAsset);
        expect(agent.atm.totalValue).equals(2000);
    })
    it(' should handle selling an asset',() => {
        const notes = agent.SELL(originalAsset)
        const value = agent.atm.countBills(notes);
        expect(value).equals(originalAsset.value);
    })
    it('should have a library of all available properties');
    it('should should dispense properties without allowing duplicates');
    it('should allow two players to trade assets');
    it('should facilitate rental agreements', () => {
    });
})
