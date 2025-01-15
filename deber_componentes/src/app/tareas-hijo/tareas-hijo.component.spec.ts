import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasHijoComponent } from './tareas-hijo.component';

describe('TareasHijoComponent', () => {
  let component: TareasHijoComponent;
  let fixture: ComponentFixture<TareasHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
