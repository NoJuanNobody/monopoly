
import { App } from '../src/app';
import { expect } from 'chai';
import { Piece } from '../src/Piece';
import { PlayerInstructions, Player } from '../src/Player';
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
  const testPlayer = new Player('Alex');
  const dog = new Piece('DOG');
  testPlayer.setPeice(dog)
  const { wallet, position, piece: { type, name } } = testPlayer;

  // check that player has been initialized with a dog peice
  it('should initialize with the correct peice', () => {
    expect(type).equals('GamePiece')
    expect(name).equals('DOG')

  });
  it('should initialize with a wallet of value 1000',() => {
    expect(wallet).equals(1000);
  });
  it('should set the player at position 0 on the board', () => {
    expect(position).equals(0);
  })
  it('should be able to ask a gameboard for player instructions', () => {
    const { wallet: originalWalletAmount } = testPlayer;
    const gb = new Gameboard();
    const instructions = gb.movePlayer();
    testPlayer.playTurn(instructions);
    expect(testPlayer.wallet).lt(originalWalletAmount);
  });
  it('should be able to play through player instructions', () => {
    const { wallet: originalWalletAmount } = testPlayer;
    const gb = new Gameboard();
    const instructions = gb.movePlayer();
    testPlayer.playTurn(instructions);
    expect(testPlayer.wallet).lt(originalWalletAmount);
  });
  it('should be able to make decisions in an event script')
});

describe('PlayerInstructions', () => {
  const testPlayer = new Player('Alex');
  const dog = new Piece('DOG');
  testPlayer.setPeice(dog)

  // player will ask gameboard for player instructions
  const instructions: PlayerInstructions = {
    position: 4,
    eventSet: new Set([
      {
        message: "test message",
        type: GameType.PMT,
        value: -10,
      }
    ])
  }
  testPlayer.playTurn(instructions);

  const { position, wallet } = testPlayer;

  it(`should notify the player they have moved to next space: ${instructions.position}`, () => {
    expect(position).equals(instructions.position);
  })
  it(`should update the wallet to a total value of ${990}`, () => {
    expect(wallet).equals(990);
  })


})