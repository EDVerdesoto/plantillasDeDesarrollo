import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-imagenes-hijo',
  standalone: true,
  imports: [],
  templateUrl: './imagenes-hijo.component.html',
  styleUrl: './imagenes-hijo.component.css'
})
export class ImagenesHijoComponent {
  imagenes = [
      'https://wallpapers.com/images/featured/persona-5-x1ajqwtc4232sg68.jpg',
      'https://img.goodfon.com/original/1920x1080/c/43/persona-4-persona-4-art-anime-igra-paren-vzgliad-fon.jpg',
      'https://wallpapercave.com/wp/wp13375707.jpg'
  ];
  
  indice = 0;

  avanzar(){
    this.indice = (this.indice+1) % this.imagenes.length;
  }

  retroceder(){
    if(this.indice == 0) this.indice = this.imagenes.length-1;
    else this.indice = (this.indice-1) % this.imagenes.length;
  }

  get imagenActual(): string {
    return this.imagenes[this.indice];
  }
}
