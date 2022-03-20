/**
 * Clase que simula el juego conecta 4
 */
export class Conecta_4 {
  private yellow_tokes: number;
  private red_tokens: number;
  private grid: string[][] = [];

  constructor() {
    this.yellow_tokes = 21;
    this.red_tokens = 21;
    for(let i = 0; i < 6; i++) {
      this.grid.push(['▢','▢','▢','▢','▢','▢','▢']);
    }
  }

  /**
   * Simulacion del juego
   */
  play() {
    let scanf = require('scanf');
    let turn: number = 1;
    let col: number = 0;
    let winner: boolean = false;
    console.log('=> Turno 0 <=');
    this.printGrid();

    while(winner == false) {
      if(turn % 2 != 0) { //player 1
        console.log('Turno del Jugador 1');
        console.log('Ingrese la columna [0 - 6]:')
        col = scanf('%d');
        while (true) {
          if (col < 0 || col > 5) {
            console.log('Ingrese una columna correcta [0 - 6]:')
            col = scanf('%d');
          } else {
            break;
          }
        }
        if(this.fullColumn(col)) {
          console.log('Ingrese la columna [0 - 6]:')
          col = scanf('%d');  
        } else {
          if (this.yellow_tokes > 0) {
            this.insertIntoColumn(col, 1);
          }
        }
        //comprobacion de la pos i, j horizontal
        //comprobacion de la pos i, j vertical
        //comprobacion de la pos i, j diagonal
        
      } else { //player 2
        console.log('Turno del Jugador 2');
        console.log('Ingrese la columna [0 - 6]:')
        col = scanf('%d');
        while (true) {
          if (col < 0 || col > 7) {
            console.log('Ingrese una columna correcta [0 - 6]:')
            col = scanf('%d');
          } else {
            break;
          }
        }
        if(this.fullColumn(col)) {
          console.log('Ingrese la columna [0 - 6]:')
          col = scanf('%d');  
        } else {
          if(this.red_tokens > 0) {
          this.insertIntoColumn(col, 2);
          }
        }
        //comprobacion de la pos i, j horizontal
        //comprobacion de la pos i, j vertical
        //comprobacion de la pos i, j diagonal
      }
      console.log('=> Turno ' + turn + ' <=');
      this.printGrid();
      turn++;
    }
  }

  /**
   * Imprime la rejilla
   */
  printGrid() {
    let row: string = '';
    for(let i = 0; i < 6; i++) {
      row = '';
      for(let j = 0; j < 7; j++) {
        row += this.grid[i][j] + '\t';
      }
      console.log(row);
    }
  }

  /**
   * Comprueba si la columna esta llena de fichas
   * @param col columna a comprobar
   * @returns si esta llena o no la columna
   */
  fullColumn(col: number): boolean {
    let count: number = 0;
    for(let i = 0; i < 6; i++) {
      if(this.grid[i][col] == 'A' || this.grid[i][col] == 'R') {
        count++;
      }
    }
    return (count == 7);
  }

  /**
   * Método que comprueba la ultima pos libre de la columna y lo inserta
   * @param col columna a insertar la ficha
   * @param player jugador que coloca la ficha
   */
  insertIntoColumn(col: number, player: number) {
    for(let i = 5; i <= 0; i--) {
      if(this.grid[i][col] == '▢') {
        if(player == 1) {
          this.grid[i][col] = 'A';
          this.yellow_tokes--;
        } else {
          this.grid[i][col] = 'R';
          this.red_tokens--;
        }
        break;
      }
    }
  }

}