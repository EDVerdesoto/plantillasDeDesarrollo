import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarFormularioPadreComponent } from './validar-formulario-padre.component';

describe('ValidarFormularioPadreComponent', () => {
  let component: ValidarFormularioPadreComponent;
  let fixture: ComponentFixture<ValidarFormularioPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarFormularioPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarFormularioPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
