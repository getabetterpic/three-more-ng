import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable({
  providedIn: 'root'
})
export class CardsStoreService {
  public cards$ = this.store.select(fromStore.selectCards);
  public selectedCard$ = this.store.select(fromStore.selectedCard);
  public cardsLoading$ = this.store.select(fromStore.selectCardsLoading);
  public cardsLoaded$ = this.store.select(fromStore.selectCardsLoaded);
  public cardErrors$ = this.store.select(fromStore.selectCardsError);

  constructor(
    private store: Store<fromStore.CardsState>
  ) { }
}
