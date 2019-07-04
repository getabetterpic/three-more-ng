import { TestBed } from '@angular/core/testing';

import { CardsStoreService } from './cards-store.service';

describe('CardsStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardsStoreService = TestBed.get(CardsStoreService);
    expect(service).toBeTruthy();
  });
});
