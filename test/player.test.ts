import { expect } from 'chai';
import { Piece } from '../src/Piece';
import Player, { PlayerInstructions } from '../src/Player';
import { GameType } from '../src/gameTile';
import { Gameboard } from '../src/gameboard';


describe('Piece class', () => {
  let gamepiece='BOOT'
  it(`should create a game peice of type ${gamepiece}`,() => {
    const gamePiece = new Piece(gamepiece);
    expect(gamePiece.name).equals('BOOT');
  })
});

describe(`Player Class
  a player should have a game peice with
  an initial amount of money in BankNotes.
  a player can ask the gameboard what its next move is.
  the player instructions, include an event script
  the player can iterate through that script and make decisions
  that affect their wallet.
`, () => {
  const testPlayer = new Player('Alex', 'DOG');
  const { account, position, piece: { type, name } } = testPlayer;

  // check that player has been initialized with a dog peice
  it('should initialize with the correct peice', () => {
    expect(type).equals('GamePiece')
    expect(name).equals('DOG')
    
  });
  it('should initialize with a account of value 10000', () => {
    expect(account).equals(10000);
    
  })
  it('should set the player at position 0 on the board',() => {
    console.log(position)
    expect(position).equals(0)
  })
  it('should be able to play through player instructions')
  it('should be able to make decisions in an event script')
});

describe('PlayerInstructions', () => {

  it(`should notify the player they have moved to next space:`)
  it(`should update the wallet to a total value of ${990}`, )


})