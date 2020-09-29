import { JogodavelhaService } from './jogodavelha.service';

import { TestBed } from '@angular/core/testing';

describe('JogodavelhaService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
  
    it('should be created', () => {
      const service: JogodavelhaService = TestBed.get(JogodavelhaService);
      expect(service).toBeTruthy();
    });
  });
  