import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosycertificacionesComponent } from './cursosycertificaciones.component';

describe('CursosycertificacionesComponent', () => {
  let component: CursosycertificacionesComponent;
  let fixture: ComponentFixture<CursosycertificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosycertificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosycertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
