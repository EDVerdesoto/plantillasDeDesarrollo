import { Component } from '@angular/core';
import { ContadorHijoComponent } from '../contador-hijo/contador-hijo.component';

@Component({
  selector: 'app-contador-padre',
  imports: [ContadorHijoComponent],
  templateUrl: './contador-padre.component.html',
  styleUrl: './contador-padre.component.css'
})
export class ContadorPadreComponent {
  contador = 0;

  actualizarContador(nuevoValor: number) {
    this.contador = nuevoValor;
  }
}
