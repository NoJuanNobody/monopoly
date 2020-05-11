import { GameEvent, GameType, GameTile} from '../src/GameTile';
import { expect } from 'chai';

describe('GameTile Component',() => {
    const name='Vermillion Park';
    const description='test name';
    const tile = new GameTile({
        name,
        description,
    })
    const { 
        name: actualName, 
        description: actualdesc,
        value,
        eventSet
    } = tile;
    it(`Tile name should be ${name}`,() => {
        expect(actualName).equals(name);
    })
    it(`Tile description should match ${actualdesc}`,() => {
        expect(actualdesc).equals(description)
    })
    it(`Tile should have random value with a non empty eventSet`,() => {
        expect(value).greaterThan(-1)
        expect(value).lessThan(101)
        expect(eventSet.entries().next().value[0]).instanceOf(GameEvent)
    })
})