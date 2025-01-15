import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPadreComponent } from './datos-padre.component';

describe('DatosPadreComponent', () => {
  let component: DatosPadreComponent;
  let fixture: ComponentFixture<DatosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
