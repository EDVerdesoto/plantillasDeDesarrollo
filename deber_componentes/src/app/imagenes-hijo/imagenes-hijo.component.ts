import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-imagenes-hijo',
  standalone: true,
  imports: [EventEmitter, Output],
  templateUrl: './imagenes-hijo.component.html',
  styleUrl: './imagenes-hijo.component.css'
})
export class ImagenesHijoComponent {
  imagenes = [
      'https://wallpapers.com/images/featured/persona-5-x1ajqwtc4232sg68.jpg',
      'https://img.goodfon.com/original/1920x1080/c/43/persona-4-persona-4-art-anime-igra-paren-vzgliad-fon.jpg',
      'https://pbs.twimg.com/media/FyXX8mAWcAIDpmS?format=jpg&name=large'
  ];
  
  indice = 0;

  avanzar(){
    this.indice = (this.indice+1) % this.imagenes.length;
  }

  retroceder(){
    this.indice = (this.indice-1) % this.imagenes.length;
  }

  get imagenActual(): string {
    return this.imagenes[this.indice];
  }
}
