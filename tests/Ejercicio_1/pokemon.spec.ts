import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/Ejercicio_1/pokemon';

describe('Class Pokemon Test', () => {
  let test_poke: Pokemon = new Pokemon("Paras", 5.4, 0.3, "Bicho", 70, 55, 25, 35);

  it('Poke`s name', () => {
    expect(test_poke.getName()).to.be.equal("Paras");
  });

  it('Poke`s type', () => {
    expect(test_poke.getType()).to.be.equal("Bicho");
  });

  it('Poke`s speed', () => {
    expect(test_poke.getSpeed()).to.be.equal(25);
  });

  it('Poke`s weight', () => {
    expect(test_poke.getWeight()).to.be.equal(5.4);
  });

  it('Poke`s Height', () => {
    expect(test_poke.getHeight()).to.be.equal(0.3);
  });

  it('Poke`s Attack', () => {
    expect(test_poke.getAttack()).to.be.equal(70);
  });

  it('Poke`s Defense', () => {
    expect(test_poke.getDefense()).to.be.equal(55);
  });

  it('Poke`s HP', () => {
    expect(test_poke.getMaxHealt()).to.be.equal(35);
  });

  it('Poke`s HP combat', () => {
    test_poke.Combat(6);
    expect(test_poke.getComHealt()).to.be.equal(35 - 6);
  });
});