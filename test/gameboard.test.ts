import { expect } from 'chai'
import { Gameboard } from '../src/gameboard';

describe('gameboard component initialization',() => {
    const monopoly = new Gameboard();
    const {
        board,
        availablePieces
    } = monopoly;
    it(`should have a board with one square`,()=>{
        expect(board.length).equals(1);
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