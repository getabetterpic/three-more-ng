import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable({
  providedIn: 'root'
})
export class CardsStoreService {
  public searchTerm$ = this.store.select(fromStore.selectSearchTerm);
  public cards$ = this.store.select(fromStore.selectCards);
  public cardsLoading$ = this.store.select(fromStore.selectCardsLoading);
  public cardsLoaded$ = this.store.select(fromStore.selectCardsLoaded);
  public cardErrors$ = this.store.select(fromStore.selectCardsError);

  constructor(
    private store: Store<fromStore.CardsState>
  ) { }

  public updateSearch(search: string): void {
    this.store.dispatch(fromStore.updateSearch({ search }));
  }

  public getCards(searchTerm: string, page: string = '1', perPage?: string): void {
    this.store.dispatch(fromStore.loadCards({ search: searchTerm, page, perPage }));
  }
}
