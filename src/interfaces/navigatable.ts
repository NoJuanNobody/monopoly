import { PlayerInstructions } from '../Player';

export interface navigateable{
    movePlayer(index: number): void ;
    acceptInstructions(instructions: PlayerInstructions): void;
    moveToPosition(position: number): void;
}