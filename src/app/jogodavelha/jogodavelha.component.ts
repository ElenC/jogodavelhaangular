import { Component, OnInit } from '@angular/core';

import { JogodavelhaService } from './componentes';


@Component({
  selector: 'app-jogodavelha',
  templateUrl: './jogodavelha.component.html',
  styleUrls: ['./jogodavelha.component.css']
})
export class JogodavelhaComponent implements OnInit {

constructor(private jogodavelhaService: JogodavelhaService) { }
ngOnInit() {
  this.jogodavelhaService.comecar();
}
get inicio(): boolean {
  return this.jogodavelhaService.inicio;
}
get mostarTabuleiro(): boolean {
  return this.jogodavelhaService.mostarTabuleiro;
}
get final(): boolean {
  return this.jogodavelhaService.final;
}
get jogador(): number {
  return this.jogodavelhaService.jogador;
}
startGame(): void {
  this.jogodavelhaService.startGame();
}
play(posX: number, posY: number): void {
  this.jogodavelhaService.play(posX, posY);
}
exibirX(posX: number, posY: number): boolean {
  return this.jogodavelhaService.exibirX(posX, posY);
}
exibirO(posX: number, posY: number): boolean {
  return this.jogodavelhaService.exibirO(posX, posY);
}
exibirVitoria(posX: number, posY: number): boolean {
  return this.jogodavelhaService.exibirVitoria(posX, posY);
}
newGame(): void {
  this.jogodavelhaService.newGame();
}
}


