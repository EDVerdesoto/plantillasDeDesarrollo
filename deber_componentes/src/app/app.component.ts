import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FormularioPadreComponent } from './formulario-padre/formulario-padre.component';
import { ContadorPadreComponent } from './contador-padre/contador-padre.component';
import { CalculadoraPadreComponent } from './calculadora-padre/calculadora-padre.component';
import { CalculadoraHijoComponent } from './calculadora-hijo/calculadora-hijo.component';
import { VideoHijoComponent } from './video-hijo/video-hijo.component';
import { VideoPadreComponent } from './video-padre/video-padre.component';
import { ImagenesPadreComponent } from './imagenes-padre/imagenes-padre.component';
import { ValidarFormularioPadreComponent } from './validar-formulario-padre/validar-formulario-padre.component';

@Component({
  selector: 'app-root',
  imports: [
    EncabezadoComponent, 
    ContadorPadreComponent,
    FormularioPadreComponent,
    CalculadoraHijoComponent,
    CalculadoraPadreComponent,
    VideoHijoComponent,
    VideoPadreComponent,
    ImagenesPadreComponent,
    ValidarFormularioPadreComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deber_componentes';
}
