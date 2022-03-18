/**
 * Clase que describe y almacena la informacion de un pokemon
 */
export class Pokemon {
  private com_hp : number;

  /**
   * constructor de la clase pokemon
   * @param name Nombre del pokemon
   * @param weight Peso del pokemon
   * @param height Altura del pokemon
   * @param type Tipo del pokemon
   * @param attack Valor del ataque que proporciona el pokemon
   * @param defense Valor de la defensa del pokemon
   * @param speed Velocidad con la que el pokemon a taca y defiende
   * @param max_healt Vida máxima del pokemon
   */
  constructor(private name: string, private weight: number, private height: number, 
              private type: string, private attack: number, private defense: number, 
              private speed: number, private max_healt: number) {
    this.com_hp = this.max_healt; 
  }

  /**
   * Devuelve el nombre del pokemon
   */
  getName() {
    return this.name;
  }

  /**
   * Devuelve el peso del pokemon
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Devuelve la altura del pokemon
   */
  getHeight() {
    return this.height;
  }

  /**
   * Devuelve el tipo del pokemon
   */
  getType() {
    return this.type;
  }

  /**
   * Devuelve el ataque del pokemon
   */
  getAttack() {
    return this.attack;
  }

  /**
   * Devuelve la defensa del pokemon
   */
  getDefense() {
    return this.defense;
  }

  /**
   * Devuelve la velocidad del pokemon
   */
  getSpeed() {
    return this.speed;
  }

  /**
   * Devuelve la vida máxima del pokemon
   */
  getMaxHealt() {
    return this.max_healt;
  }

  /**
   * Devuelve la vida que tiene el pokemon mientras lucha del pokemon
   */
  getComHealt() {
    return this.com_hp;
  }

  /**
   * Aplica el daño resivido a la vida en combate
   * @param damage Daño recivido
   */
  Combat(damage: number) {
    this.com_hp = this.com_hp - damage;
  }

  /**
   * Muestra la informacion del pokemon
   */
  pokedexInformation() {
    console.log("");
    console.log("Name: " + this.getName());
    console.log("Type: " + this.getType());
    console.log("Weight: " + this.getWeight());
    console.log("Height: " + this.getHeight());
    console.log("Attack: " + this.getAttack());
    console.log("Defense: " + this.getDefense());
    console.log("Speed: " + this.getSpeed());
    console.log("HP: " + this.getMaxHealt());
  }
}