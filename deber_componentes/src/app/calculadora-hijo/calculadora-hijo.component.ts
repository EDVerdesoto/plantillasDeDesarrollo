import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-calculadora-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculadora-hijo.component.html',
  styleUrl: './calculadora-hijo.component.css'
})
export class CalculadoraHijoComponent {

  @Input() items: { name: string; price: number; quantity: number }[] = [];

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

}
