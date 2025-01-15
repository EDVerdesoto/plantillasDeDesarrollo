import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarFormularioHijoComponent } from './validar-formulario-hijo.component';

describe('ValidarFormularioHijoComponent', () => {
  let component: ValidarFormularioHijoComponent;
  let fixture: ComponentFixture<ValidarFormularioHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarFormularioHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarFormularioHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
