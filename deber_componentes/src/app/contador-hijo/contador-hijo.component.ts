import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador-hijo',
  imports: [],
  templateUrl: './contador-hijo.component.html',
  styleUrl: './contador-hijo.component.css'
})
export class ContadorHijoComponent {
  @Output() contadorCambiado = new EventEmitter<number>();
  contador = 0;

  cambiarValor(valor: number) {
    this.contador += valor;
    this.contadorCambiado.emit(this.contador);
  }
}
