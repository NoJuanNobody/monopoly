import {Piece} from './Piece';
import { GameEvent } from './GameTile';

export class Player {
    piece: Piece | null;
    name: string;
    position: number
    wallet: number;

    constructor(name: string){
        
        this.position = 0;
        this.piece = null;
        this.wallet = 1000;
    }
    // askforPeice
    public setPeice(piece: Piece, ) : void {
        this.piece = piece; 
    }
    //ask for instructions
    public playTurn({position, eventSet}: PlayerInstructions): void {
        this.position = position;
        const outcome = this.iterateEventSet(eventSet);
        this.updateWallet(outcome);
    }
    private iterateEventSet(eventSet: Set<GameEvent>): number{
        let total = 0
        eventSet.forEach((event: GameEvent) => {
        const { message, value } = event;
        total+=value
        if(value < 0){
            console.log(`${message} looks like you owe ${value}`)
        } else{
            console.log(`${message} looks like we owe you ${value}`)
        }
        })
        return total;
    }

    private updateWallet(value: number){
        this.wallet += value;
    }
}

export interface PlayerInstructions{
    position: number;
    eventSet: Set<GameEvent>
}  