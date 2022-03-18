import {Pokemon} from './pokemon';

/**
 * Clase que simula el combatre entre dos pokemon
 */
export class Combat {
  constructor(public poke_a: Pokemon, public poke_b: Pokemon) {
  }

  /**
   * Simulacion de combate entre los pokemon
   * @returns 
   */
  start(): string {
    let winner: boolean = true;
    let zero_hp: boolean = false;
    let turn: number = 1;

    while (zero_hp == false) {
      if (turn % 2 != 0) {
        this.poke_b.Combat(Math.round(this.damage(this.poke_a.getType(), this.poke_a.getAttack(),
                                                  this.poke_b.getType(), this.poke_b.getDefense())));
      } else {
        this.poke_a.Combat(Math.round(this.damage(this.poke_b.getType(), this.poke_b.getAttack(),
                                                  this.poke_a.getType(), this.poke_a.getDefense())));
      }

      console.log('=> TURNO ' + turn + " <=");
      if (this.poke_a.getComHealt() <= 0) {
        console.log(this.poke_a.getName() + ' acaba con 0');
        zero_hp = true;
        winner = false;
      } else {
        console.log(this.poke_a.getName() + ' acaba con ' + this.poke_a.getComHealt());
      }

      if (this.poke_b.getComHealt() <= 0) {
        console.log(this.poke_b.getName() + ' acaba con 0');
        zero_hp = true;
        winner = true;
      } else {
       console.log(this.poke_b.getName() + ' acaba con ' + this.poke_b.getComHealt());
      }
      
      turn++;
    }



    if(winner == true) {
      console.log("El ganador es: " + this.poke_a.getName());
      return this.poke_a.getName();
    } else {
      console.log("El ganador es: " + this.poke_b.getName());
      return this.poke_b.getName();
    }
  }

  /**
   * Calcula el daño aplicado del pokemon ofensivo al defensivo
   * @param poke_1_type tipo del pokemon 1
   * @param poke_1_of daño ofensivo del pokemon 1
   * @param poke_2_type tipo del pokemon 2
   * @param poke_2_def defensa del pokemon 2
   * @returns daño aplicado del pokemon 1 al pokemon 2
   */
  damage(poke_1_type: string, poke_1_of: number, poke_2_type: string, poke_2_def: number): number {
    const s_effective: number = 2;
    const neutral: number = 1;
    const n_effective: number = 0.5;

    let damage: number = 0;
  
    if(poke_1_type == poke_2_type) {
      damage = 50 * (poke_1_of/poke_2_def) * n_effective;
    }
  
    switch (poke_1_type) {
      case 'fuego':
        switch (poke_2_type){
          case 'hierba':
            damage = 50 * (poke_1_of/poke_2_def) * s_effective;
          case 'agua':
            damage = 50 * (poke_1_of/poke_2_def) * n_effective
          case 'electrico':
            damage = 50 * (poke_1_of/poke_2_def) * neutral;
        }
        break;
  
      case 'hierba':
        switch (poke_2_type){
          case 'fuego':
            damage = 50 * (poke_1_of/poke_2_def) * n_effective;
          case 'agua':
            damage = 50 * (poke_1_of/poke_2_def) * s_effective;
          case 'electrico':
            damage = 50 * (poke_1_of/poke_2_def) * neutral;
        }
        break;
  
      case 'agua':
        switch (poke_2_type){
          case 'fuego':
            damage = 50 * (poke_1_of/poke_2_def) * s_effective;
          case 'hierba':
            damage = 50 * (poke_1_of/poke_2_def) * n_effective;
          case 'electrico':
            damage = 50 * (poke_1_of/poke_2_def) * n_effective;
        }
        break;
  
      case 'electrico':
        switch (poke_2_type){
          case 'fuego':
            damage = 50 * (poke_1_of/poke_2_def) * neutral;
          case 'hierba':
            damage = 50 * (poke_1_of/poke_2_def) * neutral;
          case 'agua':
            damage = 50 * (poke_1_of/poke_2_def) * s_effective;
        }
        break;
    }
    return damage;
  }
}