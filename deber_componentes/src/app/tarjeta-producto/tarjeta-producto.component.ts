// Crea un componente que muestre una tarjeta de producto con información como nombre, precio y descripción.

import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [Input],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})

export class TarjetaProductoComponent {
  @Input() product?: { name: string, price: number, description: string };

  constructor() { }
}
