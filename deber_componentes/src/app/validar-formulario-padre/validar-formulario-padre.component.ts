import { Component, ViewChild } from '@angular/core';
import { ValidarFormularioHijoComponent } from '../validar-formulario-hijo/validar-formulario-hijo.component';

@Component({
  selector: 'app-validar-formulario-padre',
  standalone: true,
  imports: [ValidarFormularioHijoComponent],
  templateUrl: './validar-formulario-padre.component.html',
  styleUrls: ['./validar-formulario-padre.component.css']
})
export class ValidarFormularioPadreComponent {
  @ViewChild(ValidarFormularioHijoComponent) formularioHijo!: ValidarFormularioHijoComponent;

  validarFormularioHijo() {
    const esValido = this.formularioHijo.validarFormulario();
    if (esValido) {
      alert('El formulario es válido');
    } else {
      alert('El formulario es inválido');
    }
  }
}
