import * as cardActions from '../actions/card.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface CardsState {
  search: string;
  loading: boolean;
  loaded: boolean;
  errors: any[];
  entities: { [key: string]: any };
  selectedCardId: string;
  ids: string[];
}

export const initialState: CardsState = {
  search: '',
  loading: false,
  loaded: false,
  errors: null,
  entities: {},
  selectedCardId: null,
  ids: []
};

const cardsReducer = createReducer(
  initialState,
  on(cardActions.loadCards, (state, { ids }) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      ids
    };
  }),
  on(cardActions.setSelectedCardId, (state, { cardId }) => {
    return {
      ...state,
      selectedCardId: cardId
    };
  }),
  on(cardActions.loadCardsSuccess, (state, { cards }) => {
    const entities = cards.reduce((accum, card) => {
      return {
        ...accum,
        [card.id]: card
      };
    }, {});
    return {
      ...state,
      entities,
      loading: false,
      loaded: true
    };
  }),
  on(cardActions.loadCardsError, (state, { errors }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      errors
    };
  })
);

export function reducer(state: CardsState | undefined, action: Action) {
  return cardsReducer(state, action);
}
