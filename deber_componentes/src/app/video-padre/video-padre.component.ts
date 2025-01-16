import { Component, ViewChild } from '@angular/core';
import { VideoHijoComponent } from '../video-hijo/video-hijo.component';

@Component({
  selector: 'app-video-padre',
  standalone: true,
  imports: [VideoHijoComponent],
  templateUrl: './video-padre.component.html',
  styleUrl: './video-padre.component.css'
})
export class VideoPadreComponent {
  @ViewChild(VideoHijoComponent) videoHijo!: VideoHijoComponent;
  isPlaying = false;

  toggleVideo() {
    this.isPlaying = !this.isPlaying;
    console.log(this.isPlaying ? 'Reproduciendo' : 'Pausando');
    
    if (this.isPlaying) {
      this.videoHijo.playVideo();
    } else {
      setTimeout(() => {  
        this.videoHijo.pauseVideo();
      }, 50); 
    }
  }
  
}
