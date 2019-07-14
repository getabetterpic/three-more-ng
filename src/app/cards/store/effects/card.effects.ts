import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CardsService } from '@/app/core/services/cards.service';
import { catchError, distinctUntilChanged, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromActions from '../actions';
import * as fromRoot from '@/app/store';

@Injectable()
export class CardEffects {
  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadCards),
    distinctUntilChanged(),
    mergeMap(({ ids }) => {
      return this.store.select(fromRoot.getQueryParams).pipe(
        switchMap(({ search, standard_legal, set }) => {
          return this.cardsService.index({ search, page: '1', ids, standard_legal, set });
        }),
        take(1)
      );
    }),
    map(({ cards }) => fromActions.loadCardsSuccess({ cards })),
    catchError((err) => of(fromActions.loadCardsError({ errors: err })))
  ));

  constructor(
    private actions$: Actions,
    private cardsService: CardsService,
    private store: Store<fromRoot.State>
  ) {}
}
