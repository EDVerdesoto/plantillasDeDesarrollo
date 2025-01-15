import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHijoComponent } from './video-hijo.component';

describe('VideoHijoComponent', () => {
  let component: VideoHijoComponent;
  let fixture: ComponentFixture<VideoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
