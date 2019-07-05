import createSpyObj = jasmine.createSpyObj;

import { RootStoreService } from './root-store.service';

describe('RootStoreService', () => {
  let service: RootStoreService;
  let store;

  beforeEach(() => {
    store = createSpyObj('Store', ['select']);
    service = new RootStoreService(store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
