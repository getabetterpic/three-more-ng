import { createAction, props } from '@ngrx/store';

export const loadCards = createAction('[Cards] Load Cards', props<{
  page?: string,
  perPage?: string,
  ids?: string[]
}>());
export const loadCardsSuccess = createAction('[Cards] Load Cards Success', props<{ cards: any[] }>());
export const loadCardsError = createAction('[Cards] Load Cards Error', props<{ errors: any[] }>());
export const setSelectedCardId = createAction('[Cards] Set Selected Card ID', props<{ cardId: string }>());
