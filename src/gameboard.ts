import {Piece, PieceType, generatePieces} from './Piece'
import { Player, PlayerInstructions } from './Player'
import { GameEvent, GameType, GameTile } from './GameTile'
import { 
  BankNote,
  ATM,
  RealEstateAgent,
  Building
   } from "./Bank";

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
  private atm: ATM;
  private propertyAgent: RealEstateAgent;
  constructor(){
    this.board = new Array();
    this.board.push(new GameTile({name:'VermillionPark', description:"affordable housing"}));
    this.availablePieces = generatePieces();
    this.propertyAgent = new RealEstateAgent();
    this.atm = new ATM(10000);
  }
  /**
   * a player will ask for a peice,
   * may be given another peice at random if already selected
   */
  //  ? info: candidate for state management
  public dispensePiece = (name: string) : Piece =>{
    if(this.availablePieces.has(name)){
      this.availablePieces.delete(name);
      return new Piece(name);
    } else{
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
  // TODO
  private GenerateTiles(): Set<GameTile> {
    return null;
  }
}