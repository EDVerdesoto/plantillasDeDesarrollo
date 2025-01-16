import { Component } from '@angular/core';
import { CalculadoraHijoComponent } from '../calculadora-hijo/calculadora-hijo.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-calculadora-padre',
  standalone: true,
  imports: [CalculadoraHijoComponent, CommonModule],
  templateUrl: './calculadora-padre.component.html',
  styleUrl: './calculadora-padre.component.css'
})
export class CalculadoraPadreComponent {
  cartItems = [
    { name: 'Apple', price: 1.5, quantity: 3 },
    { name: 'Banana', price: 1.0, quantity: 5 },
    { name: 'Orange', price: 2.0, quantity: 2 }
  ];
}
