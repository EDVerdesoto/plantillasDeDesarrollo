import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FormularioPadreComponent } from './formulario-padre/formulario-padre.component';
import { ContadorPadreComponent } from './contador-padre/contador-padre.component';
import { ImagenesPadreComponent } from './imagenes-padre/imagenes-padre.component';
import { ValidarFormularioPadreComponent } from './validar-formulario-padre/validar-formulario-padre.component';

@Component({
  selector: 'app-root',
  imports: [
    EncabezadoComponent, 
    ContadorPadreComponent,
    FormularioPadreComponent,
    ImagenesPadreComponent,
    ValidarFormularioPadreComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deber_componentes';
}
