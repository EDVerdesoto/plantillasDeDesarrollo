import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPadreComponent } from './video-padre.component';

describe('VideoPadreComponent', () => {
  let component: VideoPadreComponent;
  let fixture: ComponentFixture<VideoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
