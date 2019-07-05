import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CardsService } from '@/app/core/services/cards.service';
import { catchError, distinctUntilChanged, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromActions from '../actions';
import * as fromRoot from '@/app/store';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Store } from '@ngrx/store';

@Injectable()
export class CardEffects {
  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadCards),
    distinctUntilChanged(),
    mergeMap(({ search }) => this.cardsService.index(search)
      .pipe(
        map(({ cards }) => fromActions.loadCardsSuccess({ cards })),
        catchError((err) => of(fromActions.loadCardsError({ errors: err })))
      ))
  ));

  updateUrl$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.updateSearch),
    distinctUntilChanged(),
    map(({ search }) => fromRoot.Go({ path: ['/cards'], query: { search } }))
  ));

  queryParamsChanged$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    switchMap(() => this.store.select(fromRoot.getQueryParams)),
    distinctUntilChanged(),
    map(({ search }) => fromActions.loadCards({ search }))
  ));

  constructor(
    private actions$: Actions,
    private cardsService: CardsService,
    private store: Store<fromRoot.State>
  ) {}
}
