import { expect } from 'chai'
import { Gameboard } from '../src/gameboard';

describe(`Gameboard component initialization
  a game board has a list of game tiles,
  each of them with a non empty set of game events. 
  a game board manages the circulation of game peices
  no two players can have the same peice
`,() => {
    const monopoly = new Gameboard();
    const {
        board,
        availablePieces
    } = monopoly;
    it(`should have a board with atleast one game tile`,()=>{
        expect(board.length).greaterThan(0);
    })
    it(`should have a set of available game peices`,()=>{
        expect(availablePieces.values().next().value.name).equals('DOG')
    })
    it(`It should dispense two different peices when asked for the same piece twice`,()=>{
        const boot = monopoly.dispensePiece('BOOT');
        const anotherBoot = monopoly.dispensePiece('BOOT');
        expect(boot.name).not.equals(anotherBoot.name)
        expect(monopoly.availablePieces.size).equals(5);
    })
});