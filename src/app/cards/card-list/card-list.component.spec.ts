import { of } from 'rxjs';
import createSpyObj = jasmine.createSpyObj;

import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let cardsService;

  beforeEach(() => {
    cardsService = createSpyObj('CardsService', ['index']);
    component = new CardListComponent(cardsService);
    cardsService.index.and.returnValue(of([]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('gets the cards', () => {
      component.ngOnInit();
      expect(cardsService.index).toHaveBeenCalled();
    });
  });
});
