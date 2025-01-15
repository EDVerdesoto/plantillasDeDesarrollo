import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesHijoComponent } from './imagenes-hijo.component';

describe('ImagenesHijoComponent', () => {
  let component: ImagenesHijoComponent;
  let fixture: ComponentFixture<ImagenesHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenesHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
