import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCards from './card.reducers';

export interface CardsState {
  cards: fromCards.CardsState;
}

export const reducers: ActionReducerMap<CardsState> = {
  cards: fromCards.reducer
};

export const selectCardsState = createFeatureSelector<CardsState>('cards');
