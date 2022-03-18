import {Pokemon} from './pokemon';

/**
 * Clase que define una pokedex
 */
export class Pokedex {
  private data: Pokemon[] = [];
  constructor() {
  }

  /**
   * Funcion que retorna el array de pokemon
   * @returns array de pokemon
   */
  getData() {
    return this.data;
  }

  /**
   * Funcion que permite añadir nuevos pokemon a la pokedex
   * @param new_pokemon nuevo pokemona a añadir
   */
  addPokemon(new_pokemon: Pokemon) {
    this.data.push(new_pokemon);
  }

  /**
   * Devuelve la informacion del pokemon en esa posicion
   * @param poke_numb posicion del pokemon en el array
   */
  lookForPokemon(poke_numb: number) {
    this.data[poke_numb].pokedexInformation();
  }

  /**
   * Muestra toda la informacion almacenada en la pokedex
   */
  allInformation() {
    this.data.forEach((item) => {
      item.pokedexInformation();
    });
  }
}