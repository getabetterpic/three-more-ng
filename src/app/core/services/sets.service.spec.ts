import { SetsService } from './sets.service';

describe('SetsService', () => {
  beforeEach(() => it('should be created', () => {
    const service: SetsService = new SetsService();
    expect(service).toBeTruthy();
  });
});
