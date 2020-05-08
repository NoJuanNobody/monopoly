import {Piece, PieceType, generatePieces} from './Piece'
import { Player, PlayerInstructions } from './Player'
import { GameEvent, GameType, GameTile } from './GameTile'

export enum DiceRoll {
  ONE=1,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX
}


export class Gameboard {
  public board: Array<GameTile>;
  public availablePieces: Map<string, Piece>
  
  constructor(){
    console.log( 'gameboard class')
    this.board = new Array();
    this.board.push(new GameTile({name:'VermillionPark', description:"affordable housing"}));
    this.availablePieces = generatePieces();
  }
  /**
   * a player will ask for a peice,
   * may be given another peice at random if already selected
   */
  //  ? info: candidate for state management
  public dispensePiece = (name: string) : Piece =>{
    if(this.availablePieces.has(name)){
      this.availablePieces.delete(name);
      console.log('piece found')
      return new Piece(name);
    } else{
      console.info(`unable to select peice of type ${name}`)  ;
      return this.getRandomPiece()
      
    }
  }
  private getRandomPiece = () => {
    const randomPiece = this.availablePieces.values().next().value
    
    return randomPiece;
  }
  
  /**handles and triggers player move event loop */
  public movePlayer = (player: Player) : PlayerInstructions  => {
    //dice roll
    //select event questions and iterate through them
    const newPosition: number = this.diceRoll()
    const playerTurns: Set<GameEvent> = this.GenerateEventStack();
    return  {
      position: newPosition,
      eventSet: playerTurns,
    } 
  }
  
  private diceRoll (): DiceRoll {
      return Math.ceil(Math.random()*12);
  }
  // ? todo: eill eventually reach out to api for game events
  private GenerateEventStack (): Set<GameEvent>{
    return new Set(
      [
        new GameEvent('string', GameType.CREDIT, -20), 
        new GameEvent('string', GameType.CREDIT, -20), 
      ]
    );
  }
}