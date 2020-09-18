import {} from 'jasmine';
import {Pokemon} from '../src/pokemon/pokemon'

describe('Pokemon Tests', () => {
  it('test valid name parameter', async () => {
    const pokemon = new Pokemon();
    expect(pokemon.checkNameValid('ads')).toBeTruthy();
  });

  it('test invalid name parameter', async () => {
    const pokemon = new Pokemon();
    expect(pokemon.checkNameValid('')).toBeFalsy();
  });

});
