import { Component } from '@angular/core';


@Component({
  selector: 'app-calculadora-hijo',
  imports: [],
  templateUrl: './calculadora-hijo.component.html',
  styleUrl: './calculadora-hijo.component.css'
})
export class CalculadoraHijoComponent {

  calcularCarrito(productos: { nombre: string; precio: number }[]){
    
    let total = 0;

    productos.forEach((producto)=>{
      total += producto.precio;
    });

    return total;

  }

}
