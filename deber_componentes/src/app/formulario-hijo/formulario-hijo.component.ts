import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-hijo',
  imports: [FormsModule],
  templateUrl: './formulario-hijo.component.html',
  styleUrl: './formulario-hijo.component.css'
})
export class FormularioHijoComponent {
  @Input() nombre: string = '';
  @Input() edad: number = 0;

  @Output() datosEnviados = new EventEmitter<string>(); 

  resultado: string = '';

  enviarFormulario() {
    this.resultado = `Bienvenido ${this.nombre}, te quedan ${60-this.edad} años para jubilarte`; 
    this.datosEnviados.emit(this.resultado);
  }

  limpiarFormulario() {
    this.nombre= '';
    this.edad = 0;
    this.datosEnviados.emit('');
  }
}
