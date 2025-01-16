import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-hijo',
  standalone: true,
  imports: [],
  templateUrl: './video-hijo.component.html',
  styleUrl: './video-hijo.component.css'
})
export class VideoHijoComponent {
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;

  playVideo() {
    console.log('Reproduciendo video');
    this.videoElement.nativeElement.play();
  }
  
  pauseVideo() {
    console.log('Pausando video');
    this.videoElement.nativeElement.pause();
  }
  
}
