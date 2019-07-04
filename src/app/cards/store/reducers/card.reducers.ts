import * as cardActions from '../actions/card.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface CardsState {
  cards: any[];
  searchTerm: string;
  loading: boolean;
  loaded: boolean;
  errors: any[];
}

export const initialState: CardsState = {
  cards: [],
  searchTerm: '',
  loading: false,
  loaded: false,
  errors: null
};

const cardsReducer = createReducer(
  initialState,
  on(cardActions.loadCards, (state, { searchTerm }) => {
    return {
      ...state,
      loading: true,
      searchTerm
    };
  }),
  on(cardActions.loadCardsSuccess, (state, {cards}) => {
    return {
      ...state,
      cards,
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
