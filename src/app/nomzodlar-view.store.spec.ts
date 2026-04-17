import { TestBed } from '@angular/core/testing';

import { NomzodlarViewStore } from './nomzodlar-view.store';

describe('NomzodlarViewStore', () => {
  let service: NomzodlarViewStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomzodlarViewStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
