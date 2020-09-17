import fetch from 'node-fetch';

export interface IPokemon {
  moves: string[];
  weight: number
  height: number
}

export interface IResponse {
    id: number;
    weight: number;
    height: number;
    moves: {
        move: {
            name: string;
        }
    }
}

export class Pokemon {
    url = 'https://pokeapi.co/api/v2/pokemon';
    
  /**
   * Gets the list of Pokemon info objects
   * @param names list of names
   */
  public async getPokemonsByNameList(names: string[]): Promise<IPokemon[]> {
    // Implementation Here
    return null;
  }


  /**
   * Gets a Pokemon info object
   * @param name 
   */
  public async getPokemonByName(name: string): Promise<IResponse> {
    const res = (await fetch(`${this.url}/${name}`));
    const json: IResponse = await res.json();
    return json;
  }

}
