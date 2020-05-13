import { GameEvent } from './GameTile';
import {Piece} from './Piece';
import {registerable, accountable, payable, playable} from './interfaces';
import {count, countIsCorrect} from './interfaces/Accountable';
import {dispenseCREDIT} from './interfaces/payable';
import {FinancialSecurity } from './utils/FinancialSecurity';
import {  } from './interfaces/registerable';
import { navigateable } from './interfaces/navigatable';

interface playerBehaviour<T, P> 
extends 
accountable<T>,
payable<T>,
registerable,
navigateable
{}

export default class Player 
implements
playerBehaviour<FinancialSecurity, Player>
{
    name:string;
    piece: Piece;
    position:number
    account: number;
    next: Player;
    currentGameScript: Set<GameEvent>
    constructor(name: string, pieceType: string){
        this.name = name;
        this.position = 0;
        this.piece = new Piece(pieceType);
        this.account = 10000;
    }
    acceptInstructions(instructions: PlayerInstructions): void {
        throw new Error('Method not implemented.');
    }
    moveToPosition(position: number): void {
        throw new Error('Method not implemented.');
    }
    registerPiece(pieceType: any): void {
        throw new Error('Method not implemented.');
    }
    mainRegistration(): void {
        const name = prompt('please enter your name');
        console.log('now select a piece')
        const piece = prompt('DOG, BOOT, THIMBLE')
        let player = new Player(name, piece);
        player.next = player;
    }
    
    movePlayer(index: number): void {
        throw new Error('Method not implemented.');
    }

    acceptPaymentFrom(valuePaid: FinancialSecurity[]): this {
        this.account += count(valuePaid);
        return this;
    }
    dispenseCreditTo(recipient: Player, amount: number): void {
        this.account -= amount
        const credit = dispenseCREDIT(amount);
        recipient.acceptPaymentFrom(credit);
    }
    
    countIsCorrect(asset: FinancialSecurity[], expVal: number): this | Error {
        const isCorrect = countIsCorrect(asset, expVal)
        return isCorrect ? this : new Error('looks like you are short');
            
    }
}

export type PlayerInstructions = {
    position: number;
    gameScript: Set<GameEvent>
}