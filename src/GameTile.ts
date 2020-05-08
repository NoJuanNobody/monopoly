export class GameEvent {
    message: string;
    type: GameType;
    value: number;
    constructor(message: string,type: GameType,value: number) {
        this.message = message;
        this.type = type;
        this.value = value;
    }

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
    }   

}
export interface GameTileParams {
    name: string; 
    description: string;
  }