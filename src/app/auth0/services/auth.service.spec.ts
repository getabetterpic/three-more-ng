import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => it('should be created', () => {
    const service: AuthService = new AuthService();
    expect(service).toBeTruthy();
  });
});
