import { TestBed } from '@angular/core/testing';

import { Registro_PacienteService } from './registro.service';

describe('Registro_PacienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Registro_PacienteService = TestBed.get(Registro_PacienteService);
    expect(service).toBeTruthy();
  });
});
