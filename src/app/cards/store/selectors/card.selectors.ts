import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCards from '../reducers/card.reducers';

export const selectCardState = createSelector(
  fromFeature.selectCardsState,
  (state: fromFeature.CardsState) => state.cards
);

export const selectCardEntities = createSelector(
  selectCardState,
  (state: fromCards.CardsState) => state.entities
);

export const selectCards = createSelector(
  selectCardEntities,
  (entities) => Object.keys(entities).map((cardId) => entities[cardId])
);

export const selectedCardId = createSelector(
  selectCardState,
  (state) => state.selectedCardId
);

export const selectedCard = createSelector(
  selectCardEntities,
  selectedCardId,
  (entities, cardId) => entities[cardId]
);

export const selectCardsLoading = createSelector(
  selectCardState,
  (state: fromCards.CardsState) => state.loading
);

export const selectCardsLoaded = createSelector(
  selectCardState,
  (state: fromCards.CardsState) => state.loaded
);

export const selectCardsError = createSelector(
  selectCardState,
  (state: fromCards.CardsState) => state.errors
);

export const selectSearchTerm = createSelector(
  selectCardState,
  (state: fromCards.CardsState) => state.search
);
