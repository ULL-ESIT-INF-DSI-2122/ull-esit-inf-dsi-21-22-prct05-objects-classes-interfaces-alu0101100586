import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/Ejercicio_1/pokemon';
import { Combat } from '../../src/Ejercicio_1/combat';

describe('Class Combat Test', () =>{
  let poke_a: Pokemon = new Pokemon("Pikachu", 6, 0.4, "electrico", 55, 40, 90, 35);
  let poke_b: Pokemon = new Pokemon("Squirtle", 9, 0.5, "agua", 48, 1000, 43, 44);
  let a_vs_b: Combat = new Combat(poke_a, poke_b);

  it('Combat poke_a vs poke_b', () => {
    expect(a_vs_b.start()).to.be.equal("Squirtle");
  });
});