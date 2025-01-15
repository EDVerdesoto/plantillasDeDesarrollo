import { Component } from '@angular/core';
import { FormularioHijoComponent } from '../formulario-hijo/formulario-hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-padre',
  imports: [FormularioHijoComponent, FormsModule],
  templateUrl: './formulario-padre.component.html',
  styleUrl: './formulario-padre.component.css'
})

export class FormularioPadreComponent {
  nombre: string = '';
  edad: number = 0;

  resultadoPadre: string = '';

  ActualizarResultado(resultado: string){
    this.resultadoPadre = resultado;
  }
}
