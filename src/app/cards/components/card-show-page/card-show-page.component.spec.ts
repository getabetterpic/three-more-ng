import { of, Subject } from 'rxjs';
import createSpyObj = jasmine.createSpyObj;

import { CardShowPageComponent } from './card-show-page.component';

describe('CardShowPageComponent', () => {
  let component: CardShowPageComponent;
  let activatedRoute;
  let cardsService;
  let card;

  beforeEach(() => {
    activatedRoute = createSpyObj('ActivatedRoute', ['']);
    activatedRoute.paramMap = new Subject();
    cardsService = createSpyObj('CardsService', ['show']);
    component = new CardShowPageComponent(
      activatedRoute,
      cardsService
    );

    card = {
      id: '123',
      name: 'Experimental Frenzy'
    };

    cardsService.show.and.returnValue(of(card));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('gets the card info from the service', () => {
      component.ngOnInit();
      activatedRoute.paramMap.next(new Map([['cardId', '123']]));
      expect(cardsService.show).toHaveBeenCalledWith('123');
      expect(component.card).toEqual(card);
    });
  });
});
