import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CardsService } from '@/app/core/services/cards.service';
import { catchError, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromActions from '../actions';

@Injectable()
export class CardEffects {
  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadCards),
    distinctUntilChanged(),
    mergeMap(({ searchTerm }) => this.cardsService.index(searchTerm)
      .pipe(
        map(({ cards }) => (fromActions.loadCardsSuccess({ cards }))),
        catchError((err) => of(fromActions.loadCardsError({ errors: err })))
      ))
  ));

  constructor(
    private actions$: Actions,
    private cardsService: CardsService
  ) {}
}
