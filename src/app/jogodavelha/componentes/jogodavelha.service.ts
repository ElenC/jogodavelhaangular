import {Injectable} from '@angular/core'

@Injectable()
export class JogodavelhaService{

private readonly tamanhoTab: number = 3;
private readonly X: number = 1;
private readonly O: number = 2;
private readonly vazio: number = 0;
private tabuleiro: any;
private movimento: number;
private vitoria: any;
private _jogador: number;
private _inicio: boolean;
private _mostarTabuleiro: boolean;
private _final: boolean;

constructor() { }
comecar(): void {
  let players =[this.X, this.O]
  this._inicio = true;
  this._mostarTabuleiro = false;
  this._final = false;
  this.movimento = 0;
  this._jogador = players[Math.floor(Math.random()*players.length)];;
  this.vitoria = false;
  this.iniciarTabuleiro();
}
iniciarTabuleiro(): void {
  this.tabuleiro = [this.tamanhoTab];
  for (let i = 0; i < this.tamanhoTab; i++) {
    this.tabuleiro[i] = [this.vazio, this.vazio, this.vazio];
  }
}
get inicio(): boolean {
  return this._inicio;
}
get mostarTabuleiro(): boolean {
  return this._mostarTabuleiro;
}
get final(): boolean {
  return this._final;
}
get jogador(): number {
  return this._jogador;
}
startGame(): void {
  this._inicio= false;
  this._mostarTabuleiro = true;
}
play(posX: number, posY: number): void {
  if (this.tabuleiro[posX][posY] !== this.vazio || this.vitoria) {
  return;
}
this.tabuleiro[posX][posY] = this._jogador;
this.movimento++;
this.vitoria = this.endGame(posX, posY,
this.tabuleiro, this._jogador);
this._jogador = (this._jogador === this.X) ? this.O : this.X;

if (this.vitoria !== false) {
  this._final = true;
}
if (!this.vitoria && this.movimento === 9) {
  this._jogador = 0;
  this._final = true;
}
}

endGame(row: number, column: number,
  tabuleiro: any, jogador: number) {
  let end: any = false;
  
  if (tabuleiro[row][0] === jogador &&
      tabuleiro[row][1] === jogador &&
      tabuleiro[row][2] === jogador) {
        end = [[row, 0], [row, 1], [row, 2]];
  }
  if (tabuleiro[0][column] === jogador &&
    tabuleiro[1][column] === jogador &&
    tabuleiro[2][column] === jogador) {
    end = [[0, column], [1, column], [2, column]];
  }
  if (tabuleiro[0][0] === jogador &&
    tabuleiro[1][1] === jogador &&
    tabuleiro[2][2] === jogador) {
      end = [[0, 0], [1, 1], [2, 2]];
  }
  if (tabuleiro[0][2] === jogador &&
    tabuleiro[1][1] === jogador &&
    tabuleiro[2][0] === jogador) {
      end = [[0, 2], [1, 1], [2, 0]];
  }
  return end;
}
obterJogada(jogador: number): number[] {
  let tab = this.tabuleiro;
  for (let lin = 0; lin < this.tamanhoTab; lin++) {
    for (let col = 0; col < this.tamanhoTab; col++) {
      if (tab[lin][col] !== this.vazio) {
        continue;
        }
      tab[lin][col] = jogador;
      if (this.endGame(lin, col, tab, jogador)) {
        return [lin, col];
      }
      tab[lin][col] = this.vazio;
    }
  }
  return [];
}
exibirX(posX: number, posY: number): boolean {
  return this.tabuleiro[posX][posY] === this.X;
}
exibirO(posX: number, posY: number): boolean {
  return this.tabuleiro[posX][posY] === this.O;
}
exibirVitoria(posX: number, posY: number): boolean {
  let exibirVitoria: boolean = false;

  if (!this.vitoria) {
    return exibirVitoria;
  }
  for (let pos of this.vitoria) {
    if (pos[0] === posX && pos[1] === posY) {
      exibirVitoria = true;
      break;
    }
  }
  return exibirVitoria;
}
newGame(): void {
  this.comecar();
  this._final = false;
  this._inicio = false;
  this._mostarTabuleiro = true;
  }
}



