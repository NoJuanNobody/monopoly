import { playable } from './interfaces';
import { PlayerInstructions } from './Player';
import { FinancialSecurity as $ } from './utils/FinancialSecurity'

export class GameEvent implements playable<$>{
    message: string;
    type: GameType;
    value: number;
    next: $;
    constructor(message: string,type: GameType,value: number) {
        this.message = message;
        this.type = type;
        this.value = value;
    }
    
    main():$ {
        const { value, message } = this;
        let payment: string;
        if(value < 0){
            payment = prompt(`looks like ${message}. this is going to be pricey pay: ${value}`)
        }else{
            payment = prompt(`looks like ${message}. this is going to be pricey pay: ${value}`)
        }
        try {
            let validatedPMT: number = eval(payment);
            return new $({
                name: 'dollar',
                description: payment,
                value: validatedPMT});
        } catch (error) {
            console.error('unable to validate payment amount')
            this.main();
        }
        throw new Error('Method not implemented.');
    }
    exit(): void {
        throw new Error('Method not implemented.');
    }

}

export class GameChoice{
    message: string;
    callback: () => {};
}

export enum GameType {
    PMT=0, CREDIT, TAX, TRADE,FREEZE
}

export class GameTile {
    name: string;
    description: string;
    value:number
    eventSet: Set<GameEvent>;
    

    constructor({name, description}: GameTileParams){
        this.name = name;
        this.description = description;
        this.value = Math.ceil(Math.random()*100);
        this.eventSet = new Set();
        this.eventSet.add(new GameEvent('test game event', GameType.PMT, 500));
    }   

}
export interface GameTileParams {
    name: string; 
    description: string;
  }