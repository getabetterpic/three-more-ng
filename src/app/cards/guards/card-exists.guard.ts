import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, of, zip } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

@Injectable()
export class CardExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.CardsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const cardId = route.paramMap.get('cardId');
    this.store.dispatch(fromStore.setSelectedCardId({ cardId }));
    return this.checkCards(cardId).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  private cardExists(cardId: string): Observable<boolean> {
    return this.store.select(fromStore.selectCardEntities).pipe(
      map((entities) => !!entities[cardId]),
      take(2) // Once for checking if the card exists, the second to give the card a chance to load
    );
  }

  private checkCards(cardId: string): Observable<boolean> {
    return zip(this.cardExists(cardId)).pipe(
      tap(([cardLoaded]) => {
        if (!cardLoaded) {
          this.store.dispatch(fromStore.loadCards({ ids: [cardId] }));
        }
      }),
      map(([cardLoaded]) => cardLoaded),
      filter((cardLoaded) => cardLoaded),
      take(1)
    );
  }
}
