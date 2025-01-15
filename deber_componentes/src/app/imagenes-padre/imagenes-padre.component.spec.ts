import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesPadreComponent } from './imagenes-padre.component';

describe('ImagenesPadreComponent', () => {
  let component: ImagenesPadreComponent;
  let fixture: ComponentFixture<ImagenesPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenesPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
