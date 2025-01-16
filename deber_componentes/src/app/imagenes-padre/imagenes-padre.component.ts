import { Component, ViewChild } from '@angular/core';
import { ImagenesHijoComponent } from '../imagenes-hijo/imagenes-hijo.component';

@Component({
  selector: 'app-imagenes-padre',
  imports: [ImagenesHijoComponent],
  templateUrl: './imagenes-padre.component.html',
  styleUrl: './imagenes-padre.component.css'
})
export class ImagenesPadreComponent {
  @ViewChild(ImagenesHijoComponent) imagenesHijo!: ImagenesHijoComponent;

  avanzarImagen() {
    this.imagenesHijo.avanzar();
  }

  retrocederImagen() {
    this.imagenesHijo.retroceder();
  }

  get imagenActual(): string {
    return this.imagenesHijo?.imagenActual || '';
  }
}
