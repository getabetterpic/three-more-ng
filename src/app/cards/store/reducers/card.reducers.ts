import * as cardActions from '../actions/card.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface CardsState {
  cards: any[];
  search: string;
  loading: boolean;
  loaded: boolean;
  errors: any[];
}

export const initialState: CardsState = {
  cards: [],
  search: '',
  loading: false,
  loaded: false,
  errors: null
};

const cardsReducer = createReducer(
  initialState,
  on(cardActions.loadCards, (state, { search }) => {
    return {
      ...state,
      loading: true,
      loaded: false,
      search
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
  }),
  on(cardActions.updateSearch, (state, { search }) => {
    return {
      ...state,
      search,
      loaded: false
    };
  })
);

export function reducer(state: CardsState | undefined, action: Action) {
  return cardsReducer(state, action);
}
