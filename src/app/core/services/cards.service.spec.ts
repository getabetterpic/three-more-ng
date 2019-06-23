import { CardsService } from './cards.service';
import createSpyObj = jasmine.createSpyObj;
import { of } from 'rxjs';

describe('CardsService', () => {
  let service: CardsService;
  let http;

  beforeEach(() => {
    http = createSpyObj('HttpClient', ['get']);
    service = new CardsService(http);
    http.get.and.returnValue(of([]));
  });

  describe('index', () => {
    it('gets the cards index endpoint', () => {
      service.index().subscribe();
      expect(http.get).toHaveBeenCalledWith('/api/v1/cards', {
        params: {
          q: '',
          page: '1',
          perPage: undefined
        }
      });
    });
  });

  describe('show', () => {
    it('gets the card by id', () => {
      service.show('123').subscribe();
      expect(http.get).toHaveBeenCalledWith('/api/v1/cards/123');
    });
  });
});
