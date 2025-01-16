import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-validar-formulario-hijo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './validar-formulario-hijo.component.html',
  styleUrls: ['./validar-formulario-hijo.component.css']
})
export class ValidarFormularioHijoComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  validarFormulario(): boolean {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
      return true;
    } else {
      console.log('Formulario inválido:', this.formulario.value);
      this.formulario.markAllAsTouched();
      return false;
    }
  }
}