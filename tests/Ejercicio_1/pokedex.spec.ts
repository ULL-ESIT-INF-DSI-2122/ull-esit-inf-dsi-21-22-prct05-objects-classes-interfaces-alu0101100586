import 'mocha';
import { expect } from 'chai';
import { Pokedex } from '../../src/Ejercicio_1/pokedex';
import { Pokemon } from '../../src/Ejercicio_1/pokemon';

describe('Class Pokedex test', () => {
  let poke_a: Pokemon = new Pokemon("Pikachu", 6, 0.4, "electrico", 55, 40, 90, 35);
  let poke_b: Pokemon = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 1000, 43, 44);
  let pokedex: Pokedex = new Pokedex();
  let aux: Pokemon[] = [poke_a, poke_b];
  pokedex.addPokemon(poke_a);
  pokedex.addPokemon(poke_b);


  it('Pokedex', () => {
    expect(pokedex.getData()).to.be.eql(aux);
  });
});