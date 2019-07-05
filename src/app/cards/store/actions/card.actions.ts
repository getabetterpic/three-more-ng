import { createAction, props } from '@ngrx/store';

export const loadCards = createAction('[Cards] Load Cards', props<{
  search?: string,
  page?: string,
  perPage?: string
}>());
export const loadCardsSuccess = createAction('[Cards] Load Cards Success', props<{ cards: any[] }>());
export const loadCardsError = createAction('[Cards] Load Cards Error', props<{ errors: any[] }>());
export const updateSearch = createAction('[Cards] Update Search', props<{ search: string }>());
